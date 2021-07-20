/*
 * @Author: your name
 * @Date: 2021-07-20 20:23:53
 * @LastEditTime: 2021-07-20 22:39:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue.js\Vue入门\06事件处理\eventprocess.js
 */
/**
 * 事件处理 v-on： @ 
 *         方法卸载vue实例中的methods中
 * 时间修饰符   .stop   阻止事件冒泡
 *             .once   只执行一次
 *             .prevent阻止默认事件
 *             .self   只当在event.target是当前元素自身时触发处理函数
 *             .capture事件捕获后直接执行
 *             .passive默认事件直接执行\
 * 键盘事件:    .enter  回车再操作 也可以使用keyCode值
 *             .delete 退格和删除
 *             .esc    
 *             .space
 *             .tab
 *             .up  .right .down  .left
 */
Vue.config.productionTip = false;
const vm = new Vue({
    el: '#root',
    data: {
        event1: '点击显示',
        jump: '跳转'
    },
    methods: {
        showBox(btn, ev) {
            console.log(btn);
            console.log(ev.clientY);
            console.log(ev);
        },
        showInfo(ev) {
            console.log(ev.target.value);
        },
    },
})