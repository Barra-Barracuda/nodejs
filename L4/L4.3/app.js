/**
 * Created by kana on 2016/10/3.
 */
var util = require('util');


var name = 'Tony';
var greetings = util.format('Hello, %s',name);
util.log(greetings);