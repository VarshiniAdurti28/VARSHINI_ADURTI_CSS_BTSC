start=document.querySelector('.start')
Stop=document.querySelector('.stop')
resume=document.querySelector('.resume')
ball_path=document.querySelector('#ball')

Stop.addEventListener('click', ()=>{
  ball_path.style.animationPlayState="paused";
})

resume.addEventListener('click', ()=>{
  ball_path.style.animationPlayState="running";
})

start.addEventListener('click', ()=>{
  ball_path.style.animationName="none";
  setTimeout(()=>{
    ball_path.style.animationName="move";}, 100);
  })