// fetch("https://wger.de/api/v2/exercise", {
//   headers: {
//     Authorization: "Token 51eae17751517fcd6cfe4323e98e6674a9c914e2",
//   },
// })
//   .then((res) => res.json())
//   .then((resp) => console.log(resp.results));

window.onload = () => {
  let button = document.querySelector("#bmi-btn");

  // Add event listener('click') to calculate BMI
  button.addEventListener("click", calculateBMI);
};
// Function for calculating BMI
function calculateBMI() {
  // Getting input from user for height variable.
  let height = parseInt(document.querySelector("#height").value);

  // Getting input from user for weight variable.
  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  // Checking to ensure user provided the required details
  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  // If both input is valid, calculate the bmi
  else {
    // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Dividing as per the bmi conditions
    if (bmi < 18.6)
      result.innerHTML = `Under Weight : <span id='Under Weight'>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
}
