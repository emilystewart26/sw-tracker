  const foods = {
    skimmedMilk: {
      name: "Skimmed milk",
      fullAmount: 350,
      unit: "ml"
    },
    
    semiSkimmedMilk: {
      name: "Semi-skimmed milk",
      fullAmount: 250,
      unit: "ml"
    },
    
    wholeMilk: {
      name: "Whole milk",
      fullAmount: 200,
      unit: "ml"
    },
    
    soyaMilk: {
      name: "Soya milk",
      fullAmount: 400,
      unit: "ml"
    },
    
    almondMilk: {
      name: "Almond milk",
      fullAmount: 400,
      unit: "ml"
    },
    
    coconutMilk: {
      name: "Coconut milk",
      fullAmount: 400,
      unit: "ml"
    },
    
    riceMilk: {
      name: "Soya milk",
      fullAmount: 225,
      unit: "ml"
    },
    
    cheddarCheese: {
      name: "Cheddar",
      fullAmount: 30,
      unit: "g"
    },

    edamCheese: {
      name: "Edam",
      fullAmount: 35,
      unit: "g"
    },

    fetaCheese: {
      name: "Feta",
      fullAmount: 45,
      unit: "g"
    },
    
    halloumiCheese: {
      name: "Halloumi",
      fullAmount: 35,
      unit: "g"
    },

  };

  //Dropdown menu
  function populateDropdown() {
  const select =
    document.getElementById("food");

  for (const key in foods) {
    const food = foods[key];

    const option =
      document.createElement("option");

    option.value = key;

    option.textContent =
      `${food.name}
      (${food.fullAmount}${food.unit})`;

    select.appendChild(option);
  }
}

//Percentage calculation
  let usedPercent = 0;

  function addFood() {
    const foodKey =
      document.getElementById("food").value;

    const amount =
      Number(
        document.getElementById("amount").value
      );

    if (!amount || amount <= 0) {
      return;
    }

    const food = foods[foodKey];

    const percent =
      (amount / food.fullAmount) * 100;

    usedPercent += percent;

    render();

    addEntry(food, amount, percent);

    document.getElementById("amount").value = "";
  }

  function render() {
    const remaining =
      Math.max(0, 100 - usedPercent);

    document.getElementById(
      "usedPercent"
    ).textContent =
      usedPercent.toFixed(1) + "%";

    document.getElementById(
      "remainingPercent"
    ).textContent =
      remaining.toFixed(1) + "%";
  }

  function addEntry(food, amount, percent) {
    const li =
      document.createElement("li");

    li.textContent =
      `${food.name}: ${amount}${food.unit}
      (${percent.toFixed(1)}%)`;

    document
      .getElementById("entries")
      .appendChild(li);
  }

  populateDropdown();
render();