console.clear();
const form= document.querySelector('[data-js="form"]');
const addQuestion= document.querySelector('[data-js="addquestion"]');
const addAnswer = document.querySelector('[data-js="addanswer"]');
const listOfQuestions = document.querySelector('[data-js="listOfQuestions"]');
const main = document.querySelector("main");
const charsLeftOfQuestion = document.querySelector('[data-js="charactersleft"]');
const charsLeftOfAnswer = document.querySelector('[data-js="answersleft"]');

console.log(charsLeftOfQuestion)


console.log(listOfQuestions)
console.log(addAnswer)


form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  
    console.log(data);
    console.log(data.question);
    console.log(data.answer);
    console.log(data.tags);
    let question = data.question
    let ans = data.answer
    let tags = data.tags
    createElements(question, ans, tags);
  })


function createElements(question, ans, tags){

//Create Div
let div = document.createElement("div");
div.setAttribute("class", "square-wrapper");

// Create Section
let section = document.createElement("section");
section.setAttribute("class", "questions");
section.classList.add("class", "square");
section.classList.add("class", "square-transition");

// Create h2 elements
let h2 = document.createElement("h2");
h2.setAttribute("class", "questions__question");
h2.innerHTML = question;

// Create Button
let button = document.createElement("button");
button.setAttribute("data-js", "button");

// Create Span
let span = document.createElement("span");
span.setAttribute("class", "questions__buttons");
span.setAttribute('data-js', 'button_text');
span.innerHTML = "Show Answer"
button.append(span)


// Create p Element
let p = document.createElement("p");
p.setAttribute("class", "questions__hidden");
p.setAttribute('data-js', 'question_answer');
p.style.display = 'none';
p.innerHTML = ans;

// Create img Element
let img = document.createElement("img");
img.setAttribute("class", "questions__bookmark");
img.setAttribute("src", "./image/bookmark.png");

// Create Tag Elements
let ul = document.createElement("ul");
ul.setAttribute("class", "questions__tags");
let li = document.createElement("li");
li.setAttribute("class", "questions__tags__tag");
li.innerHTML = "#"+ tags;

// Append Tags to Section and Section to Main to Div 
section.append(h2);
section.append(button);
section.append(p);
section.append(img);
section.append(ul);
ul.append(li);
div.append(section)
main.append(div);


const buttontext = document.querySelector('[data-js="button_text"]');
const answer = document.querySelector('[data-js="question_answer"]');

button.addEventListener("click", (event) =>{
    
showAnswer()
changeButtonText()

})



function showAnswer(){
if (answer.style.display === "none"){
    answer.style.display = "block"
}
else {
answer.style.display = "none"
}
}

function changeButtonText(){
if (buttontext.innerHTML === "Show Answer"){
    buttontext.innerHTML = "Hide Answer"
}
else{
    buttontext.innerHTML = "Show Answer"
}
}

answer.style.display = "none"

};

addQuestion.addEventListener("input", (event) => {
  
  console.log("hallo")
  console.log(addQuestion.value.length)

  let charactersTyped = addQuestion.value.length 

  let charsLeft = 90 - charactersTyped
  console.log(charsLeft)
  charsLeftOfQuestion.innerHTML = `You have ${charsLeft} Characters left`
  
})

addAnswer.addEventListener("input", (event) => {
  
  console.log("hallo")
  console.log(addAnswer.value.length)

  let charactersTyped = addAnswer.value.length 

  let charsLeft = 120 - charactersTyped
  console.log(charsLeft)
  charsLeftOfAnswer.innerHTML = `You have ${charsLeft} Characters left`
  
})



// Get all square elements
const squares = document.querySelectorAll('.square');

// Remove the transition class from all square elements
squares.forEach(square => {
  square.classList.remove('square-transition');
});

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.square');

    if (entry.isIntersecting) {
      square.classList.add('square-transition');
    } else {
      square.classList.remove('square-transition');
    }
  });
});

// Observe each square-wrapper element
const squareWrappers = document.querySelectorAll('.square-wrapper');
squareWrappers.forEach(wrapper => {
  observer.observe(wrapper);
});
