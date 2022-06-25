<template>
	<div>
		<TheJumbotron :title="'Services ' + selectedServiceType.Title" :description="selectedServiceType.Introduction" />
		<select class="form-select mb-4" aria-label="Default select example" @change="goToServiceTypePage($event)">
			<option value="">All Services</option>
			<option
				v-for="serviceType in serviceTypes"
				:key="serviceType.Title"
				:value="serviceType.Title"
				:selected="'/services/' + serviceType.Title == $route.path"
			>
				{{ serviceType.Title }}
			</option>
		</select>
		<ServiceListDetailed :services="services" />
	</div>
</template>

<script>
	import TheJumbotron from "~/components/TheJumbotron.vue"
	import ServiceListDetailed from "~/components/ServiceListDetailed.vue"
	export default {
		name: "ServicePage",
		components: {
			TheJumbotron,
			ServiceListDetailed
		},
		async asyncData({ route, $axios }) {
			const { type } = route.params
			const { data } = await $axios.get("/api/service/" + type)
			const { serviceTypes, services, selectedServiceType } = data
			return {
				serviceTypes,
				services,
				selectedServiceType
			}
		},
		methods: {
			goToServiceTypePage(event) {
				this.$router.push("/services/" + event.target.value)
			}
		}
	}
</script>
