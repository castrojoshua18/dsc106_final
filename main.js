'use strict';

const JSONFileName = 'https://raw.githubusercontent.com/castrojoshua18/dsc106_final/master/'
+'assets/season_results.json?token=AKL7YHDEZVPD3VGWHZIIAOK56PX2Y';

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
                    text: 'Date'
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
                visible: true,
                tickInterval: 7*24 * 3600 * 1000,
                dateTimeLabelFormats: {
                    day: '%a \n %d %b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                gridLineWidth: 1,
                title: null,
                labels: {
                    enabled: false
                }
            },
            dataLabels: {
                distance: 25,
                alternate: false
            },
            legend: {
                enabled: false
            },
            title: {
                text: "timeline"
            },
            subtitle: {
                text: "timeline"
            },
            tooltip: {
                positioner : function () {
                    return {x : this.chart.chartWidth - this.label.width-20 , y : 10}
                },
                borderColor: "black",
                shape:'rect',
                snap:50,
                enabled: true,
                shared: true,
                style: {
                    width: 250
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                pointStart: Date.UTC(2018, 9, 17),
                dataLabels: {
                    allowOverlap: false,
                    format: '{point.label}'
                },
                
                 data: [{
                    x: Date.UTC(2018, 9, 17),
                    name: 'Start',
                    label: 'Start',
                    description: "Start of 2018 - 2019 NBA season"
                },
                {
                        x: Date.UTC(2018, 9, 28),
                        name: 'Team Accomplishment',
                        label: 'Team',
                        description: "Seven game win streak to open the season. First 7-0 start since 1971-1972.",
                    },
                    {
                        x: Date.UTC(2018,9,30),
                        name: 'Personal Accomplishment',
                        label: 'Personal',
                        description: "Earned Eastern Conference Player of the Week for performance in games 2-5 and" +
                        " Eastern Conference Player of the Month for performance in October",
                        dataLabels: {
                            distance: 15,
                            alternate: false
                        }
                    },
                    {
                        x: Date.UTC(2018, 10, 23),
                        name: 'Personal Accomplishment',
                        label: 'Personal',
                        description: "Earned Eastern Conference Player of the Week for performance in games 14-17"
                    },
                    {
                        x: Date.UTC(2018, 10, 28),
                        name: 'Personal Accomplishment',
                        label: 'Personal',
                        description: "Earned Eastern Conference Player of the Month for performance in November"
                    },
                    {
                        x: Date.UTC(2018, 11, 14),
                        name: 'Personal Accomplishment',
                        label: 'Personal',
                        description: "Matched career high 44 pts"
                    },
                    {
                        x: Date.UTC(2018, 11, 15),
                        name: 'Personal Accomplishment',
                        label: 'Personal',
                        description: "Earned Eurostar European Player of the Year for 2018 NBA performance"
                    },
                    {
                        x: Date.UTC(2018, 11, 31),
                        name: 'Personal Accomplishment',
                        label: 'Personal',
                        description: "Earned Eastern Conference Player of the Week for performance in games 28-31 and"+
                        " and earned Eastern Conference Player of the Month for performance in December"
                    },
                    {
                        x: Date.UTC(2019, 0, 9),
                        name:'Personal Accomplishment',
                        label: "Personal",
                        description: "Recorded season-high 21 rebounds"
                    },
                    {
                        x: Date.UTC(2019, 1, 13),
                        name: 'Personal Accomplishment',
                        label: 'Personal',
                        description: "Tied Shaquille O'Neal for record of most games with at least 25 points, 15 rebounds, 5 assists"+
                        "within a season at 13 games"
                    },
                    {
                        x: Date.UTC(2019,1,28),
                        name: "Personal Accomplishment",
                        label: "Personal",
                        description: "Earned Eastern Conference Player of the Month for performance in February"
                    },
                    {
                        x: Date.UTC(2019,2,1),
                        name: "Team Accomplishment",
                        label: "Team",
                        description: "First team to secure playoff berth in 2018-2019 season"
                    },
                    {
                        x: Date.UTC(2019,2,17),
                        name: "Personal Accomplishment",
                        label: "Personal",
                        description: "Scored career-high 52 points"
                    },
                    {
                        x: Date.UTC(2019,3,4),
                        name: "Team Accomplishment",
                        label: "Team",
                        description: "Secured the number 1 seed in the Eastern Conference. First time since 2000-2001 season"
                    },
                    {
                        x: Date.UTC(2019,3,10),
                        name: "End of Season",
                        label: "End",
                        description: "Finished season with 60-22 record. First time since 1980-1981 season"
                    }
                ]
            }]
        })

    }
})