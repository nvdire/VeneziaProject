<template>
	<div>
		<TheJumbotron :title="'All services'" :description="'All services in town!'" />
		<select class="form-select mb-4" aria-label="Default select example" @change="goToServiceTypePage($event)">
			<option value="" selected>All Services</option>
			<option v-for="serviceType in serviceTypes" :key="serviceType.Title" :value="serviceType.Title">{{ serviceType.Title }}</option>
		</select>
		<ServiceList :services="services" />
	</div>
</template>

<script>
	import TheJumbotron from "~/components/TheJumbotron.vue"
	import ServiceList from "~/components/ServiceList.vue"
	export default {
		name: "ServicesPage",
		components: {
			TheJumbotron,
			ServiceList
		},
		async asyncData({ $axios }) {
			const { data } = await $axios.get("/api/service")
			const { serviceTypes, services } = data
			return {
				serviceTypes,
				services
			}
		},
		methods: {
			goToServiceTypePage(event) {
				this.$router.push("/services/" + event.target.value)
			}
		}
	}
</script>
