
/*var event = require('events');
var eventEmitter = new event.EventEmitter();
eventEmitter.on('click',function(){
    console.log('Something is clicked');
});
eventEmitter.emit('click');*/

// một cách khác để 1 Object nhận sự kiện từ EventsEmitter đó là dùng inherist trong modul (util)


var event = require('events');
var util = require('util');

var Students = function(name){this.name = name};

util.inherits(Students,event.EventEmitter); // Đối tượng Students có thể bắt sự kiện

var Max = new Students('Max');
Max.on('Scored',function(marks){
    console.log(Max.name + " scored " + marks + ' marks');
});

Max.emit('Scored',95);
