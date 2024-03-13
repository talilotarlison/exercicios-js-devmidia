// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes

const url = "https://youtu.be/zP8GL0RtGkA?si=LUr6YJeUeDrI9xD3"

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

const [_, params] = url.split("https://youtu.be/");

const [idVideo] = params.split("?si")

console.log(idVideo);