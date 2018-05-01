var form = document.getElementById('contact-form')
form.addEventListener('submit', sendDataToLambda);

var response = document.getElementById('response');
var contactPageContent = document.getElementById('contact-page-content');

if (!window.__peepCfg.contactForm) {
  form.style.display = 'none';
  document.querySelector('.contact-form').style.padding = '0';
  document.querySelector('.response-handler').style.height = '0';
  contactPageContent.style.display = 'block';

}

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

  fetch(lambdaRequest)
    .then(data => {
      response.innerText = window.__peepCfg.contactSuccess ? window.__peepCfg.contactSuccess : `Thanks for your message, I'll get back to you as soon as possible`;
    })
    .catch(err => {
      response.innerText = window.__peepCfg.contactError ? window.__peepCfg.contactError :`Something went wrong, please try again`;
    });

  document.getElementById('contact-form').reset();
}

// don't bundle this one! it should only be loaded on the contact form!
// build the backend
// test the __themeCfg