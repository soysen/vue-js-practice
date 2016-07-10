<template>
	<div class="column six">
		<a v-on:click="createItem" class="item labeled button"><i class="fa fa-plus"></i></a>
		<div v-for="item in items" class="item labeled">
			{{ item.name }} 
			<a class="button close" v-on:click="deleteItem($index, item)">&times;</a>
		</div>
	</div>
	<div class="column six">
		<div class="tab menu">
			<a href="#section-2-1" class="item active">Items.vue</a>
			<a href="#section-2-2" class="item">app.js</a>
		</div>
		<div class="tab content">
			<div id="section-2-1" class="active">
				<pre>
					<code data-language="html">
<template>
  <div v-for="item in items" class="item labeled">
    {{ item.name }} 
    <a class="button close" v-on:click="deleteItem(this)">&times;</a>
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