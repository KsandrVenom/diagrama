var options = {
    chart: {
      type: 'bar',
      stacked: true
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125],
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998, 1999]
    },
    
    plotOptions: {
        bar: {
            horizontal: false,
            s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
            e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
            borderRadius: 0,
            columnWidth: '70%',
            barHeight: '70%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            colors: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                backgroundBarColors: [],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            },
            dataLabels: {
                position: 'top',
                maxItems: 100,
                hideOverflowingLabels: true,
                orientation: 'horizontal'
            }
        }
    }
    
}

options.xaxis.categories = arrayCategories; // заменяем категории на нужные нам
options.series = series(arrayNameSeries); // заменяем данные серий


var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

