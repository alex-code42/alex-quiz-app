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







