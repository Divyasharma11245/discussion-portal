const questions = [];
function isOnlyWhitespace(str) {
  return !str || str.trim() === "";
}

function createHeading() {
  let heading = document.createElement("div");
  heading.style.width = "200vh";
  heading.style.backgroundColor = "#00674f";
  heading.style.height = "50px";
  heading.innerText = "Discussion Portal";
  heading.style.color = "White";
  heading.style.fontWeight = "700";
  heading.style.fontSize = "1.7rem";
  heading.style.display = "flex";
  heading.style.alignItems = "center";
  heading.style.paddingLeft = "20px";
  heading.style.alignContent = "center";
  //   text.style.color = "white";

  document.body.appendChild(heading);
  return heading;
}
let myHeading = createHeading();

function createOuterBox() {
  let outerbox = document.createElement("div");
  outerbox.style.height = "90vh";
  outerbox.style.width = "200vh";
  outerbox.style.textAlign = "center";
  outerbox.style.border = "2px solid black";
  outerbox.style.backgroundColor = "white";
  outerbox.style.display = "flex";
  //   outerbox.style.flexWrap = "wrap";

  document.body.appendChild(outerbox);
  return outerbox;
}
const myOuterBox = createOuterBox();

let submitBtn;

let newQuesbtn;
let searchBox;
let questionsDiv;
function createLeftDiv() {
  let leftDiv = document.createElement("div");
  leftDiv.style.height = "90vh";
  leftDiv.style.overflowY = "auto";
  leftDiv.style.border = "1px solid grey";
  leftDiv.style.width = "100vh";
  leftDiv.style.backgroundColor = "#F1F3F4";

  const elementDiv = document.createElement("div");
  elementDiv.style.height = "70px";
  elementDiv.style.border = "1px solid grey";
  elementDiv.style.display = "flex";
  elementDiv.style.alignItems = "center";
  elementDiv.style.justifyItems = "space-between";
  elementDiv.style.justifyContent = "flex-start";
  elementDiv.style.backgroundColor = "white";

  newQuesbtn = document.createElement("button");
  newQuesbtn.style.backgroundColor = "blue";
  newQuesbtn.innerText = `New Question Form`;
  newQuesbtn.style.color = "white";
  newQuesbtn.style.border = "2px solid blue";
  newQuesbtn.style.borderRadius = "5px";
  newQuesbtn.style.padding = "0.5rem";
  newQuesbtn.style.marginLeft = "20px";
  // const myQuesBtn = createBtn();

  searchBox = document.createElement("input");
  searchBox.setAttribute("type", "text");
  searchBox.setAttribute("id", "search");
  searchBox.setAttribute("placeholder", "Search questions...");
  searchBox.style.padding = "0.5rem";
  searchBox.style.marginLeft = "20px";

  elementDiv.appendChild(newQuesbtn);
  elementDiv.appendChild(searchBox);

  questionsDiv = document.createElement("div");
  questionsDiv.style.height = "100vh";
  questionsDiv.style.overflowY = "auto";
  questionsDiv.style.border = "1px solid grey";
  questionsDiv.style.width = "100vh";
  questionsDiv.style.backgroundColor = "#F1F3F4";

  leftDiv.appendChild(elementDiv);
  leftDiv.appendChild(questionsDiv);
  myOuterBox.appendChild(leftDiv);
}

let myLeftDiv = createLeftDiv();

function createRightDiv() {
  let rightDiv = document.createElement("div");
  rightDiv.style.height = "90vh";
  rightDiv.style.overflowY = "auto";
  rightDiv.style.border = "1px solid grey";
  rightDiv.style.width = "100vh";
  rightDiv.style.display = "flex";
  rightDiv.style.flexDirection = "column";
  rightDiv.style.justifyContent = "center";
  //   rightDiv.style.justifyContent = "space-between";
  myOuterBox.appendChild(rightDiv);
  return rightDiv;
}

const myRightDiv = createRightDiv();

let formText;
function createFormText() {
  formText = document.createElement("div");
  formText.style.color = "black";
  let hText = document.createElement("h1");
  hText.innerText = "Welcome to Discussion Portal !";
  hText.style.margin = "0px";

  let pText = document.createElement("p");
  pText.innerText = "Enter a subject and question to get started";
  pText.style.margin = "0px";

  formText.appendChild(hText);
  formText.appendChild(pText);
  return formText;
}

let myText = createFormText();
myRightDiv.appendChild(formText);

let subject;
let question;
let formDiv;
function rightForm() {
  formDiv = document.createElement("div");
  formDiv.style.paddingTop = "10px";
  formDiv.style.margin = "10px";
  formDiv.style.display = "flex";
  formDiv.style.flexDirection = "column";
  formDiv.style.flexDirection = "flex-start";
  formDiv.style.color = "grey";

  subject = document.createElement("input");
  subject.setAttribute("type", "text");
  subject.setAttribute("id", "subject");
  subject.setAttribute("placeholder", "Subject");
  subject.style.padding = "0.5rem";
  subject.style.width = "30vh";
  subject.style.margin = "20px";

  question = document.createElement("textarea");
  question.setAttribute("type", "text");
  question.setAttribute("id", "question");
  question.setAttribute("placeholder", "Enter your question here...");
  question.setAttribute("rows", "10");
  question.setAttribute("cols", "50");
  question.style.padding = "0.5rem";
  question.style.margin = "20px";
  question.style.marginTop = "0";

  submitBtn = document.createElement("button");
  submitBtn.style.backgroundColor = "blue";
  submitBtn.innerText = `Submit`;
  submitBtn.style.color = "white";
  submitBtn.style.width = "100px";
  submitBtn.style.border = "2px solid blue";
  submitBtn.style.borderRadius = "5px";
  submitBtn.style.padding = "0.5rem";
  submitBtn.style.marginLeft = "20px";

  formDiv.appendChild(subject);
  formDiv.appendChild(question);
  formDiv.appendChild(submitBtn);

  formDiv.style.display = "none";
  return formDiv;
}

let myRightForm = rightForm();
myRightDiv.appendChild(formDiv);

newQuesbtn.onclick = () => {
  if (formDiv.style.display === "none") {
    formDiv.style.display = "flex";
  } else {
    formDiv.style.display = "none";
  }
};

function saveToStorage() {
  let subInp = subject.value;
  let qInp = question.value;

  let ques = {
    subject: subInp,
    question: qInp,
    // responses: [],
  };

  questions.push(ques);

  localStorage.setItem("Task", JSON.stringify(questions));
}

function displayQuestions() {
  questionsDiv.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    // DISPLAY FOR EVERY QUESTION
    let displayDiv = document.createElement("div");
    displayDiv.style.backgroundColor = "#F1F3F4";
    displayDiv.style.border = "2px solid black";
    displayDiv.style.margin = "10px";
    displayDiv.style.padding = "10px";

    displayDiv.innerHTML = `<h2>${questions[i].subject}</h2><p>${questions[i].question}</p>`;

    displayDiv.addEventListener("click", () => {
      const myResponse = createResponseDiv(i);
    });
    questionsDiv.appendChild(displayDiv);
  }
}

// ----SEARCH BUTTON FUNCTIONALITY----
searchBox.addEventListener("input", () => {
  const searchText = searchBox.value.toLowerCase().trim();
  questionsDiv.innerHTML = "";

  let filteredQuestions = questions.filter(
    (q) =>
      q.subject.toLowerCase().includes(searchText) ||
      q.question.toLowerCase().includes(searchText)
  );

  if (filteredQuestions.length === 0) {
    questionsDiv.innerHTML =
      "<p style='color: gray; margin: 10px;'>No matching questions found.</p>";
    return;
  }

  for (let i = 0; i < filteredQuestions.length; i++) {
    let displayDiv = document.createElement("div");
    displayDiv.style.backgroundColor = "#F1F3F4";
    displayDiv.style.border = "2px solid black";
    displayDiv.style.margin = "10px";
    displayDiv.style.padding = "10px";

    displayDiv.innerHTML = `<h2>${filteredQuestions[i].subject}</h2><p>${filteredQuestions[i].question}</p>`;

    // Find index in the original array for response handling
    const index = questions.findIndex(
      (q) =>
        q.subject === filteredQuestions[i].subject &&
        q.question === filteredQuestions[i].question
    );

    displayDiv.addEventListener("click", () => {
      const myResponse = createResponseDiv(index);
    });

    questionsDiv.appendChild(displayDiv);
  }
});

submitBtn.onclick = () => {
  if (isOnlyWhitespace(subject.value) || isOnlyWhitespace(question.value)) {
    alert("Please enter both subject and question.");
    return;
  }
  saveToStorage();

  question.value = "";
  subject.value = "";

  displayQuestions();
};

let stored = JSON.parse(localStorage.getItem("Task")) || [];
for (let i = 0; i < stored.length; i++) {
  questions.push(stored[i]);
}
displayQuestions();

//user story 3

let resolveBtn;
let submitResponse;
function createResponseDiv(index) {
  const ques = questions[index];
  // Clear old response
  myRightDiv.innerHTML = "";
  myRightDiv.innerHTML = `<h3>Question</h3>`;
  myRightDiv.style.color = "grey";

  let headerDiv = document.createElement("div");
  headerDiv.style.backgroundColor = "#F1F3F4";
  headerDiv.style.border = "2px solid black";
  headerDiv.style.padding = "10px";
  headerDiv.style.maxHeight = "30vh";
  headerDiv.style.overflowY = "auto";
  headerDiv.style.margin = "10px";
  // headerDiv.style.padding = "10px";

  // Header
  // let now = new Date();

  // let dateTime = document.createElement("p");
  // dateTime.innerText = now.toString();

  let hText = document.createElement("h2");
  hText.innerText = ques.subject;
  hText.style.margin = "10px";
  hText.style.color = "black";

  let pText = document.createElement("p");
  pText.innerText = ques.question;
  pText.style.margin = "10px";
  pText.style.color = "black";

  //resolve button
  resolveBtn = document.createElement("button");
  resolveBtn.style.backgroundColor = "blue";
  resolveBtn.innerText = `resolve`;
  resolveBtn.style.color = "white";
  resolveBtn.style.width = "100px";
  resolveBtn.style.border = "2px solid blue";
  resolveBtn.style.borderRadius = "5px";
  resolveBtn.style.padding = "0.5rem";
  resolveBtn.style.marginLeft = "20px";

  // headerDiv.appendChild(dateTime);
  headerDiv.appendChild(hText);
  headerDiv.appendChild(pText);
  headerDiv.appendChild(resolveBtn);

  // Response box

  // let responseBoxTitle = document.createElement("h3");
  // responseBoxTitle.innerText = "Response";
  // responseBoxTitle.style.marginLeft = "10px";
  // myRightDiv.appendChild(responseBoxTitle);

  let responseBox = document.createElement("div");
  responseBox.style.paddingTop = "10px";
  responseBox.style.margin = "10px";
  responseBox.style.display = "flex";
  responseBox.style.flexDirection = "column";
  responseBox.style.flexDirection = "flex-start";
  // responseBox.innerHTML = `<h3> Add Response</h3>`;
  responseBox.style.color = "grey";
  responseBox.appendChild(headerDiv);
  myRightDiv.appendChild(responseBox);

  // Container to show all submitted responses
  const responseList = document.createElement("div");
  responseList.style.marginLeft = "20px";
  responseList.style.maxHeight = "30vh";
  responseList.style.overflowY = "auto";
  responseList.style.display = "flex";
  responseList.style.alignItems = "center";
  responseList.style.flexDirection = "column";
  responseList.style.display = "none"; //initial dispaly is none

  responseList.style.paddingRight = "10px";
  responseList.style.border = "1px solid lightgray";
  responseList.style.backgroundColor = "#fff";
  responseBox.appendChild(responseList);

  let heading = document.createElement("h2");
  heading.innerText = "Add Responses";

  // Name input
  let name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("id", "name");
  name.setAttribute("placeholder", "Enter name");
  name.style.padding = "0.5rem";
  name.style.width = "80vh";
  name.style.margin = "20px";

  // Comment input
  let comment = document.createElement("textarea");
  comment.setAttribute("type", "text");
  comment.setAttribute("id", "comment");
  comment.setAttribute("placeholder", "Enter comment");
  comment.setAttribute("rows", "10");
  comment.setAttribute("cols", "50");
  comment.style.padding = "0.5rem";
  comment.style.width = "80vh";
  comment.style.margin = "20px";
  comment.style.marginTop = "0";

  // Submit response button
  submitResponse = document.createElement("button");
  submitResponse.style.backgroundColor = "blue";
  submitResponse.innerText = `Submit`;
  submitResponse.style.color = "white";
  submitResponse.style.width = "100px";
  submitResponse.style.border = "2px solid blue";
  submitResponse.style.borderRadius = "5px";
  submitResponse.style.padding = "0.5rem";
  submitResponse.style.marginLeft = "20px";

  // Append all
  responseBox.appendChild(heading);
  responseBox.appendChild(name);
  responseBox.appendChild(comment);
  responseBox.appendChild(submitResponse);

  // --------Function to render responses
  function renderResponses() {
    responseList.innerHTML = "<h2>All Responses:</h2><br>";

    if (ques.responses && ques.responses.length > 0) {
      for (let i = 0; i < ques.responses.length; i++) {
        let now = new Date().toLocaleString();

        let resDiv = document.createElement("div");
        resDiv.style.backgroundColor = "#F1F3F4";
        resDiv.style.color = "black";
        resDiv.style.width = "100vh";
        resDiv.style.border = "2px solid black";
        resDiv.style.marginLeft = "10px";
        resDiv.style.display = "flex";
        resDiv.style.flexDirection = "column";
        resDiv.style.flexDirection = "flex-start";
        resDiv.innerHTML = `<p>${now.toString()}</p><p><b>Name:</b> ${
          ques.responses[i].name
        }</p><p>${ques.responses[i].comment}</p>`;
        responseList.appendChild(resDiv);
      }
    } else {
      responseList.innerHTML += `<p style="color: gray;">No responses yet.</p>`;
    }
  }

  // Initial render
  renderResponses();
  if (ques.responses && ques.responses.length > 0) {
    responseList.style.display = "flex";
  }

  // Optional: Handle response submit
  submitResponse.onclick = () => {
    console.log("submit response is clicked!");
    if (isOnlyWhitespace(name.value) || isOnlyWhitespace(comment.value)) {
      alert("Please enter both name and comment.");
      return;
    }

    responseList.style.display = "flex";

    const newResponse = {
      name: name.value,
      comment: comment.value,
    };

    if (!questions[index].responses) {
      questions[index].responses = [];
    }
    // Push to responses array
    questions[index].responses.push(newResponse);

    // Update localStorage
    localStorage.setItem("Task", JSON.stringify(questions));

    // Re-render updated response list
    renderResponses();

    // Clear input fields
    name.value = "";
    comment.value = "";
  };

  resolveBtn.onclick = () => {
    questions.splice(index, 1);
    localStorage.setItem("Task", JSON.stringify(questions));
    displayQuestions();
    myRightDiv.innerHTML = "";
    let nxtFormText = createFormText();
    let nxtRightForm = rightForm();
    myRightDiv.appendChild(nxtFormText);
    myRightDiv.appendChild(nxtRightForm);
    if (formDiv.style.display === "none") {
      formDiv.style.display = "flex";
    } else {
      formDiv.style.display = "none";
    }
  };
}
