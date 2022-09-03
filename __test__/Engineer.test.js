const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "kglinoga";
    const employeeInstance = new Engineer("Kristina", 4, "kglinoga@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "kglinoga";
    const employeeInstance = new Engineer("Kristina", 2, "kglinoga@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Kristina", 2, "kglinoga@gmail.com", "kglinoga");
    expect(employeeInstance.getRole()).toBe(returnValue);
});