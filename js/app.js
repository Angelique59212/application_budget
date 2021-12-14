const income = document.getElementById("income");
const outlay = document.getElementById("outlay");
const saving = document.getElementById("saving");
const result = document.getElementById("result");

class Budget {
    title(name) {
        const title1 = document.createElement("h2");
        income.appendChild(title1);
        title1.innerHTML = name;
    }

    input(item, className) {
        let label = document.createElement("p");
        income.appendChild(label);
        label.innerHTML = item;
        let user_data = document.createElement("input");
        user_data.className = className;
        user_data.value = "0";
        user_data.type = "number";
        income.appendChild(user_data);
    }
}

let test = new Budget();
test.title("Calcul recette");

let arrayIncome = [["income"], ["Salaire", "Aides", "Autres"]];
for (let i = 0 ; i < arrayIncome[1].length; i++) {
    test.input(arrayIncome[1][i],arrayIncome[0][0]);
}

test.title("Dépense fixe");

let arrayOutlayFixed = [["outlay"], ["Loyers et charges", "Crédits", "Eau Electricité et Gaz", "Téléphone et Internet",
"Assurance Habitation", "Assurance Véhicule", "Mutuelle", "Frais de garde", "Impôts"]];
for (let i = 0 ; i < arrayOutlayFixed[1].length; i++) {
    test.input(arrayOutlayFixed[1][i],arrayOutlayFixed[0][0]);
}

test.title("Dépense courante")
let arrayOutlayCurrent = [["outlayCurrent"], ["Course", "Essences ou frais de transport", "Activités sportives et culturels"]];
for (let i = 0 ; i < arrayOutlayCurrent[1].length; i++) {
    test.input(arrayOutlayCurrent[1][i],arrayOutlayCurrent[0][0]);
}

test.title("Dépense occasionnel")
let arrayOutlayOccasional = [["outlayOccasional"], ["Sorties", "Autres"]];
for (let i = 0 ; i < arrayOutlayCurrent[1].length; i++) {
    test.input(arrayOutlayOccasional[1][i],arrayOutlayOccasional[0][0]);
}

test.title("Epargne");
let arraySaving = [["saving"]];
for (let i = 0 ; i < arraySaving[0].length; i++) {
    test.input(arraySaving[0][0]);
}


const allIncomeInput = document.getElementsByClassName("recette");

let allIncome = 0;
for (let input of allIncomeInput) {
    allIncome += parseFloat(input.value);
}
console.log(allIncome)


