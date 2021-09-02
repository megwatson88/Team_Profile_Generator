
const Employee = require("../lib/employee");

test("Can add employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
})