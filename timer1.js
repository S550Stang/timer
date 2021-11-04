const userInput = process.argv.slice(2);
const sortedUserInput = userInput.sort((a, b) => a - b);
// console.log(userInput);

// using function recurssion
let i = 0;
const timer = function () {
  if (i < sortedUserInput.length) {
    setTimeout(() => {
      console.log(sortedUserInput[i]);
      i++;
      process.stdout.write("\x07");
      timer();
    }, sortedUserInput[i] * 1000);
  }
};

timer();
// using traditional for loop

for (let i in sortedUserInput) {
  let delay = sortedUserInput[i];
  setTimeout(() => {
    console.log(`${sortedUserInput[i]} - Seconds`);
    process.stdout.write("\x07");
  }, delay * 1000);
}
