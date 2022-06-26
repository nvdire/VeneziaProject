<template>
	<div>
		<TheJumbotron :title="'All points of interest'" :description="'great points of interest to visit.'" />
		<ul class="list-unstyled d-flex flex-column gap-3 mx-sm-2 mx-md-4 mx-lg-5 px-lg-5">
			<li v-for="itinerary of itineraries" :key="encodeURIComponent(itinerary.Title)" class="card">
				<img :src="itinerary.ImageUrl" class="card-img-top" />
				<div class="card-body">
					<h5 class="card-title display-6">
						<nuxt-link :to="'/itineraries/' + encodeURIComponent(itinerary.Title)">{{ itinerary.Title }}</nuxt-link>
					</h5>
					<p class="card-text fs-5">{{ itinerary.Description }}</p>
					<p class="card-text mb-0 fs-6">
						Suggested audience: <small class="text-muted">{{ itinerary.SuggestedAudience.join(", ") }}</small>
					</p>
					<p class="card-text mb-0 fs-6">
						Total Duration: <small class="text-muted">{{ itinerary.TotalDuration }}</small>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import TheJumbotron from "~/components/TheJumbotron.vue"
	export default {
		name: "ItinerariesPage",
		components: {
			TheJumbotron
		},
		async asyncData({ $axios }) {
			const { data } = await $axios.get("/api/itinerary")
			return {
				itineraries: data
			}
		}
	}
</script>
