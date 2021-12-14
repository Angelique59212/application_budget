/**
 * item recovery
 * @type {HTMLElement}
 */
const income = document.getElementById("income");
const outlay = document.getElementById("outlay");
const saving = document.getElementById("saving");
const resultDiv = document.getElementById("result");

let test = new Budget();

// Create array income
let arrayIncome = [
    ["income"],
    [
        "Salaire",
        "Aides",
        "Autres"
    ]
]
;
// Create arrayOutlay
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


test.title("Calcul recette");

for (let i = 0 ; i < arrayIncome[1].length; i++) {
    test.input(arrayIncome[1][i],arrayIncome[0][0]);
}

test.title("Dépense fixe");

for (let i = 0 ; i < arrayOutlayFixed[1].length; i++) {
    test.input(arrayOutlayFixed[1][i], arrayOutlayFixed[0][0]);
}

test.title("Dépense courante");

let arrayOutlayCurrent = [["outlay"], ["Course", "Essences ou frais de transport", "Activités sportives et culturels"]];
for (let i = 0 ; i < arrayOutlayCurrent[1].length; i++) {
    test.input(arrayOutlayCurrent[1][i],arrayOutlayCurrent[0][0]);
}

test.title("Dépense occasionnel")
let arrayOutlayOccasional = [["outlay"], ["Sorties", "Autres"]];
for (let i = 0 ; i < arrayOutlayOccasional[1].length; i++) {
    test.input(arrayOutlayOccasional[1][i],arrayOutlayOccasional[0][0]);
}

test.title("Epargne");
let arraySaving = [["saving"],["Epargne"]];
for (let i = 0 ; i < arraySaving[1].length; i++) {
    test.input(arraySaving[1][i], arraySaving[0][0]);
}

let buttonResult = document.createElement("button");
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

    let result = allIncome - (allOutlay + allSaving);

    if (result > 200) {
        resultDiv.innerHTML = "Il vous reste " + result.toString() + " € " + "<br>" +  "Vous pouvez ajouter " +
            result.toString() + " € "  + "à vos dépenses occasionnels";
        resultDiv.style.color = "green";
    }
    else if(result > 0) {
        resultDiv.innerHTML = "Il vous reste " + result.toString() + " € " ;
        resultDiv.style.color = "green";
    }
    if (result < 0) {
        resultDiv.innerHTML = "Votre solde est en négatif";
        resultDiv.style.color = "red";
    }
    else if (result === 0) {
        resultDiv.innerHTML = "Votre solde est nul";
    }
})



