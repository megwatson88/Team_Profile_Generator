const Intern = require("../lib/intern");
const Employee = require("../lib/employee");
// starting tests given from TA

test("Can set school instance", () => {
    const testValue = "University of Colorado "
    const e = new Intern();
    expect(e.school).toBe(testValue);
  });

