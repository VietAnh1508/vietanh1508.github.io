<script>
  import '../app.css';
  import bio from '$lib/data/bio.js';

  export const prerender = true;
</script>

<svelte:head>
  <title>{bio.name} - {bio.title}</title>
  <meta name="description" content={bio.bio} />
  
  <!-- Open Graph / Social Media Meta Tags -->
  <meta property="og:title" content="{bio.name} - {bio.title}" />
  <meta property="og:description" content={bio.bio} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={bio.contacts.website} />
</svelte:head>

<slot />
