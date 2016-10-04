/**
 * Created by kana on 2016/10/3.
 */
var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet',function(){
    console.log('Somewhere,someone said hello.');
});
emtr.on('greet',function(){
    console.log('A greeting occurred！');
});

console.log('Hello');
emtr.emit('greet');
