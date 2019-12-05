'use strict';

const JSONFileName = 'https://raw.githubusercontent.com/castrojoshua18/dsc106_final/master/assets/hou_mil_wins.json?token=AKL7YHB37OMUCTYMNAC7EYS56BEAY';

var fullData;

Highcharts.ajax({
    url: JSONFileName,
    dataType: 'text',
    success: function (activity) {
        
        activity = JSON.parse(activity);
        fullData = activity;

        console.log(activity)

    }
})