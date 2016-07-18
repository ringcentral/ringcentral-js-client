# Ringcentral Client API design

The API discussed here is for operation(CRUD) only. There are 4 categories of operation: create, read, update, delete, corresponding to the 4 http methods: post, get, put, delete.

## API Entry

```typescript
var client: RingcentralClient;
```

## Sample Operations
`GET /account/{accountId}/call-log`
Read a list of call logs. https://developer.ringcentral.com/api-docs/latest/index.html#!#RefAccountCallLog.html

`GET /account/{accountId}/call-log/{callRecordId}`
Read a specified call log. https://developer.ringcentral.com/api-docs/latest/index.html#!#RefAccountCallLogRecord.html

## API Proposals

### Proposal 1

Pattern: `client.{tag}.{operationId}({ModelObject})`
```typescript
// Read account call logs. Method name "loadAccountCallLog" is from property "operationId" of swagger spec json.
client.callLog.loadAccountCallLog({
	accountId: '~', // path parameter,
	phoneNumber: 'xxx', // query parameter
	...
}).then(function (result: accountcalllog.AccountCallLog) {
	console.log('result', result);
});

// Read a call log
client.callLog.loadAccountCallLogRecord({
	callRecordId: 'xxx', // query parameter
	//...
}).then(function (result: accountcalllogrecord.AccountCallLogRecord) {
	console.log('result', result);
});

// Send sms
client.messages.sendSMS({
	'extensionId':string,
    'body':createsmsmessage.CreateSMSMessage
	...
}).then(function(result: messageinfo.MessageInfo) {
});


```

All operation api list(104):
```typescript
client.authentication.loadTokenClientCredentials()
client.account.createAccount()
client.account.loadAccount()
client.account.loadAccountBusinessAddress()
client.account.updateAccountBusinessAddress()
client.account.listDialingPlans()
client.account.provisionPhoneNumber()
client.account.listAccountPhoneNumbers()
client.account.loadAccountPhoneNumber()
client.account.loadServiceInfo()
client.extension.listExtensions()
client.extension.loadExtensionInfo()
client.extension.listExtensionPhoneNumbers()
client.extension.listExtensionGrants()
client.extension.loadExtensionProfileImage()
client.extension.createExtensionProfileImage()
client.extension.updateExtensionProfileImage()
client.extension.loadExtensionScaledProfileImage()
client.extension.listDepartmentMembers()
client.addressbook.createContact()
client.addressbook.listContacts()
client.addressbook.loadContact()
client.addressbook.updateContact()
client.addressbook.deleteContact()
client.addressbook.listAddressBookGroups()
client.addressbook.loadAddressBookGroup()
client.addressbook.syncAddressBook()
client.addressbook.loadFavoriteContacts()
client.addressbook.updateFavoriteContacts()
client.answeringrules.loadAnsweringRulesList()
client.answeringrules.createAnsweringRuleInfo()
client.answeringrules.loadAnsweringRuleInfo()
client.answeringrules.updateAnsweringRuleInfo()
client.answeringrules.deleteAnsweringRuleInfo()
client.answeringrules.loadUserBusinessHours()
client.authorizationprofile.loadUserPermissions()
client.authorizationprofile.loadUserPermission()
client.blockednumbers.blockNumber()
client.blockednumbers.listBlockedNumbers()
client.blockednumbers.loadBlockedNumber()
client.blockednumbers.updateBlockedNumber()
client.blockednumbers.unblockNumber()
client.calllog.listAccountActiveCalls()
client.calllog.loadAccountCallLog()
client.calllog.deleteAccountCallLog()
client.calllog.loadAccountCallLogRecord()
client.calllog.listExtensionActiveCalls()
client.calllog.loadExtensionCallLog()
client.calllog.deleteExtensionCallLog()
client.calllog.loadExtensionCallLogRecord()
client.calllog.syncExtensionCallLog()
client.calllog.loadCallRecordingMetadata()
client.calllog.loadCallRecordingContent()
client.conferencing.loadConferencingInfo()
client.conferencing.updateConferencingInfo()
client.devices.listAccountDevices()
client.devices.loadAccountDevice()
client.devices.listExtensionDevices()
client.forwardingnumbers.listExtensionForwardingNumbers()
client.forwardingnumbers.createExtensionForwardingNumber()
client.forwardingnumbers.updateExtensionForwardingNumber()
client.forwardingnumbers.deleteExtensionForwardingNumber()
client.messages.sendInternalMessage()
client.messages.sendFaxMessage()
client.messages.sendSMS()
client.messages.listMessages()
client.messages.loadMessage()
client.messages.updateMessage()
client.messages.deleteMessage()
client.messages.loadMessageAttachment()
client.messages.syncMessages()
client.ordering.createDeviceOrder()
client.ordering.loadDeviceOrder()
client.presence.getPresenceStatus()
client.presence.listMonitoredExtensions()
client.reporting.loadReportingSettings()
client.reporting.updateReportingSettings()
client.ringout.makeRingOutCall()
client.ringout.getRingOutCallStatus()
client.ringout.cancelRingOutCall()
client.clientapplication.loadClientInfo()
client.clientapplication.updateCustomData()
client.clientapplication.createSipRegistration()
client.dictionary.listCountries()
client.dictionary.loadCountry()
client.dictionary.listLanguages()
client.dictionary.loadLanguage()
client.dictionary.listLocations()
client.dictionary.listSecretQuestions()
client.dictionary.loadSecretQuestion()
client.dictionary.listShippingOptions()
client.dictionary.loadlistStates()
client.dictionary.loadState()
client.dictionary.listTimezones()
client.dictionary.loadTimezone()
client.phonenumberparser.loadPhoneData()
client.phonenumberparser.parsePhoneNumber()
client.phonenumberpool.lookupPhoneNumbers()
client.phonenumberpool.reservePhoneNumbers()
client.pushnotifications.loadSubscriptionList()
client.pushnotifications.createSubscription()
client.pushnotifications.loadSubscription()
client.pushnotifications.updateSubscription()
client.pushnotifications.deleteSubscription()
```

## Proposal 2

Pattern: `client.{operationId}({ModelObject})`, no tag before operationId.

## Proposal 3: OO Experimental

```typescript
// `/account`, `/account/{accountId}/extension` 

// read
var account: Promise<Account> = client.getAccount('id');
var accounts: Promise<Account[]> = client.getAccounts(query);
var extension: Promise<Extension> = account.getExtenstion('id');
var extensions: Promise<Extension[]> = account.getExtenstions();

// modify
var account = new Account('id'); //...
account.create();	// POST
account.remove();	// DELETE
account.name = 'modified';
account.update();	// PUT


// Get current extension info
var a = new Account();//'~'
a.getExtenstion();

// Create an extension
var e = new Extension('id', {});
var e = new Extension('id');

// Paging
account.getExtenstions().then(function(result: PagedRecords<Extension>) {
	result.nextPage().then(function(result: PagedRecords<Extension>) {
		//...
	});
	result.previousPage();
	result.lastPage();
});
```

**Requirements**
All url should be composed of entity parts.

Entity relationships:
```
graph LR
    a(Account) --> e(Extension)
    a --> atc(ActiveCall)
    e --> atc
    a --> cl(CallLog)
    e --> cl
    e --> cp(CompanyPager)
    e --> fax(Fax)
    e --> fn(ForwardingNumber)
    e --> ms(MessageStore)
    ms --> at(Attachment)
    e --> pn(PhoneNumber)
    e --> prs(Presence)
    e --> rgo(Ringout)
    e --> sms(SMS)
    a --> pn
    a --> r(Recording)
    d(Dictionary)
    l(Language)
    tz(Timezone)
    sc(Subscription)
```

**Issues**

Some of the paths are not composed of entities only, e.g. `/account/{accountId}/recording/{recordingId}/content`, `/dictionary/*`

## Proposal 4: url builder

```typescript
let a: Promise<Account> = client.account('id').get();
let exts: Promise<Extension[]> = client.account('id').extension().list();
let result: Promise<CreateExtensionResult> = client.account('id').extension('id').create(extension);
let result: Promise<UpdateExtensionResult> = client.account('id').extension('id').update(extension);
let result: Promise<RemoveExtensionResult> = client.account('id').extension('id').remove();
let callLogs: Promise<CallLog[]> = client.account('id').extension('id').callLog().list();
let accountCallLogs: Promise<CallLog[]> = client.account('id').callLog().list();
let serviceInfo: Promise<ServiceInfo> = client.account('id').serviceInfo().get();
let meetingServiceInfo: Promise<MeetingServiceInfo> = client.account('id').meeting().serviceInfo().get();
```