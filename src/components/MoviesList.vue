<template>
<div>
	<main
	class="filtration">
	  	<h1
		class="filtration__title">
			{{header}}
		</h1>
		<SortingCheckboxesList 
			v-bind:sortingCheckboxes="sortingCheckboxes"
			v-on:setCheckboxes="setCheckboxes"
			v-on:sortFilms="sortFilms"
		/>
		<hr
		class="filtration__line">
	</main>
	<ol
	class="movies-list">
		<MovieItem 
			v-for="Movie of SortedMoviesArray"
			v-bind:key="Movie.id"
			v-bind:Movie="Movie"
			v-bind:MoviesPropsArray="SortedMoviesArray"
		/>
	</ol>
	<img 
		v-if="loading"
		class="loader"
		src="../assets/images/Loader.png">
</div>
</template>

<script>
import axios from 'axios';
import SortingCheckboxesList from './SortingCheckboxesList'
import MovieItem from './MovieItem'
export default {
	name: 'MoviesList',
	data(){
		return {
			header: 'Фильмы',
			sortingCheckboxes: [
				{id: 1, text: 'Отсортировать по названию', sortBy: "title", active: false},
				{id: 2, text: 'Отсортировать по году', sortBy: "year", active: false},
			],
			MoviesArray: [],
			SortedMoviesArray: [],
			loading: true,
		}
	},
	mounted() {
    	axios.get('https://floating-sierra-20135.herokuapp.com/api/movies')
		  	.then(response => (this.MoviesArray = response.data.data))
		  	.catch(error => console.log(error))
			.finally(() => (this.loading = false, this.SortedMoviesArray = this.MoviesArray));
	},
	methods: {
		setCheckboxes: function(id) {
			this.sortingCheckboxes.forEach( checkbox => {	
				if (checkbox.id === id) {
					checkbox.active = !checkbox.active;
				}
				if (checkbox.active && (checkbox.id !== id)) {
					checkbox.active = false;
				}
			});
		},
		sortFilms: function(sortBy) {
			this.SortedMoviesArray = this.MoviesArray.slice();
			switch (sortBy) {
				case 'title':
					this.SortedMoviesArray.sort((Movie, NextMovie) => {
						if (Movie.title > NextMovie.title) return 1;
  						if (Movie.title == NextMovie.title) return 0;
  						if (Movie.title < NextMovie.title) return -1;
					});
					break;
				case 'year':
					this.SortedMoviesArray.sort((Movie, NextMovie) => {
						  return Movie.year - NextMovie.year;
					});
					break;
			}
		}
	},
	components: {
		MovieItem, 
		SortingCheckboxesList,
	},  
}
</script>

<style lang="scss">
	@import "../../public/styles/variables";
	.filtration {
		@extend %wrapper;
		height: 13.233vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 7px;
		margin-bottom: 40px;

		&__title {
			padding-bottom: 3px;
			font-family: 'Roboto Medium';
			font-size: 32px;
			line-height: 32px;
			color: $heading-color;
			box-sizing: border-box;
		}

		&__line {
			@extend %wrapper;
		}
	}

	.movies-list {
		@extend %wrapper;
		padding-bottom: 5vh;
	}

	.loader {
		@extend %loader;
	}
</style>