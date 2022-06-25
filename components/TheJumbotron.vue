<template>
	<div class="p-5 mb-4 bg-light rounded-3 border-bottom border-3">
		<div class="container-fluid">
			<h1 class="display-5 fw-semibold">{{ title }}</h1>
			<p class="col-md-8 fs-4">{{ description }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TheJumbotron",
		props: {
			title: {
				type: String,
				required: true
			},
			description: {
				type: String,
				required: true
			}
		}
	}
</script>
