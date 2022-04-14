# educational_institutions

Сверстал главную страницу карточки учебного заведения до блока “Контакты”.
Использовал jQuery плагин Fancybox для галереи.
Адаптивная и кроссбраузерная верстка, ПК и моб. версия.
Все новые css стили вынесены в отдельный новый файл и потом gulp’ом объединил с существующим файлом. Тем самым на сайте подключен только 1 основной css файл. Аналогично с js файлом.

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/)
* установите глобально:
    * [Yarn](https://yarnpkg.com/getting-started): ```npm i -g yarn```
    * [Gulp](https://gulpjs.com/): ```npm i -g gulp```
    * [Bem Tools](https://www.npmjs.com/package/bem-tools-core): ```npm i -g bem-tools-core```
* скачайте сборку
* перейдите в скачанную папку со сборкой: ```cd educational_nstitution```
* введите ```yarn set version berry```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)
