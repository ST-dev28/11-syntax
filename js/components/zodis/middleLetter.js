const middleLetter = (word) => {  
    const ilgis = word.length;
    const vidurinesRaidesIndexas = Math.ceil(ilgis / 2 - 1);
    
        return word[vidurinesRaidesIndexas];
}


export { middleLetter }


//const dalyba = (a, b) => a / b;