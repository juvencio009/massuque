
// Inicializa o EmailJS com sua Public Key
(function() {
  emailjs.init("A3BCR4UkSMijQwp65"); 
})();

// Manipula o envio do formulário
document.getElementById("contact-form").addEventListener("submit",  function(e) {
  e.preventDefault();

  const statusMessage = document.getElementById("status-message");
  statusMessage.textContent = "Enviando...";

  // Envia o formulário usando EmailJS
  emailjs.send("service_dbp5tle", "template_4u0ska6", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    statusMessage.textContent = "Mensagem enviada com sucesso! ✅";
    statusMessage.style.color = "#4caf50";
  })
  .catch((error) => {
    console.error("Erro ao enviar:", error);
    statusMessage.textContent = "Erro ao enviar mensagem ❌. Tente novamente.";
    statusMessage.style.color = "#f44336";
  });
});


//toggle - menu
const menu = document.querySelector(".span");

menu.addEventListener("click",()=>{
    const k = document.querySelector('.bi-list')
    const l = document.querySelector('.bi-x-lg')
    const nav = document.getElementById("nav-links")

    k.classList.toggle("ativar")
    l.classList.toggle("ativar")
    nav.classList.toggle("ativar")
})

const animate = document.querySelectorAll(".animate-fade");
const animateUp = document.querySelectorAll(".animate-up");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("ativar");
        }else{
            entry.target.classList.remove('ativar');
        }
    });
});

animate.forEach(el =>{
    observer.observe(el);
})
animateUp.forEach(el =>{
    observer.observe(el);
})



