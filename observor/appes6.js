// ES6 version, using classes instead. It took me longer to get the {} correct in the ES6 version

class EventObserver {
    constructor() {
        this.observers = [];
    }

    
    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        // Filtering out from the list to whatever matches the callback function. If there
        // is no match, the callback gets to stay on the list. The filter returns a new
        // list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item){
            // if the item doesn't equal what is being passed in, return the item
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }
        
    fire() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}


const click = new EventObserver();

// Create Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrentMilliseconds);
});

// Event Listeners for Seconds
document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    // call the function 
    click.fire();
});

// Click handler - for fn
const getCurrentMilliseconds = function() {
    console.log(`Current Miliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrentSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}