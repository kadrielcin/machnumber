const kilometerPerHour = (machNumber) => {
  if (machNumber !== Number.Nan) {
    return `${machNumber} Mach equals to ${
      machNumber * 1225.04
    } km/h. One hour flight means ${Math.round(
      machNumber * 1225.04
    )} kilometers, a rabbit can travel the same distance in ${Math.round(
      (machNumber * 1225.04) / 80
    )} hours. A human being in ${
      Math.round(machNumber * 1225.04) / 5
    } hours and a snail in ${Math.round(
      (machNumber * 1225.04) / (0.025 * 24)
    )} days.`;
  } else {
    throw new Error("Please, give a valid Mach number!");
  }
};
module.exports = kilometerPerHour;
