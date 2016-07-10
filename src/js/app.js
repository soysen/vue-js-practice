var $ = require("jquery");
var Vue = require("vue");

// Components
var App = require("./components/App.vue");
var List = require("./components/List.vue");
var Tree = require("./components/Tree.vue");
var Project = require("./components/Project.vue");

new Vue({
	el: '#app',
	components: {
		App
	}
});

new Vue({
	el: '#list',
	components: {
		List
	}
});

new Vue({
	el: '#tree',
	components: {
		Tree
	}
});

new Vue({
	el: '#project',
	name: 'project',
	components: {
		Project
	}
});
// bind click event
$("div.tab.menu > a.item").on("click", function(e){
	e.preventDefault();
	var id = this.attributes.href.value;
	$(this).addClass("active").siblings().removeClass("active")
	$(id).addClass("active").siblings().removeClass("active");
})
