// Mediator Pattern, interface communicating colleagues ie chatroom

const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, toUser) {
        this.chatroom.send(message, this, toUser);
    },
    recieve: function(message, from) {
        // from to current user and then the message
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {}; // list of users

    return {
        register: function(user) {
            // user.name as a key to the user being passed in
            users[user.name] = user;
            // set to null by default, now setting it to the current chatroom
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // single user message
                to.recieve(message, from);
            } else {
                // mass message
                for(key in users) {
                    // if the user not sending 
                    if(users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }

            }
        }
    }
}

const mike = new User('Mike');
const sally = new User('Sally');
const joe = new User('Joe');


const chatroom = new Chatroom();

chatroom.register(mike);
chatroom.register(sally);
chatroom.register(joe);

mike.send('Hey Sally', sally);
sally.send('Hi Mike, how is the weather?', mike);
// had a typo on recieve ln 37 that stopped this, issues with sending a message to everyone without a from /facepalm
// Joe doesn't send a mass message to himself from ln 37
joe.send('Hey everyone!');

