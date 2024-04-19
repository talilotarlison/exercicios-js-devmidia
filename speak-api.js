// Verifica se a síntese de voz está disponível no navegador
if ('speechSynthesis' in window) {
  // Cria um novo objeto de fala
  var msg = new SpeechSynthesisUtterance();
  
  // Define o texto que será lido em voz alta
  msg.text = "Olá, estou lendo este texto para você!";
  
  // Escolhe a voz e o idioma (opcional)
  msg.lang = 'pt-BR'; // Código do idioma para Português do Brasil
  
  // Define o volume, a taxa e o tom da fala (opcional)
  msg.volume = 1; // Volume máximo
  msg.rate = 1; // Velocidade normal
  msg.pitch = 1; // Tom normal
  
  // Faz a página falar o texto
  window.speechSynthesis.speak(msg);
} else {
  // Mensagem de erro caso a síntese de voz não esteja disponível
  console.log("Desculpe, seu navegador não suporta síntese de voz.");
}
