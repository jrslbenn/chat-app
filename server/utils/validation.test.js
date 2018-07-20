const expect = require("expect");
const {isRealString} = require("./validation.js")

describe("isRealString", () => {
    it("should reject non string values", () => {
        let res = isRealString(98);
        expect(res).toBe(false);
    })

    it("should reject a string with only spaces", () => {
        let res = isRealString("   ");
        expect(res).toBe(false);
    })

    it("should allow string with non-space characters", () => {
        let res = isRealString(" James 1 ");
        expect(res).toBe(true);
    })
});
