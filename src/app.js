import Vue from 'vue';
import App from './App.vue';

export function createApp() {
  return {
    app: new Vue({
      render: h => h(App)
    })
  }
}
