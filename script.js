let title = "JavaScriptExpress";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 12500;
let rollback = 25;
let fullPrice = 35000;
let adaptive = true;

console.log(`Значение переменной title: ${title}`);
console.log(`Тип данных переменной title: ${typeof title}`);
console.log(`Значение переменной fullPrice: ${fullPrice}`);
console.log(`Тип данных переменной fullPrice: ${typeof fullPrice}`);
console.log(`Значение переменной adaptive: ${adaptive}`);
console.log(`Тип данных переменной adaptive: ${typeof adaptive}`);
console.log('*******')
console.log(`Длина строки переменной screens: ${screens.length}`);
console.log('*******')
console.log('Cтоимость верстки экранов: ', screenPrice, ' рублей');
console.log('Cтоимость разработки сайта: ' + fullPrice + ' рублей');
console.log('*******')
console.log(screens.toLowerCase().split(', '))
console.log('*******')
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)) + '')
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`)