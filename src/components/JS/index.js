import Vue from 'vue'
import MessageBox from './MessageBox'


export var messageBox = (function () {
  var defaults = { // 默认值
    title: "",  // 提示 title
    content: "", // 提示内容
    cancel: '', // 取消
    ok: '', // 确认
    handleCancel: null,   // 取消的方法,, 默认空 也可以是个空函数
    handlerOk: null // 确认 方法

  }

  var MyComponent = Vue.extend(MessageBox)

  return function (opts) {  // 接收配置参数
    for (var attr in opts) { // 对默认进行覆盖  for in 循环
      defaults[attr] = opts[attr]
    }

    

    var vm = new MyComponent({
      el: document.createElement('div'),
      data: {
        title: defaults.title,
        content: defaults.content,
        cancel: defaults.cancel,
        ok: defaults.ok
      },
      methods: {
        handleCancel() {
          defaults.handleCancel && defaults.handleCancel.call(this)
          document.body.removeChild(vm.$el) // 删掉弹窗
        },
        handlerOk() {
          defaults.handlerOk && defaults.handlerOk.call(this)
          document.body.removeChild(vm.$el) // 删掉弹窗
        }
      },
    })
    document.body.appendChild(vm.$el)  // 添加到 body
  }
})()