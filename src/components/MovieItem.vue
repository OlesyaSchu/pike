<template>
	<li class="movie">
		<section class="movie-poster">
			<img
			class="movie-poster__image_size_6vw"
			v-if="Movie.poster.length" 
			v-bind:src="Movie.poster" 
			v-bind:alt="Movie.title">
		</section>
		<article class="movie-information">
			<router-link 
			:to="{
			name: 'movie', 
			params: {Movie: Movie, id: Movie.id, MoviesPropsArray: MoviesPropsArray}
			}">
				<h1
				class="movie-information__title-link">
					{{FiltrateString(Movie.title)}}
				</h1>
			</router-link>
			<h4 
			class="movie-information__production"
			v-if="Movie.year || Movie.genres">
				{{Movie.year}}, {{MovieArrayToString(Movie.genres)}}
			</h4>
			<h4 
			class="movie-information__production"
			v-if="Movie.directors">
				Режиссер: {{MovieArrayToString(Movie.directors)}}
			</h4>
			<div
			v-if="Movie.actors"
			class="movie-information__actors">
				<h4
				class="movie-information__production">
					Актеры:
				</h4>
				<p
				class="movie-information__actors-list">
					{{MovieArrayToString(Movie.actors)}}
				</p>
			</div>
			<p 
			v-if="Movie.description"
			class="movie-information__description">
				{{FiltrateString(Movie.description)}}
			</p>
		</article>
		<section
		v-if="Movie.collapse.duration" 
		class="movie-duration">
			<p
			class="movie-duration__timing">
				{{MovieArrayToString(Movie.collapse.duration)}}
			</p>
			<img 
			class="movie-duration__cine-film"
			src="../assets/images/cine-film.png" alt="">
		</section>
	</li>
</template>

<script>
export default {
	name: 'MovieItem',
	props: {
		Movie: {
			type: Object,
			required: true,
		},
		MoviesPropsArray: {
			type: Array,
		}
	},
	methods: {
		MovieArrayToString: function(array){
			return array.join().replace(/\,/g, ', ');
		},
		FiltrateString: function(string) {
			string = string.replace(/\&\#039\;/g, "'");
			string = string.replace(/[^a-zа-яё\s\d\&\/\\\#,+()$~%.'":*?<>\-\`!«»–;ÀÈ]/gi, '');
			return string;
		},
	}
}
</script>

<style lang="scss">
	@import "../../public/styles/variables";
	.movie {
		display: flex;
		margin: 24px 0;
		position: relative;
		&:last-child {
			margin-bottom: 0;
		}
	
		&-poster {
			@extend %flex-center;
			width: 8.75vw;
			background: $poster-background-color;
	
			&__image_size_6vw {
				width: 6vw;
			}
		}
	
		&-information {
			padding: 32px 0.5vw 30px 1.2vw;
			width: $movie-information-width;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			background-color: $movie-background-color;
	
			&__title-link {
				font-family: 'Roboto Bold';
				font-size: 36px;
				line-height: 36px;
				color: $heading-color;
				margin-bottom: 6px;
			}
	
			&__production {
				margin-top: 8px;
				font-family: 'Roboto Bold';
				font-size: 12px;
				line-height: 12px;
				letter-spacing: -0.2px;
				word-spacing: 1.5px;
				text-transform: uppercase;
				color: $information-color;
			}
	
			&__actors {
				display: flex;
				gap: 10px;
				align-items: baseline;
				padding-top: 2px;
	
				&-list {
					@extend %information-text;
					line-height: 16px;
				}
			}
	
			&__description {
				@extend %information-text;
				font-size: 16px;
				line-height: 20px;
				padding-top: 14px;
			}
		}
	
		&-duration {
			position: absolute;
			top: 32px;
			right: 0;
			display: flex;
			gap: 12px;
			align-items: center;
			padding-right: 26px;
			&::before {
				content: "";
				position: absolute;
				width: 178px;
				height: 0px;
				border-bottom: 30px solid $poster-background-color;
				border-left: 6px solid transparent;
				right: 0px;
			}
	
			&__timing {
				font-family: 'Roboto Bold';
				font-size: 12px;
				line-height: 30px;
				text-align: right;
				text-transform: uppercase;
				color: $logo-color;
				z-index: 10;
			}
	
			&__cine-film {
				width: 18px;
				height: 18px;
				z-index: 10;
			}
		}
	}
</style>