function graduation(input) {
    index = 0;
    const studentName = input[index++];

    let average = 0;
    let failCheck = 0;
    let fail = false;

    let grade = 1;
    while (grade <= 12) {
        let currentGrade = Number(input[index]);

        if (currentGrade < 4) {
            failCheck++;
            index++;
            if (failCheck > 1) {
                console.log(`${studentName} has been excluded at ${grade} grade`);
                fail = true;
                break;
            }
            continue;
        }
        average += currentGrade;
        grade++; 
        index++;
    }
    average /= 12;
    if (!fail) {
        console.log(`${studentName} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "3.5",
  "6",
  "5.43",
  "5",
]);
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);