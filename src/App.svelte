<script>
  // import le store meteo
  import { meteo, getMeteo } from './stores/meteo.js';
  import { search } from './stores/search.js';
  import { onMount } from 'svelte';
</script>

<main>
  <h1>Appli Météo</h1>

  <div class="main">
    <div class="meteo">
      <!-- Champs de recherche -->
      <input type="text" bind:value={$search} placeholder="Ville" />
      <button on:click={getMeteo}>Rechercher</button>

      <div class="container">
        <!-- Affichage de la météo -->
        <div class="meteo">
          {#if $meteo}
            <h2>{$meteo.name}</h2>
            <p>{$meteo.weather[0].description}</p>
            <p>{$meteo.main.temp}°C</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
