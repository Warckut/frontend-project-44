function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandSequence(step, n) {
  const progrInit = randNumber(0, 50);
  const progr = [];

  for (let i = 0; i < n; i += 1) {
    progr[i] = i * step + progrInit;
  }

  return progr;
}

export { randNumber, getRandSequence };
