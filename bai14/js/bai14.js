function validateEmail(email) {
  const re = /\S+@\S+\.\S+/; 
  return re.test(email);
}

function save() {
  let fullname = document.getElementById('fullname').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let address = document.getElementById('address').value; 
  let gender = '';
  if (document.getElementById('male').checked) {
    gender = document.getElementById('male').value;
  }else if (document.getElementById('famale').checked) {
    gender = document.getElementById('famale').value;
  }

  if(_.isEmpty(fullname)) {
    fullname = '';
    document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập họ tên !';
  }else if(fullname.length <= 2) {
    fullname = '';
    document.getElementById('fullname-error').innerHTML = 'Không được ít hơn 2 kí tự !';
  }else if(fullname.length > 50) {
    fullname = '';
    document.getElementById('fullname-error').innerHTML = 'Không được lớn hơn 50 kí tự !';
  }else  {
    document.getElementById('fullname-error').innerHTML = '';
  }

  if(_.isEmpty(email)) {
    email = '';
    document.getElementById('email-error').innerHTML = 'Vui lòng nhập email !';
  }else if(!validateEmail(email)) {
    email = '';
    document.getElementById('email-error').innerHTML = 'Email Không đúng định dạng!';
  }else {
    document.getElementById('email-error').innerHTML = '';
  }

  if(_.isEmpty(phone)) {
    phone = '';
    document.getElementById('phone-error').innerHTML = 'Vui lòng nhập SDT !';
  }else if(phone.length > 10) {
    phone = '';
    document.getElementById('phone-error').innerHTML = 'SDT không đúng!';
  }else {
    document.getElementById('phone-error').innerHTML = '';
  }

  if(_.isEmpty(address)) {
    address = '';
    document.getElementById('address-error').innerHTML = 'Vui lòng nhập Địa chỉ !';
  }else {
    document.getElementById('address-error').innerHTML = '';
  }

  if(_.isEmpty(gender)) {
    gender = '';
    document.getElementById('gender-error').innerHTML = 'Vui lòng chọn giới tính!';
  }else {
    document.getElementById('gender-error').innerHTML = '';
  }

  if(fullname && email && phone && address && gender) {

    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;
    
        students.push({
          fullname: fullname,
          email:  email,
          phone: phone,
          address: address,
          gender: gender,
        })

        localStorage.setItem('students', JSON.stringify(students))
        this.renderlistStudent();
  }
}

function renderlistStudent() {
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;
  if(students.length === 0) {
    document.getElementById('list-student').style.display = 'none';
    return false;
  }

  document.getElementById('list-student').style.display = 'block';

  let tableContent = `<tr>
  <td>#</td>
  <td>Họ Và Tên</td>
  <td>Email</td>
  <td>Điện Thoại</td>
  <td>Giới tính</td>
  <td>Địa Chỉ</td>
  <td>Hành Động</td></tr>`;

  students.forEach((student, index) => {
    let studentId = index;
    let genderLable = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ'
    index++;
    tableContent += `<tr>
    <td>${index}</td>
    <td>${student.fullname}</td>
    <td>Ema${student.email}il</td>
    <td>${student.phone}</td>
    <td>${genderLable}</td>
    <td>${student.address}</td>
    <td>
          <a href='#'>Edit<a/> | <a href='#' onclick='deleteStudent(${studentId})'>Delete<a/>
    </td>
  </tr>`;
  })

  document.getElementById('grid-students').innerHTML = tableContent;  
}

function deleteStudent(id) {
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;
  students.splice(id, 1) 
  localStorage.setItem('students', JSON.stringify(students)) 
  renderlistStudent()
}