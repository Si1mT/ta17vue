require('bulma');

import Vue from 'vue';

import App from './App.vue';
import Modal from './components/Modal.vue';

Vue.component('app', App);
Vue.component('modal', Modal);

let app = new Vue({
    el: '#app',
});