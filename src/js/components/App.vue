<template>
	<div class="col s12 m6">
        <p class="grey-text">
            測試傳值與資料連動
        </p>
        <ol>
            <li>{ { name } } 帶入值</li>
            <li>v-model="name" 可以做連動</li>
        </ol>
		<h3>Hello <strong>{{ name }}</strong>!</h3>
		<label for="name">Insert your name</label>
		<input type="text" id="name" name="name" v-model="name">
	</div>
	<div class="col s12 m6">
		<ul class="tabs">
			<li class="tab col s6">
				<a href="#section-1-1" class="active">App.vue</a>
			</li>
			<li class="tab col s6">
				<a href="#section-1-2">app.js</a>
			</li>
		</ul>
		<div id="section-1-1">
			<pre>
				<code data-language="html">
<template>
  <h3>Hello <strong>{{ name }}</strong>!</h3>
  <label for="name">Insert your name</label>
  <input type="text" id="name" name="name" v-model="name">
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