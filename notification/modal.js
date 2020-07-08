let information = [
  {
    id: 1,
    title: "Reactive demand-driven array",
    phrase:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 2,
    title: "User-centric global info-mediaries",
    phrase:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 3,
    title: "Synergistic tertiary hardware",
    phrase:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    id: 4,
    title: "Configurable real-time success",
    phrase:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    id: 5,
    title: "Business-focused reciprocal help-desk",
    phrase:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    id: 6,
    title: "Automated foreground collaboration",
    phrase:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    id: 7,
    title: "Customizable didactic software",
    phrase:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    id: 8,
    title: "Focused mobile structure",
    phrase:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    id: 9,
    title: "Stand-alone optimizing help-desk",
    phrase:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 10,
    title: "Robust systemic infrastructure",
    phrase:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
];

const string = `
    <div class="listingTable">
       <div class="textInformation">
         <h2 class="title">${information[0].title}</h2>
         <p class="text">${information[0].phrase}</p>
       </div>
     <button id="closeButton" class="closeButton">x</button>   
    </div>
    <footer class="footer">
      <div class="bottom">
        <input type="checkbox" class="checkbox" value="disable">Disable Tips
      </div> 
      <button id="btnPrev" class="btn-prev-next"><</button>
      <div class="paginationButtons"> 
        <button class="numberPageButton" id="b1">1</button>
        <button class="numberPageButton" id="b2">2</button>
        <button class="numberPageButton" id="b3">3</button>
        <button class="numberPageButton" id="b4">4</button>
        <button class="numberPageButton" id="b5">5</button>
        <button class="numberPageButton" id="b6">6</button>
        <button class="numberPageButton" id="b7">7</button>
        <button class="numberPageButton" id="b8">8</button>
        <button class="numberPageButton" id="b9">9</button>
        <button class="numberPageButton" id="b10">10</button>       
      </div>
      <button id="btnNext" class="btn-prev-next">></button>
    </footer>
    `;

let mainDiv = document.createElement("div");
mainDiv.className = "mainWindow";
mainDiv.innerHTML = string;

document.body.appendChild(mainDiv);

let closebutton = document.querySelector(".closeButton");
let checkbox = document.querySelector(".checkbox");
closeButton.addEventListener("click", () => {
  if (checkbox.checked) {
    localStorage.setItem("check", "disable");
  }
  mainDiv.remove();
});

let title = document.querySelector(".title");
let text = document.querySelector(".text");
let informationIndex = 0;

let btnPrev = document.querySelector("#btnPrev");
btnPrev.addEventListener("click", () => {
  informationIndex -= 1;
  if (informationIndex < 0) {
    informationIndex = informationIndex + information.length;
  }
  title.innerHTML = information[informationIndex].title;
  text.innerHTML = information[informationIndex].phrase;
});

let btnNext = document.querySelector("#btnNext");
btnNext.addEventListener("click", () => {
  informationIndex = (informationIndex + 1) % information.length;
  title.innerHTML = information[informationIndex].title;
  text.innerHTML = information[informationIndex].phrase;
});

let button1 = document.querySelector("#b1");
let button2 = document.querySelector("#b2");
let button3 = document.querySelector("#b3");
let button4 = document.querySelector("#b4");
let button5 = document.querySelector("#b5");
let button6 = document.querySelector("#b6");
let button7 = document.querySelector("#b7");
let button8 = document.querySelector("#b8");
let button9 = document.querySelector("#b9");
let button10 = document.querySelector("#b10");

button1.addEventListener("click", () => {
  title.innerHTML = information[0].title;
  text.innerHTML = information[0].phrase;
});

button2.addEventListener("click", () => {
  title.innerHTML = information[1].title;
  text.innerHTML = information[1].phrase;
});

button3.addEventListener("click", () => {
  title.innerHTML = information[2].title;
  text.innerHTML = information[2].phrase;
});

button4.addEventListener("click", () => {
  title.innerHTML = information[3].title;
  text.innerHTML = information[3].phrase;
});

button5.addEventListener("click", () => {
  title.innerHTML = information[4].title;
  text.innerHTML = information[4].phrase;
});

button6.addEventListener("click", () => {
  title.innerHTML = information[5].title;
  text.innerHTML = information[5].phrase;
});

button7.addEventListener("click", () => {
  title.innerHTML = information[6].title;
  text.innerHTML = information[6].phrase;
});

button8.addEventListener("click", () => {
  title.innerHTML = information[7].title;
  text.innerHTML = information[7].phrase;
});

button9.addEventListener("click", () => {
  title.innerHTML = information[8].title;
  text.innerHTML = information[8].phrase;
});

button10.addEventListener("click", () => {
  title.innerHTML = information[9].title;
  text.innerHTML = information[9].phrase;
});
