var email = document.forms['form']['email'];
var error = document.getElementById('error');
var page_1 = document.getElementById('page-1');
var page_2 = document.getElementById('page-2');
var form = document.getElementById('form');


form.addEventListener('submit', validate)
function validate(e){
    e.preventDefault();
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(validRegex)) {
      page_1.style.display = 'none';
      page_2.style.display = 'flex';   
      return true;
    }
    else{
      error.style.display = 'block';
      email.style.border = '2px solid hsl(354, 100%, 66%)';
      return false;
    }
}