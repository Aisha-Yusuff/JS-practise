const fizzBuzz = (a) => {
  return (a % 3 ? "" : "fizz") + (a % 5 ? "" : "buzz") || a;

  //   if (a % 15 == 0) {
  //     return "fizzBuzz";
  //   } else if (a % 3 == 0) {
  //     return "fizz";
  //   } else if (a % 5 == 0) {
  //     return "buzz";
  //   } else {
  //     return a;
  //   }
};

module.exports = fizzBuzz;
