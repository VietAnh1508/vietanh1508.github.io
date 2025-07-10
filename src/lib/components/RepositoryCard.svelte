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

<div class={`border border-gray-200 rounded-md p-6 bg-white transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg ${featured ? 'border-yellow-400 shadow-yellow-200' : ''}`}>
  <h3 class="mt-0 mb-2 text-xl flex items-center gap-2">
    <a href={url} target="_blank" rel="noopener noreferrer" class="text-blue-600 no-underline hover:underline">{name}</a>
    {#if featured}
      <span class="bg-yellow-400 text-black text-xs py-1 px-2 rounded-full font-normal">Featured</span>
    {/if}
  </h3>

  <p class="text-gray-600 mb-4 leading-relaxed">{description}</p>

  <div class="flex gap-4 mb-4 text-sm text-gray-600">
    {#if language}
      <span>{language}</span>
    {/if}

    <span>⭐ {stars}</span>
    <span>🍴 {forks}</span>
  </div>

  {#if topics.length > 0}
    <div class="flex flex-wrap gap-2 mb-4">
      {#each topics as topic}
        <span class="bg-blue-50 text-blue-600 text-xs py-1 px-2 rounded-full">{topic}</span>
      {/each}
    </div>
  {/if}

  {#if demoUrl}
    <a 
      href={demoUrl} 
      class="inline-block bg-blue-600 text-white py-2 px-4 rounded text-sm no-underline transition-colors hover:bg-blue-700" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      View Demo
    </a>
  {/if}
</div>
