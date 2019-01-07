// Singleton is a one time call, private reference, ie only one login user
// frowned upon - encapsulated and harder to debug

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object('Mike!');
        return object;
    }

    return {
        getInstance: function () {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// gives same value, can't have more than one singleton instance
console.log(instanceA === instanceB);

// console.log(instanceA);