// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

const square = (x) => x * x;

console.log(square(3));

const event = {
  name: "Birthday Party",
  // printGuestList:  () => {
  //     console.log("Guest list for "+ this.name);
  // }
  guestList: ["A", "B", "C"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    // Arrow function don't bind their own this value
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });

    // this.guestList.forEach(function (guest) {
    //   console.log(guest + " is attending " + this.name);
    // });
  },
};

event.printGuestList();
