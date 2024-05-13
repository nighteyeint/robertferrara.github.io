import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

jQuery(document).ready(function($) {

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 90) {
        $('#header').addClass('fixed-header');
    }
    else {
        $('#header').removeClass('fixed-header');
    }
  });

});