function oldBooks(input) {
    let index = 0;
    const bookOfAni = input[index++];

    let currentBook = "";
    let booksCounter = 0;
    let isBookFound = false;


    while (currentBook !== "No More Books") {
        currentBook = input[index];

        if (currentBook === bookOfAni) {
            isBookFound = true;
            break;
        }

        index++;
        booksCounter++;
    }


    if (isBookFound) {
        console.log(`You checked ${booksCounter} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCounter - 1} books.`);
    }

}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);