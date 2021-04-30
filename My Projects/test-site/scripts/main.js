let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/samplephoto.jpg') {
    myImage.setAttribute('src', 'images/samplephoto2.jpg');
  } else {
    myImage.setAttribute('src', 'images/samplephoto.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('あなたの名前を入力してください');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozillaは素晴らしいよ、' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Millaは素晴らしいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}