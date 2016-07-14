<template>
	<li class="collection-item">
        <div class="title" :class="{'bold': !item.child==false && item.child.length}">
        	<a class="black-text folder" v-on:click="toggle('open')">
	            <i v-if="!item.type && item.type!='file' && !open" class="material-icons">folder</i>
	            <i v-if="!item.type && item.type!='file' && open" class="material-icons">folder_open</i>
	            <i v-if="item.type=='file'" class="material-icons">description</i>
	        </a>
	        <span v-if="!edit">{{item.name}}</span>
	        <input type="text" v-model="item.name" v-if="edit" 
	        	v-on:keyup.enter="saveName(item)" v-on:keyup.esc="cancelEdit(item)" />
	        <span v-if="demo && edit" class="ctrl-btn">
			    <a class="green-text" v-show="edit" v-on:click="saveName(item)">
		        	<i class="material-icons">check</i>
		        </a>
			    <a class="grey-text" v-show="edit" v-on:click="cancelEdit(item)">
		        	<i class="material-icons">replay</i>
		        </a>
		    </span>
		    <span v-if="demo && !edit" class="ctrl-btn">
		        <a class="grey-text" v-show="!edit" v-on:click="toggle('edit', item)">
		        	<i class="material-icons">mode_edit</i>
		        </a>
		        <a class="grey-text" v-on:click="dropItem">
		        	<i class="material-icons">delete</i>
		        </a>
	        </span>
	        <div v-if="demo" class="secondary-content">
		    	<a class="teal-text btn-floating" v-on:click="createItem"><i class="material-icons">add</i></a>
		    </div>
        </div>
        <ul class="collection basic" v-show="open" v-if="!item.child==false && item.child.length">
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
			toggle (ref, item) {
				this[ref] = !this[ref];
				// 如果開啟編輯則 focus 在 input 上
				if(ref=='edit') {
					var $this = this;
					this.oldName = item.name;
					var target = $(event.target).parents('.title');
					setTimeout(function() {
						$(target).find('input').focus();
					}, 150);
				} 
			},
			saveName () {
				this.edit = false;
			},
			cancelEdit(item) {
				item.name = this.oldName;
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
				oldName: null,
				demo: !this.$root.$options.name ? true : false
			}
		}
	}
</script>