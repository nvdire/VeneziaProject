<template>
	<nav class="navbar navbar-expand-lg bg-light shadow-sm mb-4">
		<div class="container">
			<nuxt-link :to="'/'" class="navbar-brand">Venezia</nuxt-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbar"
				aria-controls="navbar"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li v-for="(navItem, navItemIndex) of headerList" :key="`navItem${navItemIndex}`" class="nav-item">
						<nuxt-link :to="navItem.path" class="nav-link" :class="{ active: navItem.path == $route.path }">
							{{ navItem.name }}
						</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "TheHeader",
		data() {
			return {
				headerList: [
					{ name: "Home", path: "/" },
					{ name: "Itineraries", path: "/itineraries" },
					{ name: "Point of interest", path: "/pois" },
					{ name: "Events", path: "/events" },
					{ name: "Services", path: "/services" },
					{ name: "Town", path: "/town" },
					{ name: "About us", path: "/about" },
					{ name: "Contact us", path: "/Contact" }
				]
			}
		}
	}
</script>
