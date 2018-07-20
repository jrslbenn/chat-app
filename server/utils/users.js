class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {

    }

    getUser(id) {

    }

    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {Users};

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }
//
// var me = new Person('James', 26);
// console.log(me.getUserDescription());
