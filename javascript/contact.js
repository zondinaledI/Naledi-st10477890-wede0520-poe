    document.addEventListener('DOMContentLoaded', () => {

    const trigger = document.getElementById('mobileMenuTrigger');
    const menu = document.getElementById(navi.LinkdMenu');
     if (trigger) {trigger.adaEventListener('click', () => menu.classlList,toogle('mobile-open')); }

     const contacForm = document.getElementById('contactForm');
     if (contactForm) {
        contactForm.addEventListner('submit', function(event) {
            event.preventDefault();

            document.getElementById('emailerror').textContent = '';
            document.getElementById('phoneError').textContent = '';
            document.getElementById('messageerror').textContent = '';
            const status = document.getElementById('ajaxStatusMessage');
            status.textContent = '';

            let isValid = true;
            const email = document.getElementById('contactemail').value.trim();
            const phone = document.getElementById('contactphone').value.trim();
            const message = document.getElementById('contactmessage').value.trim();

            setTimeout(() = {
                status.style.color  "green";
                status.innerHTML ="<strong!</strong> form payload securely complied vai AJAX. No page refresh triggered.";
                contactform.reset();
            }, 1200)
      }
    ;
     
