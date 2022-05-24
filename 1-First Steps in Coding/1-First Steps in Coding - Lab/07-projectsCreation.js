function projectsCreation(input) 
{
let projectTime = 3;
let overallTime = projectTime * Number(input[1]);

let text = `The architect ${input[0]} will need ${overallTime} hours to complete ${input[1]} project/s.`;

console.log(text);
}

projectsCreation(["GEORGI", "4"]);