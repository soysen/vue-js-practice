var Vue = require("vue");
var App = require("./components/App.vue");

new Vue({
  el: '#app',
  components: {
  	App
  }
});

var MyComponent = Vue.extend({
	methods: {
		deleteItem: function(t) {
			event.preventDefault();
			event.target.parentElement.remove();
			// this.items.$remove(item);
		}
	},
	template: '<li v-for="n in 100">{{ (n+1)+""+(n+1)+""+(n+1) }} <a href="#" v-on:click="deleteItem(this)">&times;</a></li>'
})

// Globally register the component with tag: my-component
Vue.component('my-component', MyComponent);

new Vue({
  el: '#element'
});
