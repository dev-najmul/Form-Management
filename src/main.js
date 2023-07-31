const form = document.querySelector(".form form");
const msg = document.querySelector(".msg");

form.onsubmit = (e) => {
  e.preventDefault();

  const formD = new FormData(e.target);
  const fData = Object.fromEntries(formD);

  //form validation
  if (!fData.name || !fData.email || !fData.phone) {
    msg.innerHTML = msgAlert("All fildes are requerds");
  } else if (!isEmail(fData.email)) {
    msg.innerHTML = msgAlert("E-mail is not valid", "danger");
  } else if (!isPhone(fData.phone)) {
    msg.innerHTML = msgAlert("phone not valid");
  } else {
    e.target.reset();
    msg.innerHTML = msgAlert("Data Stable", "info");
  }
};
