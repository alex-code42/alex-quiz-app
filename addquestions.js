console.clear();
const form= document.querySelector('[data-js="form"]');
const listOfQuestions = document.querySelector('[data-js="listOfQuestions"]');
const main = document.querySelector("main");



console.log(listOfQuestions)


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
//     <section class="questions">
//     <h2 class="questions__question" >What property flips the axes in flexbox?</h2>
//         <button data-js="button">
//             <span data-js="button_text"class="questions__buttons">Show Answer</span>
//         </button>
//     <p data-js="question_answer" class="questions__hidden" display="none" >Flex direction</p>
//     <img data-js="bookmark" class="questions__bookmark" src="./image/bookmark.png" alt="bookmark">
//     <ul class="questions__tags">
//         <li class="questions__tags__tag">#align</li>
//         <li class="questions__tags__tag">#flexbox</li>
//         <li class="questions__tags__tag">#css</li>
//     </ul>
// </section>
let tests = "easygoing"
console.log("hello Logg")

// Create Section
let section = document.createElement("section");
section.setAttribute("class", "questions");

// Create h2 elements
let h2 = document.createElement("h2");
h2.setAttribute("class", "questions__question");
h2.innerHTML = question;

// Create Button
let button = document.createElement("button");
button.setAttribute("data-js", "button");

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

// Append Tags to Section and Section to Main
section.append(h2);
section.append(button);
section.append(p);
section.append(img);
section.append(ul);
ul.append(li);
main.append(section);



    // create a new div element
    // const section = document.createElement("section");
    // section.setAttribute("class", "questions");

    // const title = document.createElement("h2");
    // title.setAttribute("class", "questions__question");
    // title.innerHTML = "WHATS UP"
    // listOfQuestions.append(section)
    
    const buttontext = document.querySelector('[data-js="button_text"]');
    const answer = document.querySelector('[data-js="question_answer"]');
  
  
    button.addEventListener("click", (event) =>{
     
      showAnswer()
      changeButtonText()
      
  
  })
  
  bookmark.addEventListener("click", (event) =>{
  
  bookmark.classList.toggle("togglebookmark");
  
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

  
  