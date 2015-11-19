/// <reference path="../externals.d.ts" />

import mocha = require('../test/mocha');
var expect = mocha.chai.expect;
var spy = mocha.sinon.spy;
var sdk = mocha.sdk;

import callLogRecord = require('../models/CallLogRecord');

describe('Client.models.CallLogRecord', function() {

    'use strict';

    var data = {
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
    };

    describe('construct()', function() {

        it('returns correct model', function() {

            var call = new callLogRecord.CallLogRecord(sdk, data);

            expect(call.getClassName()).to.equal('CallLogRecord');

            expect(call.id).to.equal(data.id);
            expect(call.getId()).to.equal(data.id);

        });

    });

});
