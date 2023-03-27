let div = document.createElement("div");
div.style.textAlign = "center";

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");

let button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary", "ml-3");
button.textContent = "Button";

let active = document.createElement("div");

div.append(input, button, active);
document.body.append(div);

button.addEventListener("click", foo);

async function foo() {
  try {
    let searchQuery = input.value;
    console.log(input.value);
    let res = await fetch(
      `https://api.covid19api.com/total/dayone/country/${searchQuery}`
    );
    let res1 = await res.json();
    active.innerHTML = `<p>Active Cases : ${res1[res1.length - 1].Active}</p>
    <p>Death Cases : ${res1[res1.length - 1].Deaths}</p>
    <p>Recovered Cases : ${res1[res1.length - 1].Recovered}</p>`;
  } catch (error) {
    console.log(error);
  }
}
