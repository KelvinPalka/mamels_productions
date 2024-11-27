contact = document.getElementById("contact-form")
function validar() {
    var  name = contact.name.value;
    var email = contact.email.value;
    var subject = contact.subject.value;
    var select = contact.querySelector("select").value;
  
    if (name == "") {
      alert("Por favor preencha o campo com o seu Nome de Usuário");
      contact.name.focus();
      return false;
    }
  
    if (email == "") {
      alert("Por favor preencha o campo com o seu email");
      contact.email.focus();
      return false;
    }
  
    if (subject == "") {
      alert("Por favor preencha o campo com assunto");
      contact.subject.focus();
      return false;
    }
  
    if (select == "") {
      alert("Por favor selecione uma nota de avaliação do site");
      contact.querySelector("select").focus();
      return false;
    }
  
    alert("Mensagem enviada!");
  
    contact.reset();
    return true;
  }
  