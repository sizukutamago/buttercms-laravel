
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import Butter from 'buttercms';

window.butter = Butter($('meta[name="cms-token"]').attr('content'));
Vue.use(VueRouter);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import PostListComponent from './components/PostListComponent.vue';
import PostComponent from './components/PostComponent.vue';

const routes = [
    {path: '/', component: PostListComponent},
    {path: '/:id', component: PostComponent, name: 'post'}
];

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

const app = new Vue({
    el: '#app',
    router: new VueRouter({mode: 'history', routes: routes})
});
