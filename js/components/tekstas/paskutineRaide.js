const wordsL = ['labas', 'rytas'];
const lastLetters = wordsL.reduce((accumulator, wordsL) => accumulator + wordsL[4], '');
console.log(lastLetters);

export { paskutineRaide }