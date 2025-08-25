// 导入App.vue,基于App.vue构建结构渲染index.html
// 1.导入Vue核心包
import Vue from 'vue'
// 2.导入App.vue根组件
import App from './App.vue'
// 提示：当前处于开发还是生产环境
Vue.config.productionTip = false
// Vue实例化，提供render方法，基于App.vue创建结构渲染index.html
new Vue({
  // 完整写法

  render: (createElement) => {
    // 基于App创建元素结构
    return createElement(App)
  }

  // render: h => h(App),
  // $mount相当于el:'#app'
}).$mount('#app')
