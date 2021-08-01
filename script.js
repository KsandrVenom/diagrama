// создаем/ищем категории по времени

let categories = document.querySelectorAll('.time');
let arrayCategories = [];
for (let item of categories) {
    arrayCategories.push(item.textContent);
}

// создаем/ищем имена серий

let nameSeries = document.querySelectorAll('.series');
let arrayNameSeries = [];
for (let item of nameSeries) {
    arrayNameSeries.push(item.textContent);
}



// создаем объект для каждой серии
let series = function (arr) {
    let obj = arr.map((item, index) => {
        let dataTdSeries = document.querySelectorAll(`.series-${index}`);
        let seriesData = [];
        for (let elem of dataTdSeries) {
            seriesData.push(elem.textContent);
        }
        return {
            name: item,
            data: seriesData
        }
    })
    return obj;
}
