# echart_subway_demo

## Usage
- Download subway meta data from sites like [Baidu Subway API](http://lbsyun.baidu.com/jsdemo.htm#subway0_0) (just inspect its network request)
- Run `node dataParser.js` to generate `stations.json` and `stationLinks.json`
- Copy `stations.json` to `echartDemo.js`'s `stations` variable, and copy `stationLinks.json` to `echartDemo.js`'s `links` var
- Copy the content of `echartDemo.js` to someplace like [http://www.echartsjs.com/examples/editor.html?c=graph](http://www.echartsjs.com/examples/editor.html?c=graph)
- And enjoy.

## Preview 
- Visit [demo](http://gallery.echartsjs.com/preview.html?c=xjYUrow1CJ&v=1)
- Or open `demo.html` in your browser