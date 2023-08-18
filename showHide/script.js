function loginNow() {
  const confirmOrNot = prompt("Please enter your name  to login.😊");

  if (confirmOrNot === null) {
    return;
  } else {
    alert(`u are logged in ${confirmOrNot} 🥳`);
  }
}
