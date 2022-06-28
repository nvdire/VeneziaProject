<template>
	<div>
		<img :src="Event.ImageUrl" class="img-fluid rounded shadow w-100 mb-4" />
		<h1 class="display-2 mb-2">{{ Event.Title }}</h1>
		<p class="fs-4 mb-4">{{ Event.Description }}</p>
		<p class="fs-5">
			Address: <span class="text-muted">{{ Event.Address }}</span>
		</p>
		<p class="fs-5">
			Date: <span class="text-muted">{{ new Date(Event.Date).toDateString() }}</span>
		</p>
		<p class="fs-5">
			Event type: <span class="text-muted">{{ Event.EventType }}</span>
		</p>
		<p class="fs-5">
			Price: <span class="text-muted">{{ Event.Price }}</span>
		</p>
		<p class="fs-5">
			Season: <span class="text-muted">{{ Event.Season }}</span>
		</p>
		<p class="fs-5">
			Requires Prebooking: <span class="text-muted">{{ Event.PreregisterNeccessary ? "Yes" : "No" }}</span>
		</p>
		<p class="fs-5">
			More details at
			<a :href="Event.EventUrl" target="_blank">Events host website</a>
		</p>
		<h2 class="display-5 mb-2">Hosted at:</h2>
		<div class="mx-sm-2 mx-md-4 mx-lg-5 px-lg-5">
			<div class="card">
				<img :src="Event.POI.ImageUrl" class="card-img-top" />
				<div class="card-body">
					<h5 class="card-title display-6">
						<nuxt-link :to="'/pois/' + encodeURIComponent(Event.POI.Title)">
							{{ Event.POI.Title }}
						</nuxt-link>
					</h5>
					<p class="card-text fs-5">{{ Event.POI.Description }}</p>
					<p class="card-text mb-0 fs-6">
						Address: <small class="text-muted">{{ Event.POI.Address }}</small>
					</p>
					<p class="card-text mb-0 fs-6">
						Opening Hours: <small class="text-muted">{{ Event.POI.OpeningHours }}</small>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "EventPage",
		async asyncData({ route, $axios }) {
			const { title } = route.params
			const { data } = await $axios.get("/api/event/" + title)
			return { Event: data }
		}
	}
</script>
