// notifcatio alert message

function msgAlert(msg, type = "warning") {
  return `<p
     class="alert alert-${type} d-flex justify-content-between"
     role="alert"
   >
     ${msg}
     <button
       class="btn btn-close"
       data-bs-dismiss="alert"
     ></button>
   </p>`;
}

// phone number validation

const isPhone = (number) => {
  const pattern = /^(\+880|880|0)[0-9]{10}$/;
  let val = pattern.test(number);
  return val;
};

// email validation

const isEmail = (mail) => {
  const pattern = /^[a-zA-Z0-9\.]{2,10}@[a-z0-9]{2,10}\.[a-z]{2,10}$/;
  let val = pattern.test(mail);
  return val;
};
