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

describe("Url segments coverage", function () {

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
        let answeringRule = client.account().extension().answeringRule();
        return answeringRule.list().then(res => {
            console.log(">>> post", res.records[0].schedule);
        });
    });

});