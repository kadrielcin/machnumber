const kilometerPerHour = require("./index");

it("should convert the machNumbwer to kilometer per hour", () => {
  const machNumber = kilometerPerHour(1);
  expect(machNumber).toEqual(1225.04);
});
