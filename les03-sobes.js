'use strict';

// 1. Что выведет alert(typeof NaN); ?

думал что NAN, оказалось Number :)

// 2. Что выведет alert(NaN === NaN); ?

видимо undefined, это как бесконечность сравнивать с бесконечностью, они не эквивалентны

// 3. 0.1 + 0.2 == 0.3 ?

не будет скорее всего, 0.1 во всех языках ломает вещественные вычисления

// 4. Какой тип будет иметь переменная a, если она создается при помощи следующего кода:
//
//   var a = "a,b".split(',');

в а будет array ?

// 5. Сделать так, чтобы при нажатии на элемент <а> алертом выводилось «Hello world!».

  document.querySelectorAll("a").forEach(item => alert('Hello'));

// 6. Найти все элементы div с классом one, а также все элементы p с классом two. Затем добавить им всем класс three
//    и визуально плавно спустить вниз.

[...document.querySelectorAll("div.one"), document.querySelectorAll("p.two")].forEach(item => item.classList.Add("three"));

но я не совсем понимаю что значит спустить вниз? давить класс с анимацией?

// 7. Выбрать видимый div с именем red, который содержит тег span.

как это сделать на чистом js ? я не знаю :(  может так:
  document.querySelector("div[name='red']>span").closest('div');

// 8. Привести пример замыкания.

let calls = (function() {
  let count = 0;
  return function() {
    return ++count;
  };
})();
console.log(calls());
console.log(calls());

// 9. Написать функцию, которая уменьшает или увеличивает указанное время на заданное количество минут, например:
// changeTime('10:00', 1) //return '10:01'
// changeTime('10:00', -1) //return '09:59'
// changeTime('23:59', 1) //return '00:00'
// changeTime('00:00', -1) //return '23:59'

function changeTime(clock, minutesDelta) {
  let time = clock.split(":");
  let newTime = new Date(2000, 1, 1, +time[0], +time[1] + minutesDelta);
  return newTime.getHours() + ":" + newTime.getMinutes();
}

console.log(changeTime("10:10", -100));

// 10. Написать функцию, возвращающую градус, на который указывают часовая и минутная стрелки в зависимости от времени, например:
// clock_degree("00:00") returns : "360:360"
// clock_degree("01:01") returns : "30:6"
// clock_degree("00:01") returns : "360:6"
// clock_degree("01:00") returns : "30:360"
// clock_degree("01:30") returns : "30:180"
// clock_degree("24:00") returns : "Check your time !"
// clock_degree("13:60") returns : "Check your time !"
// clock_degree("20:34") returns : "240:204"

function timeToGrad(clock) {
  let time = clock.split(":");
  let hour = +time[0], min = +time[1];
  if (hour < 0 || hour > 23 || min < 0 || min > 59) {
    return "Check your time!";
  }
  let hourGrad = Math.floor( hour * 360 / 12) % 360;
  let minGrad = Math.floor( min * 360 / 60) % 360;
  return `${hourGrad == 0 ? 360: hourGrad}:${minGrad == 0 ? 360: minGrad}`;
}

alert(timeToGrad("00:00"));
alert(timeToGrad("01:01"));
alert(timeToGrad("00:01"));
alert(timeToGrad("01:00"));
alert(timeToGrad("01:30"));
alert(timeToGrad("24:00"));
alert(timeToGrad("13:60"));
alert(timeToGrad("20:34"));

// 11. Написать простую игру «Угадай число». Программа загадывает случайное число от 0 до 100. Игрок должен вводить предположения и получать ответы «Больше», «Меньше» или «Число угадано».

let num = Math.ceil(Math.random() * 100);
let answer = -1;
do {
  answer = +prompt('Введите число');
  if (answer < num) {
    alert('Больше');
  } else if (answer > num) {
    alert('Меньше');
  } else {
    alert('Вы угадали!');
    break;
  }
}while(answer > 0);
