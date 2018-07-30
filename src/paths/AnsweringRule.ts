// This is Generated Source.
import AnsweringRuleInfo from "../definitions/AnsweringRuleInfo";
import CompanyAnsweringRuleList from "../definitions/CompanyAnsweringRuleList";
import CreateAnsweringRuleRequest from "../definitions/CreateAnsweringRuleRequest";
import UpdateAnsweringRuleRequest from "../definitions/UpdateAnsweringRuleRequest";
import PathSegment from "../PathSegment";

export default class AnsweringRule extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("answering-rule", id, prv, service);
    }

    /**
     *  <p>Returns the extension answering rules.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadUserAnsweringRules] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    get(query?: GetQuery): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  <p>Returns the extension answering rules.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadUserAnsweringRules] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  <p>Creates a custom answering rule for a particular caller ID.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>AWR-100</td><td>Rule indexes should be sequential</td></tr><tr><td>400</td><td>AWR-101</td><td>Parameter [forwarding.rules[].forwardingNumbers[].id] are duplicated</td></tr><tr><td>400</td><td>AWR-106</td><td>Greeting [Voicemail] is duplicated</td></tr><tr><td>400</td><td>AWR-107</td><td>More than one caller with the same [callerId]</td></tr><tr><td>400</td><td>AWR-108</td><td>Only custom rule can be created</td></tr><tr><td>400</td><td>AWR-111</td><td>At least one condition should be specified</td></tr><tr><td>400</td><td>AWR-113</td><td>More than one called number with the same [calledNumbers.phoneNumber]</td></tr><tr><td>400</td><td>AWR-121</td><td>Business Hours not specified for current user</td></tr><tr><td>400</td><td>AWR-123</td><td>Preset [131840] can not be used for greeting type [Voicemail]</td></tr><tr><td>400</td><td>AWR-124</td><td>presetId specified for greeting type [Voicemail] is not found</td></tr><tr><td>400</td><td>AWR-125</td><td>Custom greeting presetId specified for greeting type [Introductory]. Custom greeting uploading method should be used</td></tr><tr><td>400</td><td>AWR-126</td><td>The amount of schedule ranges exceeds 1000</td></tr><tr><td>400</td><td>AWR-136</td><td>Ring group with index 1 is not found</td></tr><tr><td>400</td><td>AWR-137</td><td>Rule index should be greater than 0</td></tr><tr><td>400</td><td>AWR-138</td><td>Contact center number cannot be used as called number</td></tr><tr><td>400</td><td>AWR-139</td><td>Hold audio interruption period not specified</td></tr><tr><td>400</td><td>AWR-140</td><td>Hold audio interruption period should be empty for interruption mode specified</td></tr><tr><td>400</td><td>AWR-144</td><td>Call Queue agent with index 1 is not found</td></tr><tr><td>400</td><td>AWR-147</td><td>Preset [65792] can not be used for extension type [Department]</td></tr><tr><td>400</td><td>AWR-148</td><td>Call Queue agents should be the same as call queue members</td></tr><tr><td>400</td><td>AWR-149</td><td>Only user, voicemail or shared line group extension can be a voicemail recipient</td></tr><tr><td>400</td><td>AWR-150</td><td>Only user, voicemail, shared line group extension or current department can be a voicemail recipient</td></tr><tr><td>400</td><td>AWR-152</td><td>Voicemail cannot be turned off for call queue extension</td></tr><tr><td>400</td><td>AWR-177</td><td>Time ranges limit for [monday] exceeded</td></tr><tr><td>400</td><td>AWR-179</td><td>[name] is too long: up to 127 symbols supported</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [name] value is invalid</td></tr><tr><td>400</td><td>FPN-105</td><td>Number +16196093249 duplicates with company/extension direct number</td></tr><tr><td>400</td><td>FPN-108</td><td>International calling is currently disabled</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditUserAnsweringRules] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    post(body: CreateAnsweringRuleRequest): Promise<AnsweringRuleInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Creates a custom answering rule for a particular caller ID.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>AWR-100</td><td>Rule indexes should be sequential</td></tr><tr><td>400</td><td>AWR-101</td><td>Parameter [forwarding.rules[].forwardingNumbers[].id] are duplicated</td></tr><tr><td>400</td><td>AWR-106</td><td>Greeting [Voicemail] is duplicated</td></tr><tr><td>400</td><td>AWR-107</td><td>More than one caller with the same [callerId]</td></tr><tr><td>400</td><td>AWR-108</td><td>Only custom rule can be created</td></tr><tr><td>400</td><td>AWR-111</td><td>At least one condition should be specified</td></tr><tr><td>400</td><td>AWR-113</td><td>More than one called number with the same [calledNumbers.phoneNumber]</td></tr><tr><td>400</td><td>AWR-121</td><td>Business Hours not specified for current user</td></tr><tr><td>400</td><td>AWR-123</td><td>Preset [131840] can not be used for greeting type [Voicemail]</td></tr><tr><td>400</td><td>AWR-124</td><td>presetId specified for greeting type [Voicemail] is not found</td></tr><tr><td>400</td><td>AWR-125</td><td>Custom greeting presetId specified for greeting type [Introductory]. Custom greeting uploading method should be used</td></tr><tr><td>400</td><td>AWR-126</td><td>The amount of schedule ranges exceeds 1000</td></tr><tr><td>400</td><td>AWR-136</td><td>Ring group with index 1 is not found</td></tr><tr><td>400</td><td>AWR-137</td><td>Rule index should be greater than 0</td></tr><tr><td>400</td><td>AWR-138</td><td>Contact center number cannot be used as called number</td></tr><tr><td>400</td><td>AWR-139</td><td>Hold audio interruption period not specified</td></tr><tr><td>400</td><td>AWR-140</td><td>Hold audio interruption period should be empty for interruption mode specified</td></tr><tr><td>400</td><td>AWR-144</td><td>Call Queue agent with index 1 is not found</td></tr><tr><td>400</td><td>AWR-147</td><td>Preset [65792] can not be used for extension type [Department]</td></tr><tr><td>400</td><td>AWR-148</td><td>Call Queue agents should be the same as call queue members</td></tr><tr><td>400</td><td>AWR-149</td><td>Only user, voicemail or shared line group extension can be a voicemail recipient</td></tr><tr><td>400</td><td>AWR-150</td><td>Only user, voicemail, shared line group extension or current department can be a voicemail recipient</td></tr><tr><td>400</td><td>AWR-152</td><td>Voicemail cannot be turned off for call queue extension</td></tr><tr><td>400</td><td>AWR-177</td><td>Time ranges limit for [monday] exceeded</td></tr><tr><td>400</td><td>AWR-179</td><td>[name] is too long: up to 127 symbols supported</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [name] value is invalid</td></tr><tr><td>400</td><td>FPN-105</td><td>Number +16196093249 duplicates with company/extension direct number</td></tr><tr><td>400</td><td>FPN-108</td><td>International calling is currently disabled</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditUserAnsweringRules] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: CreateAnsweringRuleRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p>Updates a custom answering rule for a particular caller ID.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>AWR-100</td><td>Rule indexes should be sequential</td></tr><tr><td>400</td><td>AWR-106</td><td>Greeting [Voicemail] is duplicated</td></tr><tr><td>400</td><td>AWR-111</td><td>At least one condition should be specified</td></tr><tr><td>400</td><td>AWR-113</td><td>More than one called number with the same [calledNumbers.phoneNumber]</td></tr><tr><td>400</td><td>AWR-120</td><td>Business Hours/After Hours schedule condition is allowed only with other answering rule conditions</td></tr><tr><td>400</td><td>AWR-123</td><td>Preset [131840] can not be used for greeting type [Voicemail]</td></tr><tr><td>400</td><td>AWR-124</td><td>presetId specified for greeting type [Voicemail] is not found</td></tr><tr><td>400</td><td>AWR-136</td><td>Ring group with index 1 is not found</td></tr><tr><td>400</td><td>AWR-137</td><td>Rule index should be greater than 0</td></tr><tr><td>400</td><td>AWR-138</td><td>Contact center number cannot be used as called number</td></tr><tr><td>400</td><td>AWR-139</td><td>Hold audio interruption period not specified</td></tr><tr><td>400</td><td>AWR-140</td><td>Hold audio interruption period should be empty for interruption mode specified</td></tr><tr><td>400</td><td>AWR-144</td><td>Call Queue agent with index 1 is not found</td></tr><tr><td>400</td><td>AWR-147</td><td>Preset [65792] can not be used for extension type [Department]</td></tr><tr><td>400</td><td>AWR-148</td><td>Call Queue agents should be the same as call queue members</td></tr><tr><td>400</td><td>AWR-179</td><td>[name] is too long: up to 127 symbols supported</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [callHandlingAction] value is invalid</td></tr><tr><td>400</td><td>FPN-105</td><td>Number +18332051179 duplicates with company/extension direct number</td></tr><tr><td>400</td><td>FPN-108</td><td>International calling is currently disabled</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    put(body: UpdateAnsweringRuleRequest): Promise<AnsweringRuleInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Updates a custom answering rule for a particular caller ID.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>AWR-100</td><td>Rule indexes should be sequential</td></tr><tr><td>400</td><td>AWR-106</td><td>Greeting [Voicemail] is duplicated</td></tr><tr><td>400</td><td>AWR-111</td><td>At least one condition should be specified</td></tr><tr><td>400</td><td>AWR-113</td><td>More than one called number with the same [calledNumbers.phoneNumber]</td></tr><tr><td>400</td><td>AWR-120</td><td>Business Hours/After Hours schedule condition is allowed only with other answering rule conditions</td></tr><tr><td>400</td><td>AWR-123</td><td>Preset [131840] can not be used for greeting type [Voicemail]</td></tr><tr><td>400</td><td>AWR-124</td><td>presetId specified for greeting type [Voicemail] is not found</td></tr><tr><td>400</td><td>AWR-136</td><td>Ring group with index 1 is not found</td></tr><tr><td>400</td><td>AWR-137</td><td>Rule index should be greater than 0</td></tr><tr><td>400</td><td>AWR-138</td><td>Contact center number cannot be used as called number</td></tr><tr><td>400</td><td>AWR-139</td><td>Hold audio interruption period not specified</td></tr><tr><td>400</td><td>AWR-140</td><td>Hold audio interruption period should be empty for interruption mode specified</td></tr><tr><td>400</td><td>AWR-144</td><td>Call Queue agent with index 1 is not found</td></tr><tr><td>400</td><td>AWR-147</td><td>Preset [65792] can not be used for extension type [Department]</td></tr><tr><td>400</td><td>AWR-148</td><td>Call Queue agents should be the same as call queue members</td></tr><tr><td>400</td><td>AWR-179</td><td>[name] is too long: up to 127 symbols supported</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [callHandlingAction] value is invalid</td></tr><tr><td>400</td><td>FPN-105</td><td>Number +18332051179 duplicates with company/extension direct number</td></tr><tr><td>400</td><td>FPN-108</td><td>International calling is currently disabled</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: UpdateAnsweringRuleRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  <p>Deletes a custom answering rule by a particular ID.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>AWR-110</td><td>Business Hours/After Hours rule cannot be deleted</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditUserAnsweringRules] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [answering-rule] is not found</td></tr> </tbody></table>								
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  <p>Deletes a custom answering rule by a particular ID.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>AWR-110</td><td>Business Hours/After Hours rule cannot be deleted</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditUserAnsweringRules] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [answering-rule] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  <p>Returns a list of company answering rules.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    list(): Promise<CompanyAnsweringRuleList> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns a list of company answering rules.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    }
}

export interface GetQuery {

    /**
     * 
     */
    page?: string;

    /**
     * 
     */
    perPage?: string;
}
