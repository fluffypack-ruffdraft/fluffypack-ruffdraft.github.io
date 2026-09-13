<script lang="ts">
	import background from "../../assets/images/background2.jpg";
	import DiscordIcon from "../../components/icons/DiscordIcon.svelte";
	import MinecraftIcon from "../../components/icons/MinecraftIcon.svelte";
	import Navbar from "../../components/Navbar.svelte";
	import players from "../../lib/data/players";
</script>

<img src={background} class="background" alt="Background" />
<Navbar />
<main>
	{#each players as player}
		<div class="player">
			<img
				src="https://mc-api.io/render/FULL/{player.minecraft}/JAVA?size=256"
				alt="Minecraft skin render"
				width="158"
				height="256"
			/>
			<h2>{player.name}</h2>
			<span class="discord"><DiscordIcon stroke="white" style="width: 1rem; height: 1rem;" /> @{player.discord}</span>
			<span class="minecraft"><MinecraftIcon stroke="white" style="width: 1rem; height: 1rem;" />{player.minecraft}</span>
		</div>
	{/each}
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Jersey+25&display=swap");

	main {
		display: grid;
		width: 70%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 5rem;
		padding: 2rem;
		gap: 3rem;
		grid-template-columns: repeat(4, 1fr);
		flex-wrap: wrap;
	}

	h2 {
		font-family: "Jersey 25";
		font-size: 2rem;
	}

	.discord {
		background-image: linear-gradient(to bottom right, #5865f2, #3e48ad);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-family: "Nunito";
		gap: 1em;
		padding: 0.5em 1em 0.5em 1em;
		border-radius: 0.5em;
		width: 100%;
	}

	.minecraft {
		background-image: linear-gradient(to bottom right, #48e45c, #31b53e);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-family: "Nunito";
		gap: 1em;
		padding: 0.5em 1em 0.5em 1em;
		border-radius: 0.5em;
		width: 100%;
	}

	.player {
		padding: 2rem;
		background-color: white;
		box-shadow: 1rem 1rem 0px rgba(0, 0, 0, 30%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		width: 100%;

		span,
		h2 {
			text-align: center;
		}

		img {
			width: 5vw;
			height: auto;
		}
	}

	:global(body) {
		overflow-y: auto;
		padding-bottom: 10rem;
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
</style>
