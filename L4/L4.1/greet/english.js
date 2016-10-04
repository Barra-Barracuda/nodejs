/**
 * Created by kana on 2016/10/3.
 */
var greetings = require('./greetings.json');
var greet = function(){
    console.log(greetings.en);
};

module.exports = greet;