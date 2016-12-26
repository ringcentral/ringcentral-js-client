import testConfig from "./config";
import Client from "../src/Client";
import { expect } from "chai";
import { createReadStream } from "fs";
import * as RingCentral from "ringcentral";

let client: Client;
const inNode = !!createReadStream;

before(function () {
    // runs before all tests in this block
    return testConfig.then(conf => {
        let config = conf;
        client = new Client(new RingCentral(config.app));
        return client.service.platform().login(config.user);
    });
});

describe("PathSegments", function () {

    /**
     * AnsweringRule list:
     { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100',
  records:
   [ { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule/business-hours-rule',
       id: 'business-hours-rule',
       type: 'BusinessHours',
       enabled: true,
       callHandlingAction: 'ForwardCalls' },
     { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule/36288004',
       id: '36288004',
       type: 'Custom',
       name: 'TestRule1',
       enabled: true,
       schedule: [Object],
       callers: [Object],
       callHandlingAction: 'ForwardCalls' } ],
  paging:
   { page: 1,
     totalPages: 1,
     perPage: 100,
     totalElements: 2,
     pageStart: 0,
     pageEnd: 1 },
  navigation:
   { firstPage: { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100' },
     lastPage: { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100' } } }

     */
    it("AnsweringRule", function () {
        let ext = client.account().extension();
        let id: string;
        return ext.answeringRule().post({
            enabled: false,
            callers: [{
                callerId: "+46843216868"
            }]
        }).then(res => id = res.id)
            .then(res => ext.answeringRule(id).get())
            .then(res => ext.answeringRule(id).put({ name: "updated." }))
            .then(res => ext.answeringRule().list())
            .then(res => ext.answeringRule(id).delete());
    });

    describe("BlockedNumber", function () {

        it("covers all", function () {
            let ext = client.account().extension();
            let createdId: string;
            let createdBlockedPhoneNumber = "+18989999";
            let updatedBlockedPhoneNumber = "+12222898";
            return ext.blockedNumber().post({ phoneNumber: createdBlockedPhoneNumber }).then(res => {
                createdId = res.id;
                expect(res.phoneNumber).to.eqls(createdBlockedPhoneNumber);
                return ext.blockedNumber(createdId).get();
            }).then(res => ext.blockedNumber().list())
                .then(res => {
                    // FIXME Report: Error: Parameter blockedNumberId value in request body doesn't match specified in path. Maybe server error.
                    // /return ext.blockedNumber(createdId).put({ phoneNumber: updatedBlockedPhoneNumber });
                }).then(res => {
                    //expect(res.phoneNumber).eqls(updatedBlockedPhoneNumber);
                }).then(res => {
                    return ext.blockedNumber(createdId).delete();
                });
        });

    });

    describe("Contacts", function () {

        it("covers all", function () {
            let addressBook = client.account().extension().addressBook();
            let createdId: string;
            return addressBook.contact().post({ firstName: "Test" })
                .then(res => {
                    createdId = res.id;
                })
                .then(res => addressBook.contact(createdId).get())
                .then(res => addressBook.contact().list())
                .then(res => {
                    return addressBook.contact(createdId).put({ firstName: "ModifiedFirstName" });
                })
                .then(res => addressBook.contact(createdId).delete());
        });
    });

    describe("Subscription", function () {

        it("covers all", function () {
            let createdId: string;
            return client.subscription().post({
                eventFilters: ["/restapi/v1.0/account/~/extension/~/presence?detailedTelephonyState=true"],
                deliveryMode: { transportType: "PubNub", encryption: true }
            }).then(res => createdId = res.id)
                .then(res => client.subscription(createdId).get())
                .then(res => client.subscription(createdId).put({ eventFilters: ["/restapi/v1.0/account/~/extension/~/message-store"] }))
                .then(res => client.subscription(createdId).delete());
        });

    });

    describe("Meeting", function () {

        it.skip("covers all", function () {
            let createdId: string;
            let ext = client.account().extension();
            return ext.meeting().post({ meetingType: "Instant" })   // Error reported, "errorCode" : "CMN-408",\n  "message" : "[Meetings] permission required", maybe sandbox doesn't support meetings API yet.
                .then(res => createdId = res.id)
                .then(res => ext.meeting(createdId).delete()).catch(e => console.log(e));
        });

    });

    describe("Ringout", function () {

        it("covers all", function () {
            let id: string;
            return client.account().extension().ringout().post({
                from: { phoneNumber: "+16507411615" },
                to: { phoneNumber: "+16507411615" }
            }).then(res => id = res.id)
                .then(res => client.account().extension().ringout(id).get())
                .then(res => client.account().extension().ringout(id).delete());
        });

    });

    describe("ForwardingNumber", function () {

        it("covers all", function () {
            let id: string;
            return client.account().extension().forwardingNumber().post({ label: "test", phoneNumber: "+16507411615" })
                .then(res => client.account().extension().forwardingNumber());
        });

    });

});
