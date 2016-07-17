var Vue = require("vue");
var VueResource = require('vue-resource');
var Todo = require("./components/Todo.vue");

Vue.use(VueResource);

var TodoFilter = require("./filters/todo-filter.js");

new Vue({
    el: '#todo',
    components: {
        Todo
    }
});
