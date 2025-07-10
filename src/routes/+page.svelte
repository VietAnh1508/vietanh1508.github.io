<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Bio from '$lib/components/Bio.svelte';
  import RepositoryGrid from '$lib/components/RepositoryGrid.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1">
    <Bio />
    <RepositoryGrid />
  </main>
  <Footer />
</div>
