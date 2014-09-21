var serialport = require('serialport');
var model      = require('../models/modelTemp');

var portName = "/dev/cu.usbmodem1451";
var sp = new serialport.SerialPort(portName, {
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    parser: serialport.parsers.readline("\n")   // ※修正：パースの単位を改行で行う
});



// data from Serial port
sp.on('data', function(input) {

    var buffer = new Buffer(input, 'utf8');

    var jsonData;
    try {
        jsonData = JSON.parse(buffer);
        console.log("temp: " + jsonData.temp);
        console.log("date: " + +new Date());

        model.create({temp: jsonData.temp, date: + new Date()}, function(err, doc){

        })


    } catch(e) {

        //console.log("error");
        // データ受信がおかしい場合無視する
        return;

    }


    // つながっているクライアント全員に送信
    //io.sockets.json.emit('message', { value: jsonData });
});

module.exports = sp;
