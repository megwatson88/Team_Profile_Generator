const Employee = require('../lib/employee');
const Manager = require("../lib/manager");
// starting tests given from TA

test("Can instantiate manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });

test("Can set office number with constructor", () => {
    const officeNumber = "90";
    const e = new Manager(officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});
test("Can set id with constructor", () => {
    const id = "60";
    const e = new Manager(id);
    expect(e.id).toBe(id);
});
test("Can set email with constructor", () => {
    const name = "James@gmail.com";
    const e = new Manager(email);
    expect(e.email).toBe(email);
});