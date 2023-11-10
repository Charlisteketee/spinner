const spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  '];
//loops = the amount of times we want to loop through the spinner animations. adjust this number and it will spin through that amount of times!
const loops = 3;

//nested loop: the outer loop controls how many times we loop through the spinner animations
//the inner loop i iterates through each spinner animation
for (let loop = 0; loop < loops; loop++) {
  for (let i = 0; i < spinner.length; i++) {
      setTimeout(() => {
    process.stdout.write(`${spinner[i]}`)
    // 200 * i = the delay for each spinner animation
    // + spinner.length * 200 * loop = makes sure there is a 200 ms delay between loops
    }, 200 * i + spinner.length * 200 * loop);
  }
}