<script setup>
	import HelloWorld from './components/HelloWorld.vue'
	import {
		useSSRContext
	} from 'vue'
</script>

<script>
	export default {
		data() {
			return {
				page: null,
				url: '000'
			}
		},
		created() {
			const ctx = useSSRContext()
			let data = ctx.payload || {};
			console.log('APP.payload =', data);
			this.url = data.url;
			
			this.page = HelloWorld;
		}

	}
</script>
<template>
	<h1>url = {{url}}</h1>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<component :is="page" :data="url" msg="Vite + Vue"></component>
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}

	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>