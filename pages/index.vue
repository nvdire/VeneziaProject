<template>
	<div>
		<h1 class="display-2 mb-4">Venice Itinerary, Services, Points of Interest and Events</h1>
		<img src="https://i.postimg.cc/x035czxB/Grand-Canal-Venice.jpg" class="img-fluid rounded shadow mb-3 w-100" />
		<div class="row row-cols-1 row-cols-md-2 g-3">
			<div class="col">
				<img src="https://i.postimg.cc/6W60RpFq/venice-attractions-hero.png" class="img-fluid rounded shadow w-100" />
			</div>
			<div class="col"><img src="https://i.postimg.cc/qpnjHY8J/venice-by-air.jpg" class="img-fluid rounded shadow w-100" /></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "IndexPage",
		components: {},
		async asyncData({ $axios }) {
			const { data } = await $axios.get("/api/page-info/index")
			const title = data.title
			const image = data.image
			const description = data.description
			return {
				title,
				description,
				image
			}
		}
	}
</script>
