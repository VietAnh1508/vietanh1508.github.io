<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Bio from '$lib/components/Bio.svelte';
  import RepositoryGrid from '$lib/components/RepositoryGrid.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="app">
  <Header />
  <main>
    <Bio />
    <RepositoryGrid />
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
  }
  
  :global(*) {
    box-sizing: border-box;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
  }
</style>