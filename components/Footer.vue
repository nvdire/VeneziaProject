<template>
	<footer class="navbar navbar-expand bg-secondary shadow mt-4">
		<div class="container">
			<nuxt-link :to="'/'" class="navbar-brand text-light">Venezia</nuxt-link>
			<ul class="navbar-nav flex-wrap me-auto mb-2 mb-md-0">
				<li v-for="(navItem, navItemIndex) of headerList" :key="`navItem${navItemIndex}`" class="nav-item">
					<nuxt-link :to="navItem.path" class="nav-link text-light">{{ navItem.name }}</nuxt-link>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "TheFooter",
		data() {
			return {
				headerList: [
					{ name: "Town", path: "/town" },
					{ name: "About us", path: "/about" },
					{ name: "Contact us", path: "/Contact" }
				]
			}
		}
	}
</script>

<style scoped>
	.header {
		background: orange;
	}
	.logo {
		color: white;
		font-size: 32px;
	}
</style>
