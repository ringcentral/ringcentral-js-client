import AnsweringRuleInfo, {CallerInfo as ACallerInfo} from "./AnsweringRuleInfo";
import CallerInfo from "./CallerInfo";

console.log(AnsweringRuleInfo);
let nc = new CallerInfo();
let ari = new AnsweringRuleInfo();
nc.phoneNumber = "hello";

console.log(">>>", ari, nc);