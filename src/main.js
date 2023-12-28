import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/css/tailwind.css'
import { upperFirst, camelCase } from 'lodash'

Vue.config.productionTip = false

const requireComponent = require.context(
  './components/common',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
