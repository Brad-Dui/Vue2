/*
 * @Author: your name
 * @Date: 2021-07-19 20:46:02
 * @LastEditTime: 2021-07-20 20:05:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue.js\Vue入门\05数据代理\dataAgent.js
 */
/**
 * 1.Object.defineProperty(obj,prop,descriptor)
 * 功能：给对象添加属性
 * descriptor：configurable 属性是否可修改 (delete)
 *             enumerable   是否可枚举  for/in Object.keys()->可枚举属性数组
 *             value        设置的属性值
 *             writable     属性值是否可以重写 (不能与get set同时使用  只能有一种改写形式)
 *             get          访问属性时调用  (提供了动态性)
 *             set          修改属性时调用
 * 2.数据代理：通过一个对象代理对另一个对象属性的操作(读/写)
 */
Vue.config.productionTip = false;
/**
 * Object.defineProperty()
 */
let number = 19;
let json = {
    name: 'ald',
    sex: 'man'
}
Object.defineProperty(json, 'age', {
    // value: number,
    enumerable: true,
    configurable: true,
    // writable: true,
    //修改number后 访问age会修改age
    get() { return number },
    set(newnum) { number = newnum },
})
console.log(json)
/**
 * 数据代理
 */
//通过obj2修改obj1的x值
//直接修改obj1的值 obj2中代理的值也会改变
let obj1 = { x: 100 };
let obj2 = { y: 200 };
Object.defineProperty(obj2, 'x', {
    get() {
        return obj1.x;
    },
    set(value) {//value可以是obj1.x也可以是obj2.x更改的值
        obj1.x = value;
    }
})
/**
 * Vue中的数据代理
 * 通过vm对象修改data的值
 * 用Object.defineProperty()给vm添加data中的值
 * 通过修改vm中的值可以同时修改data中的值 渲染到页面
 */
const vm = new Vue({
    el: '#root',
    data: {
        name: '小张',
        age: 18
    }
})