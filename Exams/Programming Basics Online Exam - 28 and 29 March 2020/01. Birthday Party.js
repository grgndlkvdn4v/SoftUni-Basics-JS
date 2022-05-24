function birthdayParty(input) {

    const rent = Number(input[0]);

    const cake = rent * 0.2;
    const drinks = cake - (cake * 0.45);
    const animator = rent / 3;

    const budget = rent + cake + drinks + animator;

    console.log(budget);
}


birthdayParty(["2250"]);