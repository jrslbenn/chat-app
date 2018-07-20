const expect = require("expect");

const {Users} = require("./users");

describe("Users", () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },
        {
            id: '3',
            name: 'James',
            room: 'Node Course'
        }];
    });

    it("should add new user", () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'James',
            room: 'eBay sucks'
        };
        var resultingUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    })

    it("should return users in chat room called 'React Course'", () => {
        var userList = users.getUserList("React Course");
        expect(userList).toEqual(['Jen']);
    });
})
