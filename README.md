# Lab1
Для начала мы перешли на сайт nodejs.org, перешли в раздел "DOCS", выбрали параметр "GUIDS", добавили код в программу Sublime Text 3. После чего сохранили данный код (путь:C:\Users\student\Desktop) с параметром .js. Проверили работоспособность системы, прописав следующие строки в консоле:
npm -v - на выходе получили 5.3.0
node -v - на выходе получили v8.4.0
Для того, чтобы получить строку "Hello world" необходимо также в консоле прописать команду node с именем нужного нам файла:
node test.js. Выходными данными является название локального хоста.
Наконец переходим в браузере по ссылке http://localhost:3000/ и получаем надпись "Hello world".

# Lab 2
Node js поддерживает использование веб-фреймворка Express. 
1. Для его функционирования необходимо установить несколько файлов. Через командную строку выбираем путь с помощью команды cd,  где будут находится необходимые файлы для функционирования.
2. Затем прописываем npm init для создания файла package.json, где содержатся параметры для настройки express js. Он будет храниться в папке, путь к которой был указан ранее.
3. Прописываем в командной строке npm install express --save для установки express js и сохранения его в список зависимостей.
4. Пишем программу и сохраняем исходный файл в папке, созданной ранее, и запускаем программу через командную строку: node test2.js
5. Заходим в браузер и вводим localhost:3000\profile?name = "", чтобы проверить результат работы программы.

# Lab 3
Для решения текущей задачи потребовалось совершить следующие шаги:
1. Написать программу на node.js.
2. Создать форму html.
3. Осуществить взаимодействие между формой и программой.
4. Устанавливаем компонент Express и Body-Parser для осущесвления передачи данных между формой и программой. 
Запуск программы осуществляется следующим образом:
1. Прописываем в командной строке путь к данной папке.
2. Запускаем программу командой node lab3.js.
3. Заходим на http://localhost:3000/register.html. 
4. В появившейся форме вводим имя пользователя.
5. Нажимаем на кнопку "Отправить".
6. В качестве результата выполнения программы получаем приветсвие, адресованное данному пользователю. 

# Lab 4
Ajax
•	Для функционирования приложения необходимо установить пакет body-parser, прописав в командной строке «npm install body-parser»
•	Запустить программу, прописав в командной строке «node lab4.js»
•	Перейти по адресу localhost:3000/register2.html, и в появившейся форме ввести данные
•	Чтобы увидеть результаты работы программы, необходимо зажать сочетание клавиш Ctrl+Shift+J, тем самым открыв окно консоли браузера, где результатом будет ответ от сервера

# Lab 5

•	Для  функционирования приложения необходимо установить пакет body-parser, прописав в командной строке «npm install body-parser»
•	Запустить программу, прописав в командной строке «node lab5.js»
•	Перейти по адресу localhost:3000/register3.html, и в появившейся форме ввести данные
•	В качестве результата выполнения программы код, содержащий символы " " и "переноса строки", будет заменен на код, содержащий вместо этих элементов символ "__"
