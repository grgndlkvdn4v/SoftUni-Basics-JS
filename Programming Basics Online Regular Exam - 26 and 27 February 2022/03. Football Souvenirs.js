function footballSouvenirs(input) {
   const team = input[0];
   const typeOfSouvenir = input[1];
   const souvenirsCount = input[2];

   let price = 0;
   let isValid = true;

   switch (team) {
      case "Argentina":
         switch (typeOfSouvenir) {
            case "flags": price = 3.25; break;
            case "caps": price = 7.20; break;
            case "posters": price = 5.10; break;
            case "stickers": price = 1.25; break;
            default:
               console.log("Invalid stock!");
               isValid = false;
               break;
         } break;

      case "Brazil":
         switch (typeOfSouvenir) {
            case "flags": price = 4.20; break;
            case "caps": price = 8.50; break;
            case "posters": price = 5.35; break;
            case "stickers": price = 1.20; break;
            default:
               console.log("Invalid stock!");
               isValid = false;
               break;
         } break;

      case "Croatia":
         switch (typeOfSouvenir) {
            case "flags": price = 2.75; break;
            case "caps": price = 6.90; break;
            case "posters": price = 4.95; break;
            case "stickers": price = 1.10; break;
            default:
               console.log("Invalid stock!");
               isValid = false;
               break;
         } break;

      case "Denmark":
         switch (typeOfSouvenir) {
            case "flags": price = 3.10; break;
            case "caps": price = 6.50; break;
            case "posters": price = 4.80; break;
            case "stickers": price = 0.90; break;
            default:
               console.log("Invalid stock!");
               isValid = false;
               break;
         } break;

         default:
            isValid = false;
            console.log("Invalid country!");
         break;
   }

   if (isValid) {
      const totalCost = price * souvenirsCount;

      console.log(`Pepi bought ${souvenirsCount} ${typeOfSouvenir} of ${team} for ${totalCost.toFixed(2)} lv.`);
   }

}
// footballSouvenirs(["Brazil", "stickers", "5"]);
// footballSouvenirs(["Denmark", "caps", "8"]);
// footballSouvenirs(["Croatia", "flags", "13"]);
footballSouvenirs(["udn", "shirts", "35"]);