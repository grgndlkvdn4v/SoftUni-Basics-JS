function readText(input) {
    
    let index = 0

    // let word = input[index++];

    while (input[index] !== "Stop") {
        console.log(input[index]);
        index++; 
        // word = input[index++];
    }
// console.log(word);
}
readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);