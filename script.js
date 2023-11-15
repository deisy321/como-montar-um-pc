document.addEventListener("DOMContentLoaded", function () {
    const mostrarTextoBtn = document.getElementById("mostrarTexto");
    const mudarCorBtn = document.getElementById("mudarCor");
    const conteudo = document.getElementById("conteudo");
  
    mostrarTextoBtn.addEventListener("click", function () {
      if (conteudo.classList.contains("oculto")) {
        conteudo.style.display = "block";
        conteudo.classList.remove("oculto");
      } else {
        conteudo.style.display = "none";
        conteudo.classList.add("oculto");
      }
    });
  
    mudarCorBtn.addEventListener("click", function () {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor; 
    });
  
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  
  
  
  