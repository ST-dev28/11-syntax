
function vidurineRaide(text) {  
    const ilgis = text.length;
    const vidurinesRaidesIndexas = Math.ceil(ilgis / 2 - 1);
    
    if (text === '') {
        return '';
    }

        return text[vidurinesRaidesIndexas];
}

export { vidurineRaide }


/** ARBA
 * 
 * @param {string} text Tekstas is kurio rasim vidurine raide
 * @returns 
 */
/*
 const vidurineRaide = text => text === '' ? '' : text[Math.ceil(text.length / 2 - 1)];
*/

/*

tevas -> v - nelyg   5/2-1=1.5
mano -> a - lyg    4/2-1=1

*/

