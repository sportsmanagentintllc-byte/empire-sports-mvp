// MVP site interactivity (icons clickable, demo behavior)
document.addEventListener('DOMContentLoaded', function(){
  // demo athlete data
  const athletes = [
    {name:'Chukwuma', age:17, pos:'Forward', score:78},
    {name:'Aisha', age:16, pos:'Midfield', score:82},
    {name:'Tunde', age:18, pos:'Defender', score:74},
  ];
  const athleteList = document.getElementById('athleteList');
  athletes.forEach(a=>{
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = '<h4>'+a.name+' <span class="small">('+a.pos+')</span></h4><div>Age: '+a.age+'</div><div>Score: '+a.score+'</div><div style="margin-top:10px"><button class="btn btn-outline reportBtn">Request Report</button></div>';
    athleteList.appendChild(card);
  });

  // courses
  const courses = [
    {title:'How to get scouted', len:'12 min'},
    {title:'Video submission best practices', len:'8 min'},
    {title:'Avoiding agent scams', len:'10 min'},
  ];
  const coursesEl = document.getElementById('courses');
  courses.forEach(c=>{
    const el = document.createElement('div');
    el.className='card';
    el.innerHTML = '<h4>'+c.title+'</h4><div class="small">'+c.len+'</div><div style="margin-top:10px"><button class="btn btn-primary enroll">Preview</button></div>';
    coursesEl.appendChild(el);
  });

  // icon actions
  document.querySelectorAll('.icon-btn').forEach(btn=>{
    btn.addEventListener('click', function(){
      const action = this.dataset.action;
      if(action==='upload') showModal('Upload tips','Best to use 60s clips, clear audio, good angle.');
      if(action==='camera') showModal('Recording tips','Use a steady phone, natural light, show closeups.');
      if(action==='help') showModal('Submission help','Include your position and age in the description.');
    });
  });

  // report request demo
  document.addEventListener('click', function(e){
    if(e.target && e.target.matches('.reportBtn')){
      showModal('Report Requested','We will send a detailed report to the WhatsApp number provided (demo).');
    }
    if(e.target && e.target.matches('.enroll')){
      showModal('Course Preview','This is a course preview (demo).');
    }
  });

  // form submit - save to localStorage demo
  const submitForm = document.getElementById('submitForm');
  if(submitForm){
    submitForm.addEventListener('submit', function(e){
      e.preventDefault();
      const data = Object.fromEntries(new FormData(submitForm).entries());
      const subs = JSON.parse(localStorage.getItem('subs')||'[]');
      subs.push(Object.assign(data,{ts:Date.now()}));
      localStorage.setItem('subs', JSON.stringify(subs));
      showModal('Submitted','Thanks! Submission saved (demo). We will contact you on WhatsApp.');
      submitForm.reset();
    });
  }

  // wallet request
  const fundBtn = document.getElementById('fundBtn');
  if(fundBtn){
    fundBtn.addEventListener('click', function(){
      showModal('Scholarship Request','A demo request was created. In production, this routes to the scholarship team.');
    });
  }

  // social icons clickable
  document.querySelectorAll('.icon-link').forEach(a=>{
    a.addEventListener('click', function(){
      const url = this.dataset.url;
      window.open(url || '#','_blank');
    });
  });

  // modal helpers
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  function showModal(title, html){
    modalBody.innerHTML = '<h3>'+title+'</h3><p>'+html+'</p>';
    modal.setAttribute('aria-hidden','false');
  }
  modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
});
