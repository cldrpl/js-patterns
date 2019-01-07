// Patterns

// re-usable solution that can be applied to occuring problems
// can be thought of as programming templates

// Basic structure
// immediately invokes expression that runs right away, need to wrap in () & afterwards


/* (function() {
    // declare private variables (can't access from outside of the module) and functions

    return {
       // declare public vars and functions

    }
})(); */

// Standard Module Pattern - UI controller
/* const UICtrl = (function() {
    let text = 'Hey World';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function() {
            // accessing private functions and vars from above, is public
            changeText();
             console.log(text);

          }
        }
})(); */

// you can also try this directly in Chrome's Console, ..changeText doesn't work since its private
/* UICtrl.callChangeText(); */

/* UICtrl.changeText(); */

// returns undefined
// console.log(object);console.log(UICtrl.text);

// Revealing Module pattern, map to private functions that you want to reveal
const ItemCtrl = (function() {
    // sometimes use _data for private variables
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        // If get is commented out it would error out becoming private
        // return directly reveals from inside module
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));