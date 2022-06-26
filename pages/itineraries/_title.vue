<template>
	<div>
		<img :src="ImageUrl" class="img-fluid rounded shadow w-100 mb-4" />
		<h1 class="display-2 mb-2">{{ Title }}</h1>
		<p class="lead mb-0">Suggested audience: {{ SuggestedAudience.join(", ") }}</p>
		<p class="lead">Total Duration: {{ TotalDuration }}</p>
		<p class="fs-4 mb-4">{{ Description }}</p>
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
	export default {
		name: "ItineraryPage",
		async asyncData({ route, $axios }) {
			const { title } = route.params
			const { data } = await $axios.get("/api/itinerary/" + title)
			const { Title, Description, ImageUrl, TotalDuration, SuggestedAudience, Pois } = data
			return { Title, Description, ImageUrl, TotalDuration, SuggestedAudience, Pois }
		}
	}
</script>
