<template>
	<a
		:href="'https://www.google.com/search?q=' + encodeURIComponent(title)"
		target="_blank"
		class="card text-center text-decoration-none m-auto"
	>
		<img :src="img" class="card-img-top" />
		<div class="card-body">
			<h2 class="h5 card-title">{{ title }}</h2>
			<ul v-if="!!openingHours || !!address" class="list-group list-group-flush">
				<li v-if="!!openingHours" class="list-group-item">{{ openingHours }}</li>
				<li v-if="!!address" class="list-group-item">{{ address }}</li>
			</ul>
		</div>
	</a>
</template>

<script>
	export default {
		name: "ServiceCard",
		props: {
			title: {
				type: String,
				required: true
			},
			img: {
				type: String,
				required: true
			},
			id: {
				type: Number,
				required: true
			},
			openingHours: {
				type: String,
				required: false,
				default: null
			},
			address: {
				type: String,
				required: false,
				default: null
			}
		}
	}
</script>

<style scoped>
	.card {
		transition: all 250ms ease;
		color: black;
	}
	.card:hover {
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
		color: #0a58ca;
	}
</style>
