<template>
	<div class="column six">
		<div class="field">
			Hello <strong>{{ name }}</strong>!
		</div>
		<div class="field">
			<label for="name">Insert your name</label>
			<input type="text" id="name" name="name" v-model="name">
		</div>
	</div>
	<div class="column six">
		<div class="tab menu">
			<a href="#section-1-1" class="item active">App.vue</a>
			<a href="#section-1-2" class="item">app.js</a>
		</div>
		<div class="tab content">
			<div id="section-1-1" class="active">
				<pre>
					<code data-language="html">
<template>
  <div class="field">
    Hello <strong>{{ name }}</strong>!
  </div>
  <div class="field">
    <label for="name">Insert your name</label>
    <input type="text" id="name" name="name" v-model="name">
  </div>
</template>

<script>
  export default {
    data () {
      return { name: "Nelson" }
    }
  }
</script>
				</code>
			</pre>
		</div>
		<div id="section-1-2">
			<pre>
				<code data-language="javascript">
new Vue({
  el: '#app',
  components: {
    App
  }
});
					</code>
				</pre>
			</div>
		</div>
	</div>
	
</template>

<script>

var data = {
	name: "Nelson"
};

export default {
	data () {
		return { name: data.name }
	}
}

</script>