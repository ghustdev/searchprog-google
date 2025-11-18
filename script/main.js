import { Application } from "@splinetool/runtime";

document.addEventListener("DOMContentLoaded", () => {
  // --- Carregar Animação Spline ---
  const canvas = document.getElementById("canvas3d");
  const app = new Application(canvas);
  // Use a URL do seu projeto Spline. Este é um exemplo.
  app.load("https://prod.spline.design/AVgI-yV32Jd22n1p/scene.splinecode");

  // --- Animações de Entrada com GSAP ---
  gsap.from(".title", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.from(".container-input", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.8,
  });

  gsap.from(".chat-container", {
    duration: 2,
    scale: 0.95,
    opacity: 0,
    ease: "elastic.out(1, 0.75)",
    delay: 1.1,
  });

  // --- Lógica do Chat ---
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-button");
  const chatMessages = document.getElementById("chat-messages");

  const sendMessage = () => {
    const messageText = chatInput.value.trim();
    if (messageText === "") return;

    // Cria e adiciona a mensagem do usuário
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = messageText;
    chatMessages.appendChild(userMessage);

    // Limpa o input e rola para a nova mensagem
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  sendButton.addEventListener("click", sendMessage);
  chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});

// Função de busca (placeholder)
document.getElementById("button").addEventListener("click", () => {
  const query = document.getElementById("input").value;
  console.log(`Buscando por: ${query}`);
  // Aqui você pode adicionar a lógica de busca real
});
