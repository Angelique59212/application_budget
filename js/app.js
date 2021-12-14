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

let arrayIncome = [["recette"], ["Salaire", "Aides", "Autres"]];
for (let i = 0 ; i < arrayIncome[1].length; i++) {
    test.input(arrayIncome[1][i],arrayIncome[0][0])
}

test.title("Calcul Dépense");

let arrayOutlay = [["depense"], ["Loyers et charges"]];
for (let i = 0 ; i < arrayOutlay[1].length; i++) {
    test.input(arrayOutlay[1][i],arrayOutlay[0][0])
}



const allIncomeInput = document.getElementsByClassName("recette");

let allIncome = 0;
for (let input of allIncomeInput) {
    allIncome += parseFloat(input.value);
}
console.log(allIncome)


