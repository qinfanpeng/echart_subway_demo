const dataJson = require('./dataFromBaiduMap.json')
const _ = require('lodash')
var fs = require('fs');
var util = require('util')

const LINE_COLOR = {
    1: '#EE1822',
    2: '#85C73F',
    3: '#FDD303',
    4: '#4E2C8D',
    5: '#8F57A2',
    6: '#D7156B',
    7: '#F26F1F',
    8: '#009DD7',
    9: '#67CCF6',
    10: '#B8A8CF',
    11: '#7C1F31',
    12: '#54ae11',
    13: '#E77DAD',
    16: '#78d6cd',
    17: '#bc796f'
}

const extractLineNumber = lnStr => parseInt(lnStr.match(/[0-9]+/)[0])
const linesData = dataJson.subways.l
var links = [];
let stations = _.flatMap(linesData, lineData => {
    const lineNumber = extractLineNumber(lineData.l_xmlattr.lb)
    const validstationDatas = _.filter(lineData.p, stationData => {
        return !_.isEmpty(stationData.p_xmlattr.sid)
    })
    const stationsInLine = _.map(validstationDatas, stationData => {
        return {
            name: stationData.p_xmlattr.sid,
            x: stationData.p_xmlattr.x,
            y: stationData.p_xmlattr.y,
            itemStyle: {
                borderColor: LINE_COLOR[lineNumber],
                color: 'white'
            },
            category: lineNumber + '号线'
        }
    })

    for (var index = 0; index < stationsInLine.length - 1; index++) {
        links.push({
            source: stationsInLine[index].name,
            target: stationsInLine[index + 1].name,
            lineStyle: {
                color: LINE_COLOR[lineNumber]
            }
        })
    }

    return stationsInLine;
})

stations = _.uniqBy(stations, 'name')
fs.writeFile('stations.js', util.inspect(stations, {maxArrayLength: null}), function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to statons.js");
});

fs.writeFile('stationLinks.js', util.inspect(links, {maxArrayLength: null}), function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to stationLinks.js");
});