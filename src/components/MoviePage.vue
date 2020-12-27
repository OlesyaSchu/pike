<template>
	<div 
	class="wrapper">
		<main
		class="back">
			<div class="back__arrow"></div>
			<router-link :to="{name: 'movies'}">
				Назад к списку
			</router-link>
			<hr>
		</main>
		<MovieItem
			v-if="MovieShow" 
			v-bind:key="MovieShow.id"
			v-bind:Movie="MovieShow"
		/>
		<p 
		class="not-found"
		v-if="!MovieShow && !loading">
			К сожалению, по вашему запросу ничего не найдено...
		</p>
		<img 
		v-if="loading"
		class="loader"
		src="../assets/images/Loader.png">
	</div>
</template>

<script>
import MovieItem from './MovieItem'
import axios from 'axios';
export default {
	name: 'MoviePage',
	// props: ['Movie'],
	props: {
		Movie: Object,
		MoviesPropsArray: Array,
	},
	data () {
		return {
			MovieLoaded: Object,
			MoviesArray: this.MoviesPropsArray ? this.MoviesPropsArray : [],
			loading: true,
			id: this.$route.params.id,
		}
	},
	mounted() {
		if (!this.Movie) {
			axios.get('https://floating-sierra-20135.herokuapp.com/api/movies')
			  	.then(response => (this.MoviesArray = response.data.data))
			  	.catch(error => console.log(error))
				.finally(() => (this.loading = false));
		} else {
			this.loading = false;
		}
	},
	computed: {
		MovieShow: function() {
			if (this.Movie) return this.Movie;
			if (this.findMovie(this.$data.MoviesArray, this.$route.params.id)) {
				return this.MovieLoaded; 
			} else {
				return null;
			}
		}
	},
	methods: {
		findMovie(array, id) {
			this.MovieLoaded = null;
			for (let SearchMovie of array) {
				if (SearchMovie.id === +id) {
					this.MovieLoaded = SearchMovie;
				}
			}
			return this.MovieLoaded;
		},
	},
	components: {
		MovieItem
	}
}
</script>

<style lang="scss">
	@import "../../public/styles/variables";
	.back {
		padding-top: 24px;

		a {
			font-family: 'Roboto Regular';
			font-size: 20px;
			line-height: 60px;
			text-decoration-line: underline;
			color: $navigation-color;
		}

		&__arrow {
			display: inline;
			&::after {
				content: "";
				display: inline-block;
				position: relative;
				left: 2px;
				height: 12px;
				width:12px;
				border-left: 2px solid $navigation-color;
				border-bottom: 2px solid $navigation-color;
				transform: rotate(45deg);
				margin-right: 12px;
			}
		}
	}
	.wrapper {
		@extend %wrapper;
		li {
			margin: 38px auto;
		}
	}
	.not-found {
		font-family: 'Roboto Medium';
		font-size: 32px;
		line-height: 124px;
		color: $heading-color;
	}
</style>