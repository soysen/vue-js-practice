<template>
	<div class="col s12 m6">
		<p class="grey-text">測試陣列資料以及綁定事件</p>
        <ol>
			<li>v-for="item in items"</li>
			<li>v-on:click="function($index, item)"</li>
		</ol>
		<ul class="collection basic">
			<li v-for="item in items" class="collection-item">
				{{ item.name }} 
				<a class="secondary-content close" v-on:click="deleteItem($index, item)">
					<i class="material-icons">remove</i>
				</a>
			</li>
		</ul>
		<div class="col s12">
			<a v-on:click="createItem" class="btn-floating waves-effect waves-light red tooltipped" 
                data-position="right" data-delay="50" data-tooltip="新增資料夾">
				<i class="material-icons">add</i>
			</a>
		</div>
	</div>
	<div class="col s12 m6">
		<ul class="tabs">
			<li class="tab col s6"><a href="#section-2-1" class="active">Items.vue</a></li>
			<li class="tab col s6"><a href="#section-2-2">app.js</a></li>
		</ul>
		<div id="section-2-1">
			<pre>
				<code data-language="html">
<template>
  <a v-on:click="createItem" class="btn-floating waves-effect waves-light red">
    <i class="material-icons">add</i>
  </a>
  <ul class="collection basic">
    <li v-for="item in items" class="collection-item">
      {{ item.name }} 
      <a class="secondary-content close" v-on:click="deleteItem($index, item)">
        <i class="material-icons">remove</i>
      </a>
    </li>
  </ul>
</template>

<script>
  var items = [
    { name: "List item" },
    { name: "List item" },
    { name: "List item" }
  ];

  export default {
    data () {
      return { items: items }
    },
    methods: {
      createItem () {
        items.push({
          name: "New list item"
        });
      },
      deleteItem (index, item) {
        items.splice(index, 1);
      }
    }
  }
</script>
				</code>
			</pre>
		</div>
		<div id="section-2-2">
			<pre>
				<code data-language="javascript">
new Vue({
  el: '#list',
  components: {
    Items
  }
});
				</code>
			</pre>
		</div>
	</div>
	
</template>

<script>
	var items = [
		{ name: "List item" },
		{ name: "List item" },
		{ name: "List item" }
	];

	export default {
		data () {
			return { items: items }
		},
		methods: {
			createItem () {
				items.push({
					name: "New list item"
				});
			},
			deleteItem (index, item) {
				items.splice(index, 1);
			}
		}
	}
</script>