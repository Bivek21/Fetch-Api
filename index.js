const apiURL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// s

const getFacts = async () => {
  console.log("getting data .....");
  let response = await fetch(apiURL);
  console.log(response);
  let data = await response.json(); //json foramt response
  //   factPAra.innerText = data[2].text;
  factPara.innerText = data[2].text;
};
btn.addEventListener("click", getFacts);
