<template>
	<div id="app">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './components/Header'
export default {
	name: 'App',
	data() {
		return {
			sortFilmBy: 0,
		}
	},
	components: {
		Header, 
	},
	methods: {
		sortBy: function (sortBy) {
			this.sortFilmBy = sortBy;
			console.log(this.sortFilmBy);
		}
	}
}
</script>

<style lang="scss">
	@import "../public/styles/variables";
	#app {
		width: 100vw;
		background-color: $background-color;
		min-height: 100vh;
	}

	body {
		overflow: overlay;
		scrollbar-width: 8px;
		scrollbar-color: $logo-color;

		&::-webkit-scrollbar {
			width: 8px;
			&-thumb {
				border-radius: 8px;
				background-color: $logo-color;
			}
		}
	}
</style>