function examPreparation(input) {
    
    let index = 0;
    const badGradesAllowed = Number(input[index++]);//0

    let currentExam = "";
    let currentGrade = 0;

    let examsCounter = 0;
    let averageScore = 0;
    let lastProblem = currentExam;
    let badGradesCounter = 0;
    let isFail = false;

    while (currentExam !== "Enough") {

        currentExam = input[index++]; //1
        currentGrade = Number(input[index++]); //2

        if (currentExam === "Enough") {
            continue;
        }
        
        examsCounter++;
        averageScore += currentGrade;
        // numberOfProblems++;
        lastProblem = currentExam;
        
        if (currentGrade <= 4) {
            badGradesCounter++;
            continue;
        }

        if (badGradesCounter >= badGradesAllowed) {
            isFail = true;
            break;
        }

    }
    
    averageScore /= examsCounter;

    if (isFail) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    } else {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${examsCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);