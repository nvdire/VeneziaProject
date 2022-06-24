<template>
	<div class="main-page">
		<TheHeader />
		<div class="container">
			<nuxt />
		</div>
		<Footer />
	</div>
</template>

<script>
	import TheHeader from "~/components/TheHeader.vue"
	import Footer from "~/components/Footer.vue"
	export default {
		name: "DefaultLayout",
		components: { TheHeader, Footer }
	}
</script>
