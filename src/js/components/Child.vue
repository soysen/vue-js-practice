<template>
	<li class="item">
        <div class="title" 
        :class="{'bold': !item.child==false && item.child.length}">
			<button v-if="demo" class="button" v-on:click="createItem"><i class="fa fa-plus"></i></button>
        	<a class="folder" v-on:click="toggle('open')">
	            <i v-if="!item.type || item.type!='file'" class="fa" :class="!open ? 'fa-folder-o' : 'fa-folder-open-o' "></i>
	            <i v-if="item.type=='file'" class="fa fa-file-o"></i>
	        </a>
	        <input type="text" v-model="item.name" :disabled="!edit" v-on:keyup.enter="saveName" />
	        <span v-if="demo">
		        <a v-show="!edit" v-on:click="toggle('edit')">
		        	<i class="fa fa-pencil"></i>
		        </a>
		        <a v-show="edit" v-on:click="saveName">
		        	<i class="fa fa-check"></i>
		        </a>
		        <a v-on:click="dropItem">
		        	<i class="fa fa-trash-o"></i>
		        </a>
		    </span>
        </div>
        <ul class="list" v-show="open" v-if="!item.child==false && item.child.length">
            <child v-for="item in item.child" :item="item"></child>
        </ul>
    </li>
</template>

<script>
	var $ = require("jquery");
	var Child = require('../components/Child.vue');

	export default {
		name: "child",
		components: {
			child: Child,
			props: {
				item: Object
			}
		},
		methods: {
			toggle (ref) {
				// debugger;
				this[ref] = !this[ref];
				// 如果開啟編輯則 focus 在 input 上
				if(ref=='edit') {
					var target = event.target.className!="A"?event.target.parentNode:event.target;
					setTimeout(function() {
						$(target).prev('input').focus();
					}, 100);
				}
			},
			saveName () {
				this.edit = false;
			},
			dropItem () {
				if(confirm("子項目會跟著刪除，真的要刪？"))
					this.$parent.item.child.$remove(this.item);
			},
			createItem () {
				// debugger;
				if(!this.item.child) 
					this.item.child = new Array();
				this.item.child.push({
					name: 'New layer',
					child: [],
					open: false,
					edit: false
				});
				if(!this.open) this.open = true;
			}
		},
		props: {
			item: Object
		},
		data () {
			// debugger;
			return {
				open: false,
				edit: false,
				demo: !this.$root.$options.name ? true : false
			}
		}
	}
</script>