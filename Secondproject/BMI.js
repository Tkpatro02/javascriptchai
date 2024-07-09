const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight${weight}`;
  } else {
    const Bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = "";

    if (Bmi < 18.6) {
      color = "red";
      category = "Underweight";
    } else if (Bmi >= 18.6 && Bmi <= 24.9) {
      color = "green";
      category = "Normal Range";
    } else if (Bmi > 24.9) {
      color = "yellow";
      category = "Overweight";
    }

    results.innerHTML = `<span style="color: ${color};">${Bmi}   ${category}</span>`;
  }
});
