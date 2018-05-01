document.getElementById('contact-form').addEventListener('submit', sendDataToLambda);

function sendDataToLambda(e) {
  e.preventDefault();

  var formEmail = document.getElementById('form-email').value;
  var formSubject = `New message from ${window.location.hostname}`;
  var formMessage = document.getElementById('form-body').value;

  var endpoint = window.__peepCfg.contactForm;

  var body = {
    email: formEmail,
    subject: formSubject,
    message: formMessage
  }

  var lambdaRequest = new Request(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(body)
  });

  var response = document.getElementById('response');
  fetch(lambdaRequest)
    .then(data => {
      response.innerText = `Thanks for your message, I'll get back to you as soon as possible`;
    })
    .catch(err => {
      response.innerText = `Something went wrong, please try again`;
    });

  document.getElementById('contact-form').reset();
}

// don't bundle this one! it should only be loaded on the contact form!
// build the backend
// test the __themeCfg