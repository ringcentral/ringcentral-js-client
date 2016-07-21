import Account from "../generated/url-builders/Account"

var acc = new Account(null);
console.log(acc.extension().sms('smsId').getEndpoint())