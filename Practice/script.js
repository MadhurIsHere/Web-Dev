document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".eye").forEach(eye => {
      const pupil = eye.querySelector(".pupil");
      const rect = eye.getBoundingClientRect();
  
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
  
      const dx = e.clientX - eyeX;
      const dy = e.clientY - eyeY;
  
      const angle = Math.atan2(dy, dx);
      const radius = 6;
  
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
  
      pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  

  const scene = document.getElementById("scene");
const character = document.getElementById("character");

scene.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  character.style.transform = `
    rotateY(${x}deg)
    rotateX(${-y}deg)
  `;
});
