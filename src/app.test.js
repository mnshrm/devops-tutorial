const { setDateOfTheWeek } = require("./app");

test("Verify today's date on home page", () => {
  expect(setDateOfTheWeek()).toBe(
    new Date().toLocaleDateString("en-US", { dateStyle: "long" })
  );
});
