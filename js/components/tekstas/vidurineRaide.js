
function vidurineRaide(text) {  
    const ilgis = text.length;
    const vidurinesRaidesIndexas = Math.ceil(ilgis / 2 - 1);
    
    if (text === '') {
        return '';
    }

        return text[vidurinesRaidesIndexas];
}


export { vidurineRaide }

/*

tevas -> v - nelyg   5/2-1=1.5
mano -> a - lyg    4/2-1=1

*/

