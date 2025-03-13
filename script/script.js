// Seleciona o botão de rolar para cima
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Função para mostrar ou esconder o botão com base na rolagem
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "flex";  // Mostrar o botão quando rolar para baixo
  } else {
    scrollTopBtn.style.display = "none";  // Esconder o botão quando estiver no topo
  }
};

// Função para rolar até o topo suavemente
function smoothScrollToTop() {
  const startPosition = window.scrollY || document.documentElement.scrollTop;
  const duration = 400; // Duração da rolagem suave em milissegundos
  const startTime = performance.now();

  function scroll() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startPosition * (1 - progress)); // Calcula a nova posição para rolar

    if (progress < 1) {
      requestAnimationFrame(scroll); // Continua a rolar até o topo
    }
  }

  requestAnimationFrame(scroll); // Inicia a rolagem suave
}

// Função para rolar até o topo quando o botão for clicado
scrollTopBtn.onclick = function () {
  smoothScrollToTop(); // Chama a função de rolagem suave
};


