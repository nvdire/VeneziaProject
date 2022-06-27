<template>
	<div>
		<img :src="Poi.ImageUrl" class="img-fluid rounded shadow w-100 mb-4" />
		<h1 class="display-2 mb-2">{{ Poi.Title }}</h1>
		<p class="fs-4 mb-4">{{ Poi.Description }}</p>
		<p class="fs-5">
			Address: <span class="text-muted">{{ Poi.Address }}</span>
		</p>
		<p class="fs-5">
			Opening hours: <span class="text-muted">{{ Poi.OpeningHours }}</span>
		</p>
		<h2 class="display-5 mb-2">Itinerary list:</h2>
		<ul class="list-unstyled d-flex flex-column mb-4 gap-3 mx-sm-2 mx-md-4 mx-lg-5 px-lg-5">
			<li v-for="itinerary of Itineraries" :key="encodeURIComponent(itinerary.Title)" class="card">
				<img :src="itinerary.ImageUrl" class="card-img-top" />
				<div class="card-body">
					<h5 class="card-title display-6">
						<nuxt-link :to="'/itineraries/' + encodeURIComponent(itinerary.Title)">{{ itinerary.Title }}</nuxt-link>
					</h5>
					<p class="card-text fs-5">{{ itinerary.Description }}</p>
					<p class="card-text mb-0 fs-6">
						Suggested audience: <small class="text-muted">{{ itinerary.SuggestedAudience.join(", ") }}</small>
					</p>
				</div>
			</li>
		</ul>
		<h2 class="display-5 mb-2">Events list:</h2>
		<ul class="list-unstyled d-flex flex-column gap-3 mx-sm-2 mx-md-4 mx-lg-5 px-lg-5">
			<li v-for="event of Events" :key="encodeURIComponent(event.Title)" class="card">
				<img :src="event.ImageUrl" class="card-img-top" />
				<div class="card-body">
					<h5 class="card-title display-6">
						<nuxt-link :to="'/events/' + encodeURIComponent(event.Title)">{{ event.Title }}</nuxt-link>
					</h5>
					<p class="card-text fs-5">{{ event.Description }}</p>
					<p class="card-text mb-0 fs-6">
						Date: <small class="text-muted">{{ event.Date }}</small>
					</p>
					<p class="card-text mb-0 fs-6">
						Total Duration: <small class="text-muted">{{ event.TimeDuration }}</small>
					</p>
					<p class="card-text mb-0 fs-6">
						Price: <small class="text-muted">{{ event.Price }}</small>
					</p>
					<p class="card-text mb-0 fs-6">
						Requires Prebooking: <small class="text-muted">{{ event.PreregisterNeccessary ? "Yes" : "No" }}</small>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "PoiPage",
		async asyncData({ route, $axios }) {
			const { title } = route.params
			const { data } = await $axios.get("/api/poi/" + title)
			const { Poi, Events, Itineraries } = data
			return { Poi, Events, Itineraries }
		}
	}
</script>
