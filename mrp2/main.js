/**
 * Created by dpetrov on 04.04.17.
 */

const GLPATH = '/home/dpetrov/Nodejs/lib/node_modules';
var path = require('path');
var express = require('express');
var sapnwrfc = require(path.join(GLPATH, 'sapnwrfc'));
const PORT = 8085;

var conParams = {
    ashost: '',
    sysid: '',
    sysnr: '',
    user: '',
    passwd: '',
    client: '',
    lang: ''
};
var con = new sapnwrfc.Connection;


// MAIN SECTION

var server = express();
server.use(express.static(path.join(__dirname, 'public')));

// Main section with post and get methods

// Get all materials master data from SAP
server.post('/materials', function(req, res) {

    con.Open(conParams, function (err) {
        if (err) {
            console.log(err);
            return;
        }

        var selMatnrs = [
            {SIGN: 'I', OPTION: 'BT', MATNR_LOW: '000000000000070000', MATNR_HIGH: '000000000000079999'},
            {SIGN: 'I', OPTION: 'BT', MATNR_LOW: '000000000010000001', MATNR_HIGH: '000000000019999999'},
            {SIGN: 'I', OPTION: 'BT', MATNR_LOW: '000000000020000000', MATNR_HIGH: '000000000029999999'}
        ];

        // Table parameter
        var inputTable = {MATNRSELECTION: selMatnrs};
        var bapiMatList = con.Lookup('BAPI_MATERIAL_GETLIST');

        bapiMatList.Invoke(inputTable, function(err, result) {
            if (err) {
                console.log(err);
                return;
            }

            var answer = [];
            // Go through resulting table
            for (var i = 0; i < result.MATNRLIST.length; i++) {
                var row = {material: result.MATNRLIST[i].MATERIAL, description: result.MATNRLIST[i].MATL_DESC};
                answer.push(row);
            }

            var keys = ["material", "description"];
            var data = JSON.stringify(answer, keys);
            res.send(data);
            res.end();

        }); // BAPI invoke

    });  // SAP connection

}); // materials

// Start the Node server
console.log('Start Node Server on the port 8085');
server.listen(PORT);