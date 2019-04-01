import Vue from 'vue'
import App from './App.vue'
import '../less/main.less'

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    mounted (){
      var path = location.hash.match('[0-9a-zA-Z\-\/]+');
      this.$data.actived = path;
    }
  })
