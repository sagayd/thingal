/* main.js - navigation helpers and modal for siblings */
document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle (simple)
  const mobileToggle = document.getElementById('mobile-toggle');
  const topLinks = document.querySelector('.top-links');
  if(mobileToggle && topLinks){
    mobileToggle.addEventListener('click', ()=> topLinks.classList.toggle('open'));
  }

  // sibling modal handler
  document.querySelectorAll('.sibling-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      const name = card.dataset.name || 'Sibling'
      const msg = card.dataset.msg || 'Warm regards from our family'
      const modal = document.getElementById('sibling-modal')
      document.getElementById('modal-title').innerText = name
      document.getElementById('modal-body').innerText = msg
      modal.classList.add('show')
      modal.setAttribute('aria-hidden','false')
    })
  })

  // close modal
  const closeBtn = document.getElementById('modal-close')
  if(closeBtn){
    closeBtn.addEventListener('click', ()=>{
      document.getElementById('sibling-modal').classList.remove('show')
      document.getElementById('sibling-modal').setAttribute('aria-hidden','true')
    })
  }
  const modalOverlay = document.getElementById('sibling-modal')
  if(modalOverlay){
    modalOverlay.addEventListener('click', (e)=>{
      if(e.target.id === 'sibling-modal') {
        modalOverlay.classList.remove('show')
        modalOverlay.setAttribute('aria-hidden','true')
      }
    })
  }
})
