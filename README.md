# Lab1
Для начала мы перешли на сайт nodejs.org, перешли в раздел "DOCS", выбрали параметр "GUIDS", скопировали нижеприведенный код в программу Sublime Text 3:
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
После чего сохранили данный код (путь:C:\Users\student\Desktop) с параметром .js.
Проверили работоспособность системы, прописав следующие строки в консоле:
npm -v - на выходе получили 5.3.0
node -v - на выходе получили v8.4.0
Для того, чтобы получить строку "Hello world" необходимо также в консоле прописать команду node с именем нужного нам файла:
node test.js. Выходными данными является название локального хоста.
Наконец переходим в браузере по ссылке http://localhost:3000/ и получаем надпись "Hello world".
