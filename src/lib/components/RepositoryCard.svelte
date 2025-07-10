<script lang="ts">
  // Define props for the repository card
  export let id: string;
  export let name: string;
  export let description: string;
  export let language: string;
  export let stars: number;
  export let forks: number;
  export let url: string;
  export let topics: string[] = [];
  export let featured: boolean = false;
  export let demoUrl: string | undefined = undefined;
</script>

<div class="repo-card {featured ? 'featured' : ''}">
  <h3 class="repo-name">
    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
    {#if featured}
      <span class="featured-badge">Featured</span>
    {/if}
  </h3>
  
  <p class="repo-description">{description}</p>
  
  <div class="repo-meta">
    {#if language}
      <span class="language">{language}</span>
    {/if}
    
    <span class="stars">⭐ {stars}</span>
    <span class="forks">🍴 {forks}</span>
  </div>
  
  {#if topics.length > 0}
    <div class="topics">
      {#each topics as topic}
        <span class="topic">{topic}</span>
      {/each}
    </div>
  {/if}
  
  {#if demoUrl}
    <a href={demoUrl} class="demo-link" target="_blank" rel="noopener noreferrer">
      View Demo
    </a>
  {/if}
</div>

<style>
  .repo-card {
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 1.5rem;
    background-color: #fff;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  
  .repo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .featured {
    border-color: #ffcc00;
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.3);
  }
  
  .repo-name {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .repo-name a {
    color: #0366d6;
    text-decoration: none;
  }
  
  .repo-name a:hover {
    text-decoration: underline;
  }
  
  .featured-badge {
    background-color: #ffcc00;
    color: #000;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    font-weight: normal;
  }
  
  .repo-description {
    color: #586069;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .repo-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    color: #586069;
  }
  
  .topics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .topic {
    background-color: #f1f8ff;
    color: #0366d6;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
  }
  
  .demo-link {
    display: inline-block;
    background-color: #0366d6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.875rem;
    transition: background-color 0.2s;
  }
  
  .demo-link:hover {
    background-color: #0255b3;
  }
</style>