<script lang="ts">
	import background from "../../assets/images/background2.jpg";
	import highlights from "../../assets/images/highlights.png";
	import modList from "../../assets/images/mod_list.png";
	import Icon from "../../components/Icon.svelte";
	import Navbar from "../../components/Navbar.svelte";
	import { mods } from "../../lib/mods";

	let searchText = $state("");
</script>

<img src={background} class="background" alt="Background" />
<Navbar />
<main>
	<button class="download">
		<Icon size={25} name="Download" />
		<span>Download Modpack Zip</span>
	</button>
	<div>
		<img src={highlights} class="title" alt="Highlights" />
	</div>

	<div class="highlighted-mods">
		{#each mods.filter(mod => mod.tags.includes("Highlight")) as mod}
			<a class="highlighted-mod" href={mod.link} target="_blank" rel="noopener noreferrer">
				<img src={mod.image} alt={mod.name} />
				<div class="highlighted-mod-info">
					<h3>{mod.name}</h3>
					<p>{mod.description}</p>
				</div>
			</a>
		{/each}
	</div>

	<div>
		<img src={modList} class="title" alt="Full Mod List" />
	</div>

	<div class="search">
		<input bind:value={searchText} placeholder="Search..." />
		<button>
			<Icon name="Funnel" />
		</button>
	</div>

	<div class="mod-list">
		{#each mods as mod}
			<a class="listed-mod" href={mod.link} target="_blank" rel="noopener noreferrer">
				<img src={mod.image} alt={mod.name} />
				<div class="mod-info">
					<h3>{mod.name}</h3>
					<p>{mod.description}</p>
				</div>
			</a>
		{/each}
	</div>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Jersey+25&display=swap");

	.download {
		color: white;
		padding: 1rem;
		width: 25rem;
		margin-top: 5rem;
		margin-left: auto;
		margin-right: auto;
		box-shadow: 0.45rem 0.45rem 0px rgba(0, 0, 0, 30%);
		text-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 50%);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
		transition: scale 0.1s;
		outline: 6px solid rgba(255, 255, 255, 50%);
		background-image: linear-gradient(to bottom right, #48f796, #3ddc84);
		outline-offset: -6px;

		span {
			font-size: 1.25rem;
			font-family: "Jersey 25";
			transform: scaleX(130%);
		}

		&:hover {
			scale: 103%;
		}
	}

	input {
		background: #eff1f5;
		height: 100%;
		padding-left: 1rem;
		box-shadow: 0.45rem 0.45rem 0rem 0rem rgba(0, 0, 0, 30%);
		flex-grow: 1;
		font-family: "Nunito";
	}

	.title {
		height: 3.5rem;
		margin-bottom: 1rem;
		margin-top: 5rem;
		width: auto;
	}

	.search {
		width: 100%;
		display: flex;
		gap: 0.5rem;
		height: 2.5rem;
		margin-bottom: 3rem;

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0.45rem 0.45rem 0rem 0rem rgba(0, 0, 0, 30%);
			background: #eff1f5;
			height: 100%;
			aspect-ratio: 1;
		}
	}

	.background {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0px;
		left: 0px;
		filter: saturate(70%) blur(5px) brightness(70%);
		z-index: -100;
	}

	main {
		padding-left: 25rem;
		padding-right: 25rem;
		padding-bottom: 5rem;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.listed-mod {
		box-shadow: 0.45rem 0.45rem 0rem 0rem rgba(0, 0, 0, 30%);
		display: flex;
		gap: 1rem;
		align-items: center;
		height: 5rem;
		background: #eff1f5;
		padding: 0.5rem;
		outline: 6px solid rgba(255, 255, 255, 100%);
		outline-offset: -6px;
		transition: scale 0.1s;

		&:hover {
			scale: 101%;
		}

		h3 {
			font-size: 1.35rem;
			color: #4c4f69;
			font-family: "Jersey 25";
			transform: scaleX(115%);
			transform-origin: 0% 50%;
		}

		p {
			color: #8c8fa1;
			font-family: "Nunito";
		}

		img {
			height: 100%;
		}

		.mod-info {
			display: flex;
			flex-direction: column;
		}
	}

	.highlighted-mods {
		display: flex;
		width: 100%;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.mod-list {
		display: flex;
		height: fit-content;
		flex-direction: column;
		gap: 1rem;
	}

	.highlighted-mod {
		width: 32%;
		height: 10rem;
		box-shadow: 0.45rem 0.45rem 0rem 0rem rgba(0, 0, 0, 30%);
		padding: 2rem;
		background-image: linear-gradient(to bottom right, #eff1f5, #dce0e8);
		display: flex;
		align-items: center;
		gap: 1.5rem;
		transition: scale 0.1s;
		cursor: pointer;
		outline: 6px solid rgba(255, 255, 255, 100%);
		outline-offset: -6px;

		img {
			height: 80%;
			width: auto;
		}

		&:hover {
			scale: 102%;
		}
	}

	.highlighted-mod-info {
		width: 75%;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;

		h3 {
			width: 85%;
			line-height: 1em;
			color: #4c4f69;
			font-family: "Jersey 25";
			font-size: 1.5rem;
			transform: scaleX(115%);
			transform-origin: 0% 50%;
		}

		p {
			color: #8c8fa1;
			width: 100%;
			font-size: 0.85rem;
			font-family: "Nunito";
		}
	}
</style>
