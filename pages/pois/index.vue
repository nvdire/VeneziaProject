<template>
	<div>
		<TheJumbotron :title="'All points of interest'" :description="'great points of interest to visit.'" />
		<ul class="list-unstyled d-flex flex-column gap-3 mx-sm-2 mx-md-4 mx-lg-5 px-lg-5">
			<li v-for="poi of Pois" :key="encodeURIComponent(poi.Title)" class="card">
				<img :src="poi.ImageUrl" class="card-img-top" />
				<div class="card-body">
					<h5 class="card-title display-6">
						<nuxt-link :to="'/pois/' + encodeURIComponent(poi.Title)">
							{{ poi.Title }}
						</nuxt-link>
					</h5>
					<p class="card-text fs-5">{{ poi.Description }}</p>
					<p class="card-text mb-0 fs-6">
						Address: <small class="text-muted">{{ poi.Address }}</small>
					</p>
					<p class="card-text mb-0 fs-6">
						Opening Hours: <small class="text-muted">{{ poi.OpeningHours }}</small>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import TheJumbotron from "~/components/TheJumbotron.vue"
	export default {
		name: "PoisPage",
		components: {
			TheJumbotron
		},
		async asyncData({ $axios }) {
			const { data } = await $axios.get("/api/poi")
			return {
				Pois: data
			}
		}
	}
</script>
