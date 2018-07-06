var expect = require("expect");

var {generateMessage, generateLocationMessage} = require("./message");

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    let from = "James";
    let text = "my text";
    let message = generateMessage(from, text);
    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe("number");
  })
});

describe("generateLocationMessage", () => {
  it("should generate the correct location message object", () => {
    let from = "James";
    let latitude = "47";
    let longitude = "-122";
    let url = "https://www.google.com/maps?q=47,-122";
    let message = generateLocationMessage(from, latitude, longitude);
    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe("number");
  })
});
