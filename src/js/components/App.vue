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

var data = {
	name: "Nelson"
};

export default {
	data () {
		return { name: data.name }
	}
}

</script>