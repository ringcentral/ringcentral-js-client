/// <reference path="../externals.d.ts" />

import mocha = require('../test/mocha');
var expect = mocha.chai.expect;
var spy = mocha.sinon.spy;
var client = mocha.client;
var getRegistry = mocha.getRegistry;

describe('Client.clients.CallLog', function() {

    'use strict';

    var CallLog = client.callLog(),
        data = [
            {
                "uri": "https://api.ringcentral.com/restapi/v1.0/account/123/extension/321/call-log/B0iTLeNN-expL4g",
                "id": "B0iTLeNN-expL4g",
                "sessionId": "88052061020",
                "startTime": "2014-12-11T00:48:08.000Z",
                "duration": 11,
                "type": "Voice",
                "direction": "Inbound",
                "action": "Phone Call",
                "result": "Accepted",
                "to": {"phoneNumber": "1855COMPANY", "name": "Called Ext Name"},
                "from": {"phoneNumber": "1650CALLER0", "name": "Called Ext Name", "location": "San Mateo, CA"}
            },
            {
                "uri": "https://api.ringcentral.com/restapi/v1.0/account/123/extension/321/call-log/B0iNkuy10B0FLG0",
                "id": "B0iNkuy10B0FLG0",
                "sessionId": "88051027020",
                "startTime": "2014-12-11T00:40:13.000Z",
                "duration": 11,
                "type": "Voice",
                "direction": "Inbound",
                "action": "Phone Call",
                "result": "Accepted",
                "to": {"phoneNumber": "1855COMPANY", "name": "Called Ext Name"},
                "from": {"phoneNumber": "1650CALLER0", "name": "Called Ext Name", "location": "San Mateo, CA"}
            }
        ];

    describe('loadExtensionCallLog()', function() {

        it('returns URL depending on options', function() {

            getRegistry().apiCall('GET', '/restapi/v1.0/account/~/extension/~/call-log', {records: data});

            return CallLog
                .loadExtensionCallLog()
                .then((calls:any) => {

                    expect(calls.getClassName()).to.equal('ExtensionCallLogResponse');
                    expect(calls.records[0].getClassName()).to.equal('CallLogRecord');

                    expect(calls.records[0].id).to.equal(data[0].id);
                    expect(calls.records[1].id).to.equal(data[1].id);
                    expect(calls.records[1].getId()).to.equal(data[1].id);

                });

        });

    });

});
