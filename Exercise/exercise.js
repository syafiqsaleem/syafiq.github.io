const input = document.querySelector("#exercise_name");

const searchResult = document.querySelector("#search-result");

const btn = document.querySelector("#search-form-btn");

btn.addEventListener("click", async function (e) {
  e.preventDefault();

  let userInput = input.value.toLowerCase();
  console.log(userInput);

  let firstResult = await queryAndFilterResults(
    "https://wger.de/api/v2/exercise/?language=2&limit=10",
    userInput
  );
  console.log(firstResult);
  let nextPageUrl = firstResult.next;
  while (nextPageUrl) {
    let newResult = await queryAndFilterResults(nextPageUrl, userInput);
    nextPageUrl = newResult.next;
  }
});

function queryAndFilterResults(url, filterQuery) {
  return fetch(url, {
    headers: {
      Authorization: "Token 51eae17751517fcd6cfe4323e98e6674a9c914e2",
    },
  })
    .then((res) => res.json())
    .then((resp) => {
      const { results } = resp;
      const filteredArray = results.filter((workout) =>
        workout.name.toLowerCase().includes(filterQuery)
      );
      console.log(filteredArray);
      filteredArray.forEach((workout) => {
        let outcome = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerText = workout.name;
        outcome.appendChild(h1);
        outcome.insertAdjacentHTML("beforeend", workout.description);
        searchResult.appendChild(outcome);
      });
      return resp;
    });
}
