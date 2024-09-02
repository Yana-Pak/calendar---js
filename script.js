
const yaer = +prompt('Введите год:');
let month = prompt('Введите месяц:');

if (month == "январь") {
  month = 1;
} else if (month == "февраль") {
  month = 2;
} else if (month == "март") {
  month = 3;
} else if (month == "апрель") {
  month = 4;
} else if (month == "май") {
  month = 5;
} else if (month == "июнь") {
  month = 6;
} else if (month == "июль") {
  month = 7;
} else if (month == "август") {
  month = 8;
} else if (month == "сентябрь") {
  month = 9;
} else if (month == "октябрь") {
  month = 10;
} else if (month == "ноябрь") {
  month = 11;
} else if (month == "декабрь") {
  month = 12;
}


function createCalendar(elem, year, month) {
  elem = document.querySelector(elem)

  let mon = month - 1;
  let d = new Date(year, mon);

  let table = `
  <table>
    <caption> ${month}. ${year}</caption>
    <tr>
      <th> пн  </th>
      <th> вт </th>
      <th> ср </th>
      <th> чт </th>
      <th> пт </th>
      <th> сб </th>
      <th> вс </th>
    </tr>
    <tr>
  `;
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';
    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>'
    }
    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>'
    }
  }

  table += '</tr></table>';
  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}


// createCalendar('body', 2024, 9);
createCalendar('body', yaer, month);

// немного поработала с классами и стилями через js

document.body.style.cssText = `
    width: 100vw;
    height: 100vh;
    padding: 25px;
`

const tableStyle = document.querySelector('table');
tableStyle.setAttribute("class", "table");
document.querySelector('.table').style.borderRadius = '15px';


document.querySelector('caption').style.fontSize = '20px';
document.querySelector('caption').style.fontWeight = '700';
