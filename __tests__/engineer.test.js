const Engineer = require('../lib/engineer');
const Employee = require("../lib/employee");
// starting tests given from TA

test("Can set github instance", () => {
    const testValue = "github"
    const e = new Employee();
    expect(e.github).toBe(testValue);
  });

