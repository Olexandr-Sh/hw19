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
//     let c = spl[i];
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

// let clientInformation = [];
// function addInformation (ev) {
//   ev.preventDefault();
//   let input1 = document.getElementById('one');
//   let input2 = document.getElementById('two');
//   let input3 = document.getElementById('three');
//   let input4 = document.getElementById('four');
//   let input5 = document.getElementById('five');
//   clientInformation.push(info);
//   document.forms[0].reset();
//   let today = new Date();
//   let expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
//   function setCookie() {
//     document.cookie = input1 + '=' + escape(value) + '; path=/; expires=' + expiry.toGMTString();
//   }
//   console.log(setCookie)
// }
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('btn').addEventListener('click', addInformation);
// });

let input1 = document.getElementById('one');
let input2 = document.getElementById('two');
let input3 = document.getElementById('three');
let input4 = document.getElementById('four');
let input5 = document.getElementById('five');

function writeCookie() {
  let decodedCookie = decodeURIComponent(document.cookie);
  let spl = decodedCookie.split(';');
  // for (let i = 0; i < spl.length; i++) {
  //   let c = spl[i];
  //   while (c.charAt(0) == ' ') {
  //     c = c.substring(1);
  //   }
  // };
    if (input1 && input2 && input3 && input4 && input5 === ' ') {
      alert('Enter some value!');
      return;
    } else {
      function addInformation(ev) {
        let clientInformation = [];
        clientInformation.push(cookies);
      };
    };
  cookieValue1 = escape(input1.value);
  cookieValue2 = escape(input2.value) + ';';
  cookieValue3 = escape(input3.value) + ';';
  cookieValue4 = escape(input4.value) + ';';
  cookieValue5 = escape(input5.value) + ';';
  
  document.cookie = 'name=' + cookieValue1 + 'max-age=3600;';
  document.cookie = 'surname=' + cookieValue2 + 'max-age=3600;';
  document.cookie = 'age=' + cookieValue3 + 'max-age=3600;';
  document.cookie = 'country=' + cookieValue4 + 'max-age=3600;';
  document.cookie = 'city=' + cookieValue5 + 'max-age=3600;';
};
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', writeCookie);
  console.log('Setting Cookie: ' + document.cookie);
  // пробував також варіант вставити рядок 'max-age=3600;' відразу після document.cookie,
  // що знаходиться над даним коментарем. Але я не побачив значних змін.
});

let inp = document.querySelectorAll('.save'),
  vals = localStorage.getItem('vals') ? localStorage.getItem('vals').split`,` : '';
for (let i = 0; i < inp.length; i++) vals[i] ? inp[i].value = vals[i] : '';
window.addEventListener('beforeunload', () => localStorage.setItem('vals', [...inp].map(e => e.value)));

// Перше завданнz local storage

let textArea = document.getElementById('ta');
ta.value = localStorage.getItem('ta');
ta.oninput = () => {
  localStorage.setItem('ta', ta.value)
};

let storedItem = localStorage.getItem('storedItem');

function save() {
  let item = document.getElementById('ta').value;
  localStorage.setItem('storedItem', item);
  document.getElementById('savedText').innerHTML = item + ' SAVED';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn2').addEventListener('click', save())
});

function get() {
  localStorage.getItem('storedItem');
  document.getElementById('openedText').innerHTML = storedItem + ' OPENED';
}

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('btn').addEventListener('click', textArea);
// });
