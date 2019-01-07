// Factory Pattern (Method) interface for objects, used to manage objects, 
// membership or something w/similiar or shared properties. ie below website membership

function memberFactory() {
    this.createMember = function(name, type){
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name); 
        } else if (type === 'premium') {
            member = new PremiumMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const PremiumMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new memberFactory();

members.push(factory.createMember('Mark Smith','simple'));
members.push(factory.createMember('Sally Alvarez','premium'));
members.push(factory.createMember('Frank Black','simple'));
members.push(factory.createMember('Molly Baker','standard'));

// console.log(members);

// loop through, using define from above
members.forEach(function(member) {
    member.define();
});