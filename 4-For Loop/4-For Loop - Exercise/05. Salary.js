function salary(input) {

    let index = 0;

    const openTabs = Number(input[0]);
    index++;

    const salary = Number(input[1]);
    index++;

    let salaryLeft = salary;


    const facebook = 150;  
    const instagram = 100;
    const reddit = 50;

    for (let i = index; i <= openTabs; i++) {
        let currentTab = input[index];
        
        switch (currentTab) {
            case "Facebook": salaryLeft -= facebook; break;
            case "Instagram": salaryLeft -= instagram; break;
            case "Reddit": salaryLeft -= reddit; break;
        }
        index++;
    }

    if (salaryLeft <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salaryLeft);
    }

}
// salary([
//   "10",
//   "750",
//   "Facebook",
//   "Dev.bg",
//   "Instagram",
//   "Facebook",
//   "Reddit",
//   "Facebook",
//   "Facebook",
// ]);

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
;