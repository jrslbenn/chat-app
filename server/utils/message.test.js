var expect = require("expect");

var {generateMessage} = require("./message");

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    let from = "James";
    let text = "my text";
    let message = generateMessage(from, text);
    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe("number");
  })
});
