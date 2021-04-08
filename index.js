const Characters = {
    Tyrion : 'Pictures/Tyrion.jpg',
    Arya : 'Pictures/Arya.jpg',
    Petyr : 'Pictures/Littlefinger.jpg',
    Littlefinger: 'Pictures/Littlefinger.jpg',
    Sansa : 'Pictures/Sansa.jpg',
    Ramsay: 'Pictures/RamsayBolton.jpg',
    Ned: 'Pictures/ned.jpg',
    Daenerys: 'Pictures/Daenerys.png',
    Jon: 'Pictures/JonSnow.jpg',
    Cersei: 'Pictures/cersie.jpg',
    Jaime: 'Pictures/jaime.jpg',
};

async function getQuotes() {
    let response =  await fetch('https://gameofthrones-quotes-api.herokuapp.com/api/v1/quote');
    response = await response.json();
    const Quote = response.data.quote;
    const Character = response.data.character.trim();

    document.getElementById("Quote").innerHTML = Quote;
    document.getElementById("Name").innerHTML = "- " + Character;
    getPicture(Character);
    console.log(response);

}

async function getPicture(Character) {
    const name = Character.split(' ')[0];
    if(name in Characters) {
        document.body.setAttribute("style",`background-image : url(${Characters[name]})`);
    } else {
        let rndm = Math.floor(Math.random() * 10);
        document.body.setAttribute("style",`background-image : url(Pictures/${rndm}.jpg)`);
    }

}

