import LanguageInfo from "../definitions/LanguageInfo";
import LanguageList from "../definitions/LanguageList";
import PathSegment from "../PathSegment";
export default class Language extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns the information about supported languages.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    list(): Promise<LanguageList>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns the information about supported languages.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    listRaw(): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns language by its respective ID.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(): Promise<LanguageInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns language by its respective ID.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
}
