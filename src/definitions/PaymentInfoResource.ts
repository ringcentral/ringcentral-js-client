// Generated Source
import InvoiceSettingsResource from "./InvoiceSettingsResource";
import PaymentInfoCardResource from "./PaymentInfoCardResource";

interface PaymentInfoResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    paymentType?: "Card" | "Invoice";

    /**
     * 
     */
    card?: PaymentInfoCardResource;

    /**
     * 
     */
    invoiceSettings?: InvoiceSettingsResource;
}

export default PaymentInfoResource;
