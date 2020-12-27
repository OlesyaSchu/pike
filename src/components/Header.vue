<template>
	<h1
	class="header">
		{{logo}}
	</h1>
</template>

<script>
export default {
	name: 'logo',
	data(){
		return {
			logo: '#movienow',
		}
	}
}
</script>

<style lang="scss">
	@import "../../public/styles/variables";
	.header {
		font-family: 'Roboto Bold';
		font-size: (48vh / 9.37);
		text-align: center;
		letter-spacing: 0.21em;
		text-transform: uppercase;
		line-height: $header-height;
		color: $logo-color;
		padding-top: (10vh / 9.37);
		padding-left: (8vh / 9.37);

		position: sticky;
		top: 0;
		z-index: 100;

	// background
		width: 100vw;
		height: $header-height;
		background: $header-color;
		box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28);
	}
</style>