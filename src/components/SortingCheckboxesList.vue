<template>
	<ul
	class="checkboxes-list">
		<SortingCheckboxItem
			v-for="Checkbox of sortingCheckboxes" 
			v-bind:key="Checkbox.id"
			v-bind:Checkbox="Checkbox"
			v-on:setCheckboxes="$emit('setCheckboxes', Checkbox.id)"
			v-on:sortFilms="$emit('sortFilms', Checkbox.active ? Checkbox.sortBy : 0)"
		/>
	</ul>
</template>

<script>
import SortingCheckboxItem from './SortingCheckboxItem'
export default {
	name: "SortingCheckboxesList",
	props: ['sortingCheckboxes'],
	components: {
		SortingCheckboxItem 
	},
}
</script>

<style lang="scss">
	@import "../../public/styles/variables";
	.checkboxes-list {
		padding-left: 2px;
		display: flex;
		gap: 24px;
	}
</style>