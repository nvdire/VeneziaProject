<template>
	<div>
		<TheJumbotron :title="'Winter events'" :description="'great winter events in town to enter and enjoy.'" />
		<select class="form-select mb-4" aria-label="Default select example" @change="goToSeasonEventPage($event)">
			<option value="/events">All Events</option>
			<option value="/events/summer">Summer Events</option>
			<option value="/events/winter" selected>Winter Events</option>
		</select>
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
	import TheJumbotron from "~/components/TheJumbotron.vue"
	export default {
		name: "SummerEventsPage",
		components: {
			TheJumbotron
		},
		async asyncData({ $axios }) {
			const { data } = await $axios.get("/api/event/winter")
			return {
				Events: data
			}
		},
		methods: {
			goToSeasonEventPage(event) {
				this.$router.push(event.target.value)
			}
		}
	}
</script>
