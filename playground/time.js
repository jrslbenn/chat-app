const moment = require("moment");
//
// new Date().getTime();
//
// var date = new Date();
//
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment(someTimestamp);
console.log(date.format("h:mm a"));
