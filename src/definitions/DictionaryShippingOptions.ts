// Generated Source
import ShippingMethod from "./ShippingMethod";

interface DictionaryShippingOptions {

    /**
     * Quantity of devices to ship
     */
    quantity?: number;

    /**
     * Price for shipping with the specified method (depending on the quantity value)
     */
    price?: number;

    /**
     * Shipping method description
     */
    method?: ShippingMethod;
}

export default DictionaryShippingOptions;
