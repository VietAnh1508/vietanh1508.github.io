<script lang="ts">
  import RepositoryCard from './RepositoryCard.svelte';

  // Import repositories data
  // import repositories from '$lib/data/repositories';

  // Sample repositories for demonstration
  const repositories = [
    {
      id: '1',
      name: 'Sample Repository 1',
      description: 'This is a sample repository description.',
      language: 'JavaScript',
      stars: 10,
      forks: 5,
      url: 'https://github.com/username/repo1',
      topics: ['javascript', 'web'],
      featured: true
    },
    {
      id: '2',
      name: 'Sample Repository 2',
      description: 'Another sample repository description.',
      language: 'TypeScript',
      stars: 5,
      forks: 2,
      url: 'https://github.com/username/repo2',
      topics: ['typescript', 'svelte'],
      featured: false
    }
  ];

  // Filter state
  let selectedLanguage = $state('');
  let searchTerm = $state('');

  // Computed filtered repositories
  let filteredRepositories = $derived(repositories.filter(repo => {
    const matchesLanguage = !selectedLanguage || repo.language === selectedLanguage;
    const matchesSearch = !searchTerm || 
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesLanguage && matchesSearch;
  }));

  // Get unique languages for filter
  let languages = $derived([...new Set(repositories.map(repo => repo.language))]);

  // Reset filters
  function resetFilters() {
    selectedLanguage = '';
    searchTerm = '';
  }
</script>

<section class="max-w-6xl mx-auto p-8">
  <h2 class="text-3xl mb-6">My Projects</h2>

  <div class="flex flex-wrap gap-4 mb-8 md:flex-row flex-col">
    <input 
      type="text" 
      placeholder="Search repositories..." 
      bind:value={searchTerm}
      class="p-2 border border-gray-300 rounded text-base flex-1 min-w-[200px]"
    />

    <select 
      bind:value={selectedLanguage}
      class="p-2 border border-gray-300 rounded text-base"
    >
      <option value="">All Languages</option>
      {#each languages as language}
        <option value={language}>{language}</option>
      {/each}
    </select>

    <button 
      class="bg-gray-100 border border-gray-300 rounded p-2 px-4 cursor-pointer transition-colors hover:bg-gray-200"
      on:click={resetFilters}
    >
      Reset Filters
    </button>
  </div>

  {#if filteredRepositories.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
      {#each filteredRepositories as repo}
        <RepositoryCard {...repo} />
      {/each}
    </div>
  {:else}
    <p class="text-center text-gray-600 p-8 bg-gray-50 rounded">No repositories found matching your filters.</p>
  {/if}
</section>
