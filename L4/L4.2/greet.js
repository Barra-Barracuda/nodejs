/**
 * Created by kana on 2016/10/3.
 */
exports.greet = function(){ //尽量用module.exports 因为exports是指向同一个object但是要加上属性才能mutate。
    console.log('hello');
};

