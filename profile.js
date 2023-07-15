console.clear();

const darkmodeButton = document.querySelector('[data-js="darkmode"]');

document.body.classList.remove('dark-theme')
console.log(darkmodeButton)

darkmodeButton.addEventListener("change", function(){
   
    document.body.classList.toggle('dark-theme');
})