
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