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