'use strict';

const JSONFileName = 'https://raw.githubusercontent.com/castrojoshua18/dsc106_final/master/assets/season_results.json?token=AKL7YHDEZVPD3VGWHZIIAOK56PX2Y';

var fullData;

Highcharts.ajax({
    url: JSONFileName,
    dataType: 'text',
    success: function (activity) {
        
        activity = JSON.parse(activity);
        fullData = activity;

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
                    },
                    states: {
                        inactive: {
                          opacity: 1
                        }
                    }
                }
            },
            
            xAxis: {
                type: 'datetime',
                tickInterval: 7*24 * 3600 * 1000,
                dateTimeLabelFormats: {
                    day: '%a \n %d %b'
                },
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
                    var dateEntry = Highcharts.dateFormat('%B %d, %Y', this.x)
                    return this.points.reduce(function (s, point) {
                        return s + '<br/><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ': ' +
                            point.y;
                    }, '<b> By ' +dateEntry + ': </b>');
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
                pointStart: activity['history'][0][0][0],
                step: 'left',
                data: activity['history'][0],
                color: 'Green'
            },
            {
                name: "Houston Wins",
                pointStart: activity['history'][1][0][0],
                step: 'left',
                data: activity['history'][1],
                color: 'Grey'
            }
            ],

        })

        //attach a div to the location of the energy chart in the html file
        var timelineChartDiv = document.createElement('div');
        timelineChartDiv.className = 'lineChart';
        document.getElementById('timelineChart').appendChild(timelineChartDiv);

        Highcharts.chart(timelineChartDiv, {
            chart: {
                type: 'timeline',
                backgroundColor: 'transparent'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            yAxis: {
                gridLineWidth: 1,
                title: null,
                labels: {
                    enabled: false
                }
            },
            legend: {
                enabled: false
            },
            title: {
                text: "Chadwick Boseman has almost equally lead as many movies as he has been a non-lead role."
            },
            subtitle: {
                text: "Fig. 1: A visualized transition of Boseman's role in featured movies (U.S. domestic)"
            },
            tooltip: {
                snap: 100
            },
            credits: {
                enabled: false
            },
            series: [{
                pointStart: Date.UTC(2008, 10, 22),
                dataLabels: {
                    allowOverlap: false,
                    format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                '{point.label}'
                },
                 data: [{
                        x: Date.UTC(2008, 10, 22),
                        name: 'The Express (2008)',
                        label: 'Support',
                        description: "Part: Floyd Little",
                    },
                    {
                        x: Date.UTC(2013, 3, 12),
                        name: '42 (2013)',
                        label: 'Lead',
                        description: "Part: Jackie Robinson",
                    },
                    {
                        x: Date.UTC(2014, 5, 22),
                        name: 'Draft Day (2014)',
                        label: 'Support',
                        description: "Part: Vontae Mack"
                    },
                    {
                        x: Date.UTC(2014, 7, 1),
                        name: 'Get on Up (2014)',
                        label: 'Lead',
                        description: "Part: James Brown",
                    },
                    {
                        x: Date.UTC(2016, 1, 26),
                        name: 'Gods of Egypt (2016)',
                        label: 'Support',
                        description: "Part: Thoth"
                    },
                    {
                        x: Date.UTC(2016, 4, 6),
                        name: 'Captain America: Civil War (2016)',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2017, 9, 13),
                        name: 'Marshall (2017)',
                        label: 'Lead',
                        description: "Part: Thurgood Marshall",
                    },
                    {
                        x: Date.UTC(2018, 1, 16),
                        name: 'Black Panther (2018)',
                        label: 'Lead',
                        description: "Part: T'Challa - Black Panther",

                    },
                    {
                        x: Date.UTC(2018, 3, 27),
                        name: 'Avengers: Infinity War (2018)',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2019, 3, 26),
                        name: 'Avengers: Endgame (2019)',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2019, 10, 22),
                        name: '21 Bridges (2019)',
                        label: 'Lead',
                        description: "Part: Andre Davis",
                    },
                ]
            }]
        })

    }
})