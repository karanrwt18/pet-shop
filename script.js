function toggleMenu(){document.getElementById('navLinks').classList.toggle('show')}
document.addEventListener('DOMContentLoaded',()=>{
 const booking=document.getElementById('bookingForm');
 if(booking) booking.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! Your booking request has been submitted.');booking.reset()});
 const contact=document.getElementById('contactForm');
 if(contact) contact.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! Your message has been sent.');contact.reset()});
 const hero=document.querySelector('.hero');
 if(hero){
  const slides=[
   "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1800&q=90",
   "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1800&q=90",
   "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1800&q=90"
  ];
  let i=0;
  const change=()=>{i=(i+1)%slides.length;hero.style.backgroundImage=`linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.28)),url('${slides[i]}')`};
  document.querySelector('.slider.right')?.addEventListener('click',change);
  document.querySelector('.slider.left')?.addEventListener('click',()=>{i=(i-1+slides.length)%slides.length;hero.style.backgroundImage=`linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.28)),url('${slides[i]}')`});
  setInterval(change,6000);
 }
});