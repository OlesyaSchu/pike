<template>
	<li 
	class="checkbox">
		<div
		class="checkbox__square"
		v-on:click="$emit('setCheckboxes', Checkbox.id), $emit('sortFilms')"
		v-bind:class="{ active: Checkbox.active }">
		</div>
		<p
		v-on:click="$emit('setCheckboxes', Checkbox.id), $emit('sortFilms')"
		class="checkbox__name">
			{{ Checkbox.text }}
		</p>
	</li>
</template>

<script>
export default {
	name: 'Checkbox',
	props: {
		Checkbox: {
			type: Object,
			required: true,
		}
	},
}
</script>

<style lang="scss">
	@import "../../public/styles/variables";
	.checkbox {
		display: flex;
		margin: 8px 0;

		&__name {
			display: inline;
			margin: 0 10px;
			font-family: 'Roboto Regular';
			font-size: 16px;
			line-height: 16px;
			color: $poster-background-color;
			cursor: pointer;
		}

		&__square {
			position: relative;
			width: 16px;
			height: 16px;
			border-radius: 1px;
			border: solid 1px $poster-background-color;
			cursor: pointer;
		}
	}

	.active {
		border: solid 1px  $navigation-color;
		background-color: $navigation-color;

		&::after {
			content: "";
			display: inline-block;
			position: absolute;
			left: 1px;
			top: 2px;
			height: 5px;
			width: 7px;
			border-left: 2px solid $heading-color;
			border-bottom: 2px solid $heading-color;
			transform: rotate(-45deg);
		}
	}
</style>