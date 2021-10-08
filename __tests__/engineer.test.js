
const Employee = require("../lib/employee");
// starting tests given from TA

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

test("Can set name with constructor", () => {
    const name = "James";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
test("Can set id with constructor", () => {
    const name = "60";
    const e = new Employee(id);
    expect(e.id).toBe(id);
});
test("Can set email with constructor", () => {
    const name = "James@gmail.com";
    const e = new Employee(email);
    expect(e.email).toBe(email);
});