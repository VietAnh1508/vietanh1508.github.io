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

<section class="repository-section">
  <h2>My Projects</h2>
  
  <div class="filters">
    <input 
      type="text" 
      placeholder="Search repositories..." 
      bind:value={searchTerm}
    />
    
    <select bind:value={selectedLanguage}>
      <option value="">All Languages</option>
      {#each languages as language}
        <option value={language}>{language}</option>
      {/each}
    </select>
    
    <button class="reset-button" on:click={resetFilters}>
      Reset Filters
    </button>
  </div>
  
  {#if filteredRepositories.length > 0}
    <div class="repository-grid">
      {#each filteredRepositories as repo}
        <RepositoryCard {...repo} />
      {/each}
    </div>
  {:else}
    <p class="no-results">No repositories found matching your filters.</p>
  {/if}
</section>

<style>
  .repository-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  
  input, select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  input {
    flex: 1;
    min-width: 200px;
  }
  
  .reset-button {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .reset-button:hover {
    background-color: #e0e0e0;
  }
  
  .repository-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .no-results {
    text-align: center;
    color: #666;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 4px;
  }
  
  @media (max-width: 768px) {
    .repository-grid {
      grid-template-columns: 1fr;
    }
    
    .filters {
      flex-direction: column;
    }
  }
</style>