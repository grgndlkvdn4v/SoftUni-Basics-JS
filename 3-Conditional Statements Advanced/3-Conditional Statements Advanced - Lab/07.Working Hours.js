function workingHours(input) {

  const hour = Number(input[0]);
  const day = input[1];

  if (hour >= 10 && hour <= 18 && day != "Sunday") {
      console.log("open");
  // if (hour >= 10 && hour <= 18) {
  //   switch (day) {
  //       case "Monday":
  //       case "Tuesday":
  //       case "Wednesday":
  //       case "Thursday":
  //       case "Friday":
  //       case "Saturday": console.log("open"); break;
  //       case "Sunday": console.log("closed"); break;
  //     default: console.log("Invalid day"); break;
  //   }
  // } 
  } else {
    console.log("closed");
  }
}
workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);
