function weatherForecastPart2(input) {

const weather = Number(input[0]);

     if ((weather >= 26) & (weather <= 35)) {
       console.log("Hot");
     } else if ((weather >= 20.1) & (weather <= 25.9)) {
       console.log("Warm");
     } else if ((weather >= 15.0) & (weather <= 20)) {
       console.log("Mild");
     } else if ((weather >= 12) & (weather <= 14.9)) {
       console.log("Cool");
     } else if ((weather >= 5) & (weather <= 11.9)) {
       console.log("Cold");
     } else {
       console.log("unknown");
     } 
}

weatherForecastPart2(["18"]);