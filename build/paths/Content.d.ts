import PathSegment from "../PathSegment";
export default class Content extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p><p>Returns call recording metadata.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallRecording</td><td>Downloading call recording content</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    get(): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p><p>Returns call recording metadata.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallRecording</td><td>Downloading call recording content</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
}
