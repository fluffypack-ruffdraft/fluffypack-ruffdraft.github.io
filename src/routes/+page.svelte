<script lang="ts">
	import background from "../assets/images/background2.jpg";
	import logo from "../assets/images/logo.png";
	import Icon from "../components/Icon.svelte";
	import DiscordIcon from "../components/icons/DiscordIcon.svelte";
	import Navbar from "../components/Navbar.svelte";
</script>

<img src={background} class="background" alt="Background" />
<Navbar />

<main>
	<img src={logo} class="logo" alt="logo" />

	<div class="buttons">
		<button class="download button">
			<Icon name="Download" />
			<span>Download</span>
		</button>
		<a class="discord button" href="https://discord.gg/pD72nvskve" target="_blank" rel="noopener noreferrer">
			<DiscordIcon stroke="white" style="width: 1rem; height: 1rem;" />
			<span>Discord</span>
		</a>
	</div>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Jersey+25&display=swap");

	main {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	:global(body, html, main) {
		height: 100vh;
		overflow: hidden;
	}

	.logo {
		width: 50%;
	}

	.buttons {
		display: flex;
		gap: 5rem;
	}

	.button {
		color: white;
		padding: 1rem;
		width: 15rem;
		box-shadow: 0.45rem 0.45rem 0px rgba(0, 0, 0, 30%);
		text-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 50%);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		transition: scale 0.1s;
		outline: 6px solid rgba(255, 255, 255, 50%);
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

	.discord {
		background-image: linear-gradient(to bottom right, #5865f2, #3e48ad);
	}

	.download {
		background-image: linear-gradient(to bottom right, #48f796, #3ddc84);
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
