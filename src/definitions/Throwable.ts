// Generated Source
import StackTraceElement from "./StackTraceElement";
import Throwable from "./Throwable";

interface Throwable {

    /**
     * 
     */
    cause?: Throwable;

    /**
     * 
     */
    stackTrace?: StackTraceElement[];

    /**
     * 
     */
    localizedMessage?: string;

    /**
     * 
     */
    message?: string;

    /**
     * 
     */
    suppressed?: Throwable[];
}

export default Throwable;
