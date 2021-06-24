// function setCookie(name, value, options = {}) {
//   options = {
//     path: '/',
//   };
//   let updatedCookie = encodeURIComponent(name) + " " + encodeURIComponent(value);
//   document.cookie = updatedCookie;
// }
// let test = setCookie('name', 'Olexandr');
// console.log(document.cookie)
// document.cookie = test;

// ПЕРШИЙ ВАРІАНТ

document.cookie = 'name = Иван';
console.log(document.cookie);

document.cookie = 'name = Олександр';
console.log(document.cookie);

document.cookie = 'age = 26';
console.log(document.cookie);

// ДРУГИЙ ВАРІАНТ

// function getCookie(personName) {
//   let name = personName + '=';
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let spl = decodedCookie.split(';');
//   for (let i = 0; i < spl.length; i++) {
//     let с = spl[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return '';
// }
// $(document).ready(function () {
//   document.cookie = 'name=Вася';
//   console.log(getCookie('name'));
// });

//Виникло декілька питань.
//По-перше, я не зрозумів, що ми робимо ось цим записом
// let с = spl[i];
//По-друге, прописав як і в практичному завданні, але чомусь не спрацювало.

// ТРЕТЄ ЗАВДАННЯ

$(document).ready(function () {
	let one = getCookie("one"); if (one) $('#one').val(one);
	let two = getCookie("two"); if (two) $('#two').val(two);
  let three = getCookie("three"); if (three) $('#three').val(three);
  let four = getCookie("four"); if (four) $('#four').val(four);
  let five = getCookie("five"); if (five) $('#five').val(five);

  $(window).on('beforeunload', function () {
    $('input').each(function () {
      document.cookie = $(this).attr('id') + "=" + $(this).val();
    });
  });
});             