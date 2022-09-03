var elsiteForm = document.querySelector('.site-form');
var elnameInput = document.querySelector('.name-title');
var elinputBall = document.querySelector('.ball');
var elcheckbox = document.querySelector('.checkbox');
var elbtn = document.querySelector('.btn-js');
var elmassegeBox = document.querySelector('.massege-div');
var elmassege = document.querySelector('.massege');
var elmassege1 = document.querySelector('.massege1');
var elmassege2 = document.querySelector('.massege2');

elsiteForm.addEventListener('submit', function (e){
  e.preventDefault()

  var elnameInput = document.querySelector('.name-title').value.trim().toUpperCase();
  var elinputBall = parseFloat(elsiteForm.querySelector('.ball').value.trim(), 10);
  var elnumBall = 106;
  var elnanBall = 57;
  

  if (elcheckbox.checked) {
    elmassegeBox.style.backgroundColor = 'blue';
    elmassegeBox.style.color = 'white';
    elmassegeBox.style.padding = '10px';
    elmassegeBox.style.borderRadius = '10px';
    elmassegeBox.style.width = '500px';
    elmassegeBox.style.margin = '0 auto';
    elmassege.textContent = `Tabriklaymiz ${elnameInput} !`;
    elmassege1.textContent = `siz o'qishga kirdingiz`;
    elmassege2.textContent = `Your score ${elinputBall} nice !`;
  } else if (elinputBall >= elnumBall){
    elmassegeBox.style.backgroundColor = 'green';
    elmassegeBox.style.color = 'white';
    elmassegeBox.style.padding = '10px';
    elmassegeBox.style.borderRadius = '10px';
    elmassegeBox.style.width = '500px';
    elmassegeBox.style.margin = '0 auto';
    elmassege.textContent = `Tabriklaymiz ${elnameInput} !`;
    elmassege1.textContent = `siz KONTRAKT asosida o'qishga kirdingiz`;
    elmassege2.textContent = `Your score ${elinputBall} nice !`;
  } else if (elinputBall >= elnanBall && elinputBall < elnumBall) {
    elmassegeBox.style.backgroundColor = 'goldenrod';
    elmassegeBox.style.color = 'white';
    elmassegeBox.style.padding = '10px';
    elmassegeBox.style.borderRadius = '10px';
    elmassegeBox.style.width = '500px';
    elmassegeBox.style.margin = '0 auto';
    elmassege.textContent = `Tabriklaymiz ${elnameInput} !`;
    elmassege1.textContent = `siz SUPER KONTRAKT asosida o'qishga kirdingiz`;
    elmassege2.textContent = `Your score ${elinputBall} good !`;
  } else {
    elmassegeBox.style.backgroundColor = 'red';
    elmassegeBox.style.color = 'white';
    elmassegeBox.style.padding = '10px';
    elmassegeBox.style.borderRadius = '10px';
    elmassegeBox.style.width = '500px';
    elmassegeBox.style.margin = '0 auto';
    elmassege.textContent = `Kechirasiz ${elnameInput} !`;
    elmassege1.textContent = `siz o'qishga kira olmadiz`;
    elmassege2.textContent = `Your score ${elinputBall} bad !`;
  }

})

  var bodyElement = document.querySelector("body")
  var darkBtn = document.querySelector(".in-btn-js")

  darkBtn.addEventListener("click", function () {
    bodyElement.classList.toggle("active")

})