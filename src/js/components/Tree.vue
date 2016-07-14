<template>
  <p class="grey-text">
    結合以上特性，搭配子組件，產生樹狀結構
  </p>
  <ol>
    <li>
      &lt;child v-for="item in tree" :item="item"&gt;&lt;/child&gt;
      帶入子組件
    </li>
    <li>
    	使用 v-on:keyup.enter 和 v-on:keyup.esc 綁定鍵盤事件
    </li>
  </ol>
	<ul class="collection basic folder" v-if="tree.length">
		<child v-for="item in tree" :item="item"></child>
	</ul>
  <a class="btn-floating waves-effect waves-light red tooltipped" 
  	data-position="right" data-delay="50" data-tooltip="新增資料夾" 
  	v-on:click="createItem">
    <i class="material-icons">add</i>
  </a>
</template>

<script>
	var Child = require('../components/Child.vue');
	var newItem = {
		name: "",
		parent: null
	};
	var tree = [
		{
			name: "Level 1-1",
			child: [
				{
					name: "Level 2-1",
					child: [
						{
							name: "Level 3-1",
							child: []
						},
						{
							name: "Level 3-2",
							child: []
						}
					]
				},
				{
					name: "Level 2-2",
					child: []
				}
			]
		}, {
			name: "Level 1-2",
			child: []
		}
	];
	
	export default {
		components: {
			child: Child,
			props: {
				item: Object
			}
		},
		props: {
			item: Object
		}, 
		methods: {
			createItem () {
				this.tree.push({
					name: "New Item",
					child: [],
					open: false,
					edit: false
				})
			}
		},
		data () {
			return { 
				tree: tree,
				newItem: newItem
			}
		}
	}
</script>