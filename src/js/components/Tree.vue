<template>
	<div class="column six">
		<ul class="list tree" v-if="tree.length">
			<child v-for="item in tree" :item="item"></child>
			<li class="item">
				<div class="title">
					<a class="folder" v-on:click="createItem">
						<i class="fa fa-plus"></i> Add Item
					</a>
				</div>
			</li>
		</ul>
	</div>
	<div class="column six">
		<div class="tab menu">
			<a href="#section-3-1" class="item active">Tree.vue</a>
			<a href="#section-3-2" class="item">Child.vue</a>
			<a href="#section-3-3" class="item">app.js</a>
		</div>
		<div class="tab content">
			<div id="section-3-1" class="active">
				<pre><code data-language="html">
<template>
  <ul class="list tree" v-if="tree.length">
    <child v-for="item in tree" :item="item"></child>
  </ul>
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
    data () {
      return { 
        tree: tree,
        newItem: newItem
      }
    }
  }
</script>
			</code></pre>
		</div>
		<div id="section-3-2">
			<pre><code data-language="html">
<template>
  <li class="item">
    <div class="title" :class="{'bold': !item.child==false && item.child.length}">
      <!-- 增加層級 -->
      <button class="button" v-on:click="createItem"><i class="fa fa-plus"></i></button>
      <!-- 開闔 -->
      <a class="folder" v-on:click="toggle('open')">
        <i class="fa" :class="!open ? 'fa-folder-o' : 'fa-folder-open-o'"></i>
      </a>
      <!-- 輸入欄位，修改名稱用 -->
      <input type="text" v-model="item.name" :disabled="!edit" v-on:keyup.enter="saveName" />
      <!-- 編輯按鈕 -->
      <a v-show="!edit" v-on:click="toggle('edit')">
        <i class="fa fa-pencil"></i>
      </a>
      <!-- 確認修改按鈕 -->
      <a v-show="edit" v-on:click="saveName">
        <i class="fa fa-check"></i>
      </a>
      <!-- 刪除項目按鈕 -->
      <a v-on:click="dropItem">
        <i class="fa fa-trash-o"></i>
      </a>
    </div>
    <!-- 下一層 -->
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
      return {
        open: false,
        edit: false
      }
    }
  }
</script>
			</code></pre>
		</div>
		<div id="section-3-3">
			<pre><code data-language="javascript">
new Vue({
  el: '#tree',
  components: {
    Tree
  }
});
				</code></pre>
			</div>
		</div>
	</div>
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