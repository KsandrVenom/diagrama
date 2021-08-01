


function add(time, name, ...indicators) {
    let table = document.querySelector('tbody');


    // создаем категорию и добавляем её в таблицу, и в категории для отрисовки в библиотеке
    let th = document.createElement('th');
    let dataTdSeries = document.querySelectorAll('.series');
    th.classList.add('series');
    document.querySelector('tr').appendChild(th);
    th.textContent = name;
    th.setAttribute('data', dataTdSeries.length);
    arrayNameSeries.push(name);
        

    // добавляем время
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let tdTime = document.createElement('td');
    tdTime.classList.add('time');
    tdTime.textContent = time;
    tr.appendChild(tdTime);
    arrayCategories.push(time);

    // перезаписываем количество "сложенных ячеек"
    let numbersRowspan = document.querySelector('.numbers-rowspan');
    numbersRowspan.rowSpan++;

    // добавляем значения в таблицу
    indicators.forEach((el, index) => {
        let tdIndicator = document.createElement('td');
        tdIndicator.classList.add(`series-${index}`);
        tdIndicator.textContent = el;
        tr.appendChild(tdIndicator);
    })
    
}

add('2021-05-04T13:00:00', 'ООО Горные кланы', 12, 24, 16, 44, 35);







