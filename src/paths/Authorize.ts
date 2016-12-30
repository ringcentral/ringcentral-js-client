// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Authorize extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("authorize", id, prv, service);
    }

    /**
     *  OAuth2 Authorize
     */
    post(body: PostBody): Promise<PostResponse> {
        return this._send("post", true, body, undefined).then((res) => {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Must be set to code
     */
    response_type?: string;

    /**
     * Required. Enter your application key (Production or Sandbox) here
     */
    client_id?: string;

    /**
     * Required. This is a callback URI which determines where the response will be sent to. The value of this parameter must exactly match one of the URIs you have provided for your app upon registration. This URI can be HTTP/HTTPS address for web applications or custom scheme URI for mobile or desktop applications.
     */
    redirect_uri?: string;

    /**
     * Optional, recommended. An opaque value used by the client to maintain state between the request and callback. The authorization server includes this value when redirecting the user-agent back to the client. The parameter should be used for preventing cross-site request forgery
     */
    state?: string;
}

export interface PostResponse {

    /**
     * The authorization code returned for your application
     */
    code?: string;

    /**
     * The remaining lifetime of the authorization code
     */
    expires_in?: number;

    /**
     * This parameter will be included in response if it was specified in the client authorization request. The value will be copied from the one received from the client
     */
    state?: string;
}
