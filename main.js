'use strict';

const JSONFileName = 'https://raw.githubusercontent.com/castrojoshua18/dsc106_final/master/assets/season_results.json?token=AKL7YHE7G6MR3Y4WYXTTNG256HOG4'

var fullData;

Highcharts.ajax({
    url: JSONFileName,
    dataType: 'text',
    success: function (activity) {
        
        activity = JSON.parse(activity);
        fullData = activity;

        console.log(activity)

        //attach a div to the location of the energy chart in the html file
        var lineChartDiv = document.createElement('div');
        lineChartDiv.className = 'lineChart';
        document.getElementById('lineChart').appendChild(lineChartDiv);

        Highcharts.chart(lineChartDiv, {
            chart:{
                type: 'line',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'catchy name',
                align: 'left',
                style: {
                    fontSize: '15px'
                }
            },
            subtitle: {
                text: 'Fig. 2?',
                align: 'left'
            },
            legend: {
                enabled: false
            },

            plotOptions: {

            },
            
            xAxis: {
                type: 'datetime',
                tickInterval: 24 * 3600 * 1000,
                dateTimeLabelFormats: {
                    day: '%a \n %d %b'
                },
            },

            yAxis: {
                title: {
                    enabled: false
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    },
                    align: 'left',
                    reserveSpace: false,
                    y: -3,
                    x: 5,
                },
            },

            line: {
                lineWidth: "1"
            },

            tooltip: {
                crosshairs: [{
                    width: 2,
                    color: 'red',
                    zIndex: 3
                    }],
                borderColor: "black",
                shape:'rect',
                snap:50,
                enabled: true,
                shared: true
              },

            credits: {
                enabled: false
            },
        
            series: [
            {
                name: "Milwaukee Wins",
                pointStart: Date.UTC(2019,9,17,0,0,0,0) ,
                    pointInterval: 86400000,
                step: 'left',
                data: activity['data'][0],
                color: 'Green'
            },
            {
                name: "Houston Wins",
                pointStart: Date.UTC(2019,9,17,0,0,0,0) ,
                    pointInterval: 86400000,
                step: 'left',
                data: activity['data'][1],
                color: 'Grey'
            }
            ],

        })

    }
})