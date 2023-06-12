let formContainer = document.querySelector('#form-container');
let inputItem = document.querySelector('.input-item');
let addbtn = document.querySelector('#add-btn');
let savebtn = document.querySelector('#save-btn');


addbtn.addEventListener('click', function () {
  if (inputItem.childElementCount <= 10) {
    inputItem.insertAdjacentHTML('beforeend', `<div class="input-item">
      <input type="text" placeholder="Nhập thông tin..">
      <button onclick="deleteBtn(this)">-</button>
      </div>`);
  } else if (inputItem.childElementCount === 11) {
    addbtn.style.display = "none";
  }
});


savebtn.addEventListener('click', renderListStudent);
function renderListStudent() {
  let inputs = inputItem.querySelectorAll('input[type="text"]');
  let studentList = [];

  inputs.forEach(function (input) {
    let valueElement = input.value;
    if (!valueElement) {
      alert('Vui Lòng Nhập Thông Tin')
    }else{
      studentList.push({ content: valueElement, deleted: false });
    }
  });

  localStorage.setItem('studentList', JSON.stringify(studentList));
}

function loadStoredData() {
  let storedData = localStorage.getItem('studentList');
  if (storedData) {
    let studentList = JSON.parse(storedData);

    inputItem.innerHTML = '';

    studentList.forEach(function (student) {
      inputItem.insertAdjacentHTML('beforeend', `<div class="input-item">
        <input type="text" placeholder="Nhập thông tin.." value="${student.content}">
        <button onclick="deleteBtn(this)">-</button>
      </div>`);
    });

    if (inputItem.childElementCount >= 11) {
      addbtn.style.display = "none";
    }
  }
}

function deleteBtn(button){
  if(confirm('Bạn Có Thật Sự Muốn Xóa Không')) {
    let inputDiv = button.parentElement;
    inputDiv.remove();
    renderListStudent()
  }
}

window.addEventListener('load', loadStoredData);


