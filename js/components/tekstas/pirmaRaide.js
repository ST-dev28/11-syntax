
const words = ['labas', 'rytas'];
const firstLetters = words.reduce((accumulator, words) => accumulator + words[0], '');
console.log(firstLetters);

export { pirmaRaide }