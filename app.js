let userlist = [];

class user {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

userlist.push(new user('apple', '11111', 'member'));
userlist.push(new user('anna', '5555', 'admin'));

function addToUserList() {}

// Put the object into storage
localStorage.setItem('userList', JSON.stringify(userlist));

// Retrieve the object from storage
let localUserlist = JSON.parse(localStorage.getItem('userList'));

// const usernameInput = document.querySelector('#username');
// const passwordInput = document.querySelector('#password');
const submit_btn = document.querySelector('#submit-btn');

submit_btn.addEventListener('click', submit);

function submit() {
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');

  for (i = 0; i < localUserlist.length; i++) {
    if (
      usernameInput.value === localUserlist[i].username &&
      passwordInput.value === localUserlist[i].password
    ) {
      localStorage.setItem('name', JSON.stringify(localUserlist[i].username));
      localStorage.setItem('role', JSON.stringify(localUserlist[i].role));
      alert(
        `Welcome back ${localUserlist[i].role}   ${localUserlist[i].username}`,
      );
      document.location.href = 'second.html';
      return;
    }

    if (
      usernameInput.value === localUserlist[i].username &&
      passwordInput.value != localUserlist[i].password
    ) {
      alert(
        ` ${localUserlist[i].username} 
         I' sure your password is worng. Please enter the correct one`,
      );
      return;
    } else {
      alert('WHO ARE YOU!!!???? ');
      break;
    }
  }
}
//////////////////////////////////////

