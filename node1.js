// const objekti = {
//     boja: "crna",
//     kola:"zero",
//     zatvor:"redzi",
//     godine: 16,
//     telefon:"iphone",
//     laptop:"fujitsu",
// };
// function prvaFunkcija(argument1,argument2) {
//     console.log(
//         `${argument1} ima ${this.boja} kola i ${argument2} ${this.telefon}`
//     );
// };

// prvaFunkcija.call(objekti,"redzi","telefon")

/////////////////////////////////////////////////////////////////////



// function createUser(firstname,lastname) {
//     return{
//         name:firstname,
//         last:lastname,

//     }
// }

// const usermehmed = createUser("mehmed","muratovic")
// console.log(usermehmed)

// class User{
//     marka;
//     model;
//     brojGB;
//     constructor(name,model,numberGB){
//         this.marka = name;
//         this.model= model; 
//         this.brojGB = numberGB
//     };
// }

// const  phone = new User("iphone","8+","64GB");

// console.log(phone);


///////////////////////////////////////////////////////////////////////////////////////


/////////////////////seter/////////////////////



// class Telefon{
//     marka;
//     model;
//     brojGB;
//     constructor(name,modell,numberGB){
//         this.marka = name;
//         this.model= modell; 
//         this.brojGB = numberGB
//     };
//    changemodel(novimodel) {
//     this.model = novimodel;
// };
// };
// const  Phone = new Telefon("iphone","8+","64GB");
// console.log(Phone)

// Phone.changemodel("samsung");
// console.log(Phone);

///////////////////////////////////////////////////////////////////////////////////////





////////////////////DOMACI////////////////////////////////

class GtaV{
    ime;
    porodica;
    supermoc;
    constructor(name,family,superpower){
        this.ime = name;
        this.porodica = family;
        this.supermoc = superpower;
    };
}
class Franklin extends GtaV{
    constructor(ime,porodica,supermoc){
        super(ime,porodica,supermoc)
    }
    getpower(powerr){
        this.supermoc = powerr
    }
}
const bilosta = new Franklin("Franklin","nema","rasengan");

console.log(bilosta);
bilosta.getpower("sharingan");
console.log(bilosta);

class Michele extends GtaV{
    constructor(ime,porodica,supermoc){
        super(ime,porodica,supermoc)
    }
    getpower(powerr){
        this.supermoc = powerr
    }
}
const bilosta1 = new Michele("Michele","nema","mangyeko");

console.log(bilosta1);
bilosta1.getpower("byakugan");
console.log(bilosta1);


class Trevor extends GtaV{
    constructor(ime,porodica,supermoc){
        super(ime,porodica,supermoc)
    }
    getpower(powerr){
        this.supermoc = powerr
    }
}
const bilosta2 = new Trevor("Trevor","nema","tensey");

console.log(bilosta2);
bilosta2.getpower("ninetails");
console.log(bilosta2);





