// Lightweight interactions: form capture to console + simple UX
document.addEventListener('DOMContentLoaded', function(){
  var submitForm = document.getElementById('submitForm');
  if(submitForm){
    submitForm.addEventListener('submit', function(e){
      e.preventDefault();
      var data = {
        name: submitForm.name.value,
        age: submitForm.age.value,
        phone: submitForm.phone.value,
        video: submitForm.video.value
      };
      console.log('Player submission (demo):', data);
      alert('Thanks! Your submission was received (demo). We will follow up via WhatsApp.');
      submitForm.reset();
    });
  }
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks — message sent (demo). We will contact you shortly.');
      contactForm.reset();
    });
  }
});
