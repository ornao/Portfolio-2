function myFunction (event) {
    alert('You clicked Canada!');
  }

  let myButton = document.getElementsByClassName('Canada');

for (let i=0; i < myButton.length; i++) {
    myButton[i].addEventListener('click', myFunction);
};

