fetch("https://wger.de/api/v2/exercise", {
  headers: {
    Authorization: "Token 51eae17751517fcd6cfe4323e98e6674a9c914e2",
  },
})
  .then((res) => res.json())
  .then((resp) => console.log(resp.results));
