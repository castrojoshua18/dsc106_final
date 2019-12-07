function switchToPercent() {
    var options = this.options;
    Highcharts.each(this.series, function(series) {
        var data = [];
        Highcharts.each(series.data, function(point, index) {
            data.push(point.y / options.yAxis[index + 1].max);
        });
        series.update({
            data: data
        });
    });
}

function percentFormatter() {
    var series = this.series,
        options = series.chart.options;
    return '<span style="color:' + this.color + '">' + series.name + ': <b>' + (this.y * options.yAxis[this.index + 1].max) + '</b><br/>';
}

Highcharts.chart('basicStats', {

    chart: {
        polar: true,
        type: 'area',
        events: {
            load: switchToPercent
        },
        backgroundColor: 'transparent'
    },

    accessibility: {
        description: 'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.'
    },

    title: {
        text: 'Giannis Is Well-Rouned in Traditional Metrics',
        align: "center",
    },
    subtitle: {
        text: "Giannis Vs. Harden - Basic Stats"
    },
    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Rebounds', 'Assists', 'Steals', 'Blocks',
            'Points'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: [{
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 15,
        angle: 0,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 10,
        angle: 72,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 3,
        angle: 144,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 4,
        angle: 216,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 40,
        angle: 288,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }],

    tooltip: {
        shared: true,
        pointFormatter: percentFormatter,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y} per game</b><br/>'
    },

    legend: {
        align: 'center',
        verticalAlign: 'bottom'
    },
    plotOptions: {
        series: {
            pointPlacement: "on",
        },
    },
    series: [{
        name: 'James Harden',
        color: "#808080",
        data: [6.6, 7.5, 2, .7, 36.1],
    }, {
        name: 'Giannis Antetokounmpo',
        color: "#00471B",
        
        data: [12.5, 5.9, 1.3, 1.5, 27.7],
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

}); 
Highcharts.chart('advStats', {

    chart: {
        polar: true,
        type: 'area',
        events: {
            load: switchToPercent
        },
        backgroundColor: 'transparent'
    },

    accessibility: {
        description: 'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.'
    },

    title: {
        text: 'Giannis Superior in Non-Traditional Metrics',
        align: 'center'
    },
    subtitle: {
        text: "Giannis Vs. Harden - Advanced Stats"
    },
    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['FG %', 'FT%', 'PIE', 'EFG', 'Net Rating',
            'RB %'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: [{
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 100,
        angle: 0,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 100,
        angle: 60,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 100,
        angle: 120,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 100,
        angle: 180,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 15,
        angle: 240,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 100,
        angle: 300,
        tickAmount: 5,
        labels: {
            enabled: false
        }
    }],

    tooltip: {
        shared: true,
        pointFormatter: percentFormatter,
        // pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y} per game</b><br/>'
    },

    legend: {
        align: 'center',
        verticalAlign: 'bottom'
    },
    plotOptions: {
        series: {
            pointPlacement: "on",
        },
    },
    series: [{
        name: 'James Harden',
        color: "#808080",
        data: [44.2, 87.9, 20.1, 54.1, 6.3, 8.9],
    }, {
        name: 'Giannia Antetokounmpo',
        color: "#00471B",
        
        data: [47.8, 72.9, 21.8, 59.9, 12.5, 17.6],
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});