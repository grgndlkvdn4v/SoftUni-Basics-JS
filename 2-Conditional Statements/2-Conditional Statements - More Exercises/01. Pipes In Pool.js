function pipesInPool(input) {
  //          INPUTS
  const V = Number(input[0]); // Обем на басейна в литри
  const P1 = Number(input[1]); //дебит на първата тръба за час
  const P2 = Number(input[2]); //дебит на втората тръба за час
  const H = Number(input[3]); //часовете които работникът отсъства

  //          SOLUTION
  const poolFill = (P1 + P2) * H; //напълнени литри за Н часа
    const razlika = poolFill - V;

  const p1Fill = P1 * H; //литри от Р1
  const p1FillProcent = (p1Fill / poolFill) * 100; //%литри от Р1

  const p2Fill = P2 * H; //литри от Р2
  const p2FillProcent = (p2Fill / poolFill) * 100; //%литри от Р2

  const poolFillProcent = ((p1Fill + p2Fill) / V) * 100;

  if (razlika <= 0) {
    console.log(
      `The pool is ${poolFillProcent}% full. Pipe 1: ${p1FillProcent.toFixed(2)}%. Pipe 2: ${p2FillProcent.toFixed(2)}%.`
    );
  } else {
    console.log(`For ${H} hours the pool overflows with ${razlika} liters.`);
  }
}

pipesInPool(["1000","100","120","3"]) ;
pipesInPool(["100","100","100","2.5"]) ;