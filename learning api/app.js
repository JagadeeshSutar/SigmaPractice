// let jsonRes = {
//   "message": "https://images.dog.ceo/breeds/spitz-japanese/beet-004.jpg",
//   "status": "success",
// };
// validResp = JSON.stringify(jsonRes);
// console.log(validResp);

// console.log("Hiii")
// let jsonString = '{"message": "https://images.dog.ceo/breeds/spitz-japanese/beet-004.jpg", "status": "success"}';
// let validResp1 = JSON.parse(jsonString);
// console.log(validResp1.message);

// let student = {
//   name: "jagadeesh",
//   rolno : 16,
// }

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((respnse) => {
//     // console.log(respnse);
//     return respnse.json();
//   })
//   .then((data) => {
//     console.log("data one : " + data.fact);
//     return fetch(url);
//   })
//   .then((respnse) => {
//     return respnse.json();
//   })
//   .then((data2) => {
//     console.log("data two : " + data2.fact)
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// async function funFacts() {
//   try {
//     let result = await fetch(url);
//     let data = await result.json();
//     console.log(data.fact)
//   } catch (error) {
//     console.log(error)
//   }
// }

// funFacts();
let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");
btn.addEventListener("mouseenter", async () => {
  let fact = await showFact();
  let body = document.querySelector("body");
  let para = document.querySelector("p").innerHTML = fact;
  console.log(para)
})

async function showFact() {
  try {
    let fact = await axios.get(url);
    return fact.data.fact;
  } catch (error) {
    return error;
  }
}