document.addEventListener('DOMContentLoaded', function(){

  // Modal helpers
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function showModal(title, html){
    modalBody.innerHTML = `<h3>${title}</h3><p>${html}</p>`;
    modal.setAttribute('aria-hidden','false');
  }

  if(modalClose){
    modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  }

  // Icon actions
  document.querySelectorAll('.icon-btn').forEach(btn=>{
    btn.addEventListener('click', function(){
      const action = this.dataset.action;
      if(action==='camera'){
        showModal(
          'Recording tips',
          'Use natural light, a steady phone, and keep clips under 60 seconds. Show match context if possible.'
        );
      }
      if(action==='help'){
        showModal(
          'Submission tips',
          'Include age, position, and match context. Submit a clear YouTube or Google Drive link. Parental consent is required for minors.'
        );
      }
    });
  });

  // How it works
  const howBtn = document.getElementById('howBtn');
  if(howBtn){
    howBtn.addEventListener('click', ()=>{
      showModal(
        'How this MVP works',
        '1) Players submit clips via the official Google Form.<br>' +
        '2) Reviews are currently manual (prototype stage).<br>' +
        '3) Verified profiles will be displayed only after approval — no fabricated data is shown.'
      );
    });
  }

  // Join waitlist
  const joinBtn = document.getElementById('joinBtn');
  if(joinBtn){
    joinBtn.addEventListener('click', ()=>{
      showModal(
        'Join the waitlist',
        'Send a short email to <strong>sportsmanagentintllc@gmail.com</strong> with your name and role (player / scout / coach).'
      );
    });
  }

  // Notify buttons (Coming Soon features)
  const notifyBtn = document.getElementById('notifyBtn');
  if(notifyBtn){
    notifyBtn.addEventListener('click', ()=>{
      showModal(
        'Notification request',
        'To be notified when verified profiles launch, email <strong>sportsmanagentintllc@gmail.com</strong> with the subject: <em>“Notify — Profiles”</em>.'
      );
    });
  }

  const academyNotifyBtn = document.getElementById('academyNotifyBtn');
  if(academyNotifyBtn){
    academyNotifyBtn.addEventListener('click', ()=>{
      showModal(
        'Academy (Coming Soon)',
        'The Academy is in design. To be notified when modules launch, email <strong>sportsmanagentintllc@gmail.com</strong> with the subject: <em>“Notify — Academy”</em>.'
      );
    });
  }

  // Scholarships (Coming Soon)
  const fundBtn = document.getElementById('fundBtn');
  if(fundBtn){
    fundBtn.addEventListener('click', ()=>{
      showModal(
        'Scholarships (Coming Soon)',
        'This feature is not active yet. We will open scholarship requests after MVP validation and after publishing clear criteria in the Innovation Lab notes.'
      );
    });
  }

  // Social icons clickable
  document.querySelectorAll('.icon-link').forEach(a=>{
    a.addEventListener('click', ()=> window.open(a.dataset.url,'_blank'));
  });

});

