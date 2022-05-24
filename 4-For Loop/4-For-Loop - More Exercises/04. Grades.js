function grades(input) {
    index = 0;

    const studentsCount = Number(input[index]);
    index++;

    let fail = 0;
    let betweenThreeAndFour = 0;
    let betweenFourAndFive = 0;
    let topStudents = 0;
    let average = 0;

    for (let i = 1; i <= studentsCount; i++) {
        
        let currentStudent = Number(input[index]);

        if (currentStudent >= 2.00 && currentStudent <= 2.99) {
            fail++;
        } else if (currentStudent >= 3.00 && currentStudent <= 3.99) {
            betweenThreeAndFour++;
        } else if (currentStudent >= 4.00 && currentStudent <= 4.99) {
            betweenFourAndFive++;
        } else if (currentStudent => 5.00) {
            topStudents++;
        }

        average += currentStudent;
        index++;

    }

    average = average / studentsCount;

    const topStudentsPercent = ((topStudents / studentsCount) * 100).toFixed(2);
    const betweenFourAndFivePercent = ((betweenFourAndFive / studentsCount) * 100).toFixed(2);
    const betweenThreeAndFourPercent = ((betweenThreeAndFour / studentsCount) * 100).toFixed(2);
    const failPercent = ((fail / studentsCount) * 100).toFixed(2);


    console.log(`Top students: ${topStudentsPercent}%`);

    console.log(`Between 4.00 and 4.99: ${betweenFourAndFivePercent}%`);

    console.log(`Between 3.00 and 3.99: ${betweenThreeAndFourPercent}%`);

    console.log(`Fail: ${failPercent}%`);

    console.log(`Average: ${average.toFixed(2)}`);

}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
// grades(["6", "2", "3", "4", "5", "6", "2.2"]);
// grades(["5", "2", "3", "4", "5", "6"]);
