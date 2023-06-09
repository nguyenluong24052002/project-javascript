
let formContainer = document.querySelector('#form-container');
let inputItem = document.querySelector('.input-item');
let addbtn = document.querySelector('#add-btn');
let savebtn = document.querySelector('#save-btn')

addbtn.addEventListener('click', function () {
  if (inputItem.childElementCount <= 10) {
    inputItem.insertAdjacentHTML('beforeend', `<div class="input-item">
  <input type="text">
  <button onclick="deleteBtn(this)">-</button>
  </div>`)
  }else if (inputItem.childElementCount === 11) {
    addbtn.style.display = "none";
  }
})


function deleteBtn(button) {
let inputItem = button.parentNode;
inputItem.parentNode.removeChild(inputItem);
}


