#!/usr/bin/env node

var rest = require('restler');

var loghtml = function(){
    var responseprinter = function(result, response){
	console.error(result);
    };
    return responseprinter;
}

var getData = function(myurl){
    rest.get(myurl).on('complete', loghtml);
}

if(require.main ==module){
    var myurl = 'http://serene-basin-9989.herokuapp.com/';//process.argv;
    getData(myurl);
}
