import AnsweringRuleInfo, {CallerInfo as ACallerInfo} from "./AnsweringRuleInfo";
import CallerInfo from "./CallerInfo";

console.log(AnsweringRuleInfo);
let nc = new CallerInfo();
let ari = new AnsweringRuleInfo();
nc.phoneNumber = "hello";

console.log(">>>", ari, nc);

// for string enum types
export type AnsweringRuleInfoType = "BusinessHours" | "AfterHours";

// string -> enum
let out = "a";
let e = <AnsweringRuleInfoType>out; // No runtime and compile time check.
console.log("ok," + e);