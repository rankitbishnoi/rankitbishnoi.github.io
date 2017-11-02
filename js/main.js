var form = document.forms.contactForm;

form.addEventListener ("submit", reply, false);

function reply() {
  alert("Submitted");
  return false;
}
	