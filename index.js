console.clear();

const button = document.querySelector('[data-js="button"]');
const buttontext = document.querySelector('[data-js="button_text"]');
const answer = document.querySelector('[data-js="question_answer"]');
const bookmark = document.querySelector('[data-js="bookmark"]');


console.log(button)




console.log(bookmark)
console.log(answer)

button.addEventListener("click", (event) =>{
   
        showAnswer()
        changeButtonText()
        changePosition()
        

  })

  bookmark.addEventListener("click", (event) =>{
   
    bookmark.classList.toggle("togglebookmark");

})

  function showAnswer(){
    answer.classList.toggle("position--1");
    // if (answer.style.display === "none"){
    //     answer.style.display = "block"
    // }
    // else {
    //     answer.style.display = "none"
    // }
}

function changeButtonText(){
    if (buttontext.innerHTML === "Show Answer"){
        buttontext.innerHTML = "Hide Answer"
    }
    else{
        buttontext.innerHTML = "Show Answer"
    }
}

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








