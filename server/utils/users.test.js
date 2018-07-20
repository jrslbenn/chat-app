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
    });

    it("should remove a user by id", () => {
        users.removeUser("2");
        expect(users.getUser("2")).toBeFalsy();
    });

    it("should get a user by id", () => {
        var mike = users.getUser("1");
        expect(mike.name).toBe("Mike");
    });

    it("should not get a user by id", () => {
        var user = users.getUser("5");
        expect(user).toBeFalsy();
    });

    it("should return users in chat room called 'React Course'", () => {
        var userList = users.getUserList("React Course");
        expect(userList).toEqual(['Jen']);
    });
})
