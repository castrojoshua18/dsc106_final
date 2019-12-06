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
                text: 'Games Won',
                align: 'left'
            },
            legend: {
                enabled: false
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
            
            xAxis: {
                tickInterval:1,
                title: {
                    text: 'Number of Games Elapsed'
                }
            },

            yAxis: {
                title: {
                    enabled: false,
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
                positioner : function () {
                    return {x : this.chart.chartWidth - this.label.width-20 , y : 10}
                },
                formatter: function () {
                    return this.points.reduce(function (s, point) {
                        return s + '<br/><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ': ' +
                            point.y;
                    }, '<b>Game ' + this.x + ': </b>');
                },
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
                step: 'left',
                data: activity['data'][0],
                color: 'Green'
            },
            {
                name: "Houston Wins",
                step: 'left',
                data: activity['data'][1],
                color: 'Grey'
            }
            ],

        })

    }
})