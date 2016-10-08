declare module "ringcentral" {
	
    class Ringcentral {
        constructor(config);
        platform();
        createSubscription();
    }
    
	namespace Ringcentral {}
	export = Ringcentral;
}