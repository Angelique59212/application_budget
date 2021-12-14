/**
 * item recovery
 * @type {HTMLElement}
 */

const income = document.getElementById("income");
const outlay = document.getElementById("outlay");
const saving = document.getElementById("saving");
const resultDiv = document.getElementById("result");

class Budget {

    title(name, elements) {
        const title1 = document.createElement("h2");
        title1.id = "title1";
        elements.appendChild(title1);
        title1.innerHTML = name;
        //Style
        title1.style.textAlign = "center";
        title1.style.fontSize = "3rem";
        title1.style.padding = "1.2rem";
    }

    input(item, className, elements) {
        let label = document.createElement("p");
        elements.appendChild(label);
        label.innerHTML = item;
        let user_data = document.createElement("input");
        user_data.className = className;
        user_data.value = "0";
        user_data.type = "number";
        //style
        label.style.fontSize = "1.5rem";
        elements.appendChild(user_data);

    }
}

let test = new Budget();

test.title("Calcul recette", income);
// Create array income
let arrayIncome = [
    ["income"],
    [
        "Salaire",
        "Aides",
        "Autres"
    ]
];

for (let i = 0 ; i < arrayIncome[1].length; i++) {   //in the array elements
    test.input(arrayIncome[1][i],arrayIncome[0][0],income);
}


test.title("Dépense fixe", outlay);
// Create arrayOutlayFixed
let arrayOutlayFixed = [
    ["outlay"],
    [
        "Loyers et charges",
        "Crédits",
        "Eau Electricité et Gaz",
        "Téléphone et Internet",
        "Assurance Habitation",
        "Assurance Véhicule",
        "Mutuelle",
        "Frais de garde",
        "Impôts"
    ]
];

for (let i = 0 ; i < arrayOutlayFixed[1].length; i++) {   //in the array elements
    test.input(arrayOutlayFixed[1][i], arrayOutlayFixed[0][0], outlay);
}

test.title("Dépense courante", outlay);
//Create arrayOutlayCurrent
let arrayOutlayCurrent = [
    ["outlay"],
    [
        "Course",
        "Essences ou frais de transport",
        "Activités sportives et culturels"
    ]
];

for (let i = 0 ; i < arrayOutlayCurrent[1].length; i++) {   //in the array elements
    test.input(arrayOutlayCurrent[1][i],arrayOutlayCurrent[0][0], outlay);
}

test.title("Dépense occasionnel", outlay)
//Create arrayOutlayOccasional
let arrayOutlayOccasional = [
    ["outlay"],
    [
        "Sorties",
        "Autres"
    ]
];

for (let i = 0 ; i < arrayOutlayOccasional[1].length; i++) {   //in the array elements
    test.input(arrayOutlayOccasional[1][i],arrayOutlayOccasional[0][0], outlay);
}

test.title("Epargne", saving);
//Create arraySaving
let arraySaving = [
    ["saving"],
    ["Epargne"]
];

for (let i = 0 ; i < arraySaving[1].length; i++) {   //in the array elements
    test.input(arraySaving[1][i], arraySaving[0][0], saving);
}

//create button result and add value
let buttonResult = document.createElement("button");
buttonResult.style.fontSize = "2rem";
resultDiv.appendChild(buttonResult);
buttonResult.innerHTML = "Total";
buttonResult.addEventListener("click", () => {
    const allIncomeInput = document.getElementsByClassName("income");

    let allIncome = 0;
    for (let input of allIncomeInput) {
        allIncome += parseFloat(input.value);
    }

    const allOutlayInput = document.getElementsByClassName("outlay");

    let allOutlay = 0;
    for (let input of allOutlayInput) {
        allOutlay += parseFloat(input.value);
    }

    const allSavingInput = document.getElementsByClassName("saving");

    let allSaving = 0;
    for (let input of allSavingInput) {
        allSaving += parseFloat(input.value);
    }

    //result total
    let result = allIncome - (allOutlay + allSaving);

    // condition result
    if (result > 200) {
        resultDiv.innerHTML = "Il vous reste " + result.toString() + " € " + "<br>" +  "Vous pouvez ajouter " +
            result.toString() + " € "  + "à vos dépenses occasionnels";
        //style
        resultDiv.style.color = "green";
    }
    else if(result > 0) {
        resultDiv.innerHTML = "Il vous reste " + result.toString() + " € " ;
        //style
        resultDiv.style.color = "green";
    }
    else if (result < 0) {
        resultDiv.innerHTML = "Votre solde est en négatif";
        //style
        resultDiv.style.color = "red";
    }
    else if (result === 0) {
        resultDiv.innerHTML = "Votre solde est nul";
    }
})
const container = document.getElementById("container").getElementsByTagName("input");
let reset = document.createElement("button");
resultDiv.appendChild(reset);
reset.innerHTML = "Reset";


