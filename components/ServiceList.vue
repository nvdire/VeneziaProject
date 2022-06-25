<template>
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">
		<div v-for="service in services" :key="'service#' + service.id" class="col d-flex">
			<ServiceCard :id="service.id" :title="service.Title" :img="service.ImageUrl" />
		</div>
	</div>
</template>

<script>
	import { Service } from "@prisma/client"
	import ServiceCard from "~/components/ServiceCard.vue"
	export default {
		name: "ServiceList",
		components: {
			ServiceCard
		},
		props: {
			services: {
				type: [Service],
				required: true
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
