<script lang="ts">
  import bio from '$lib/data/bio';
</script>

<section class="max-w-3xl mx-auto p-8">
  <h2 class="text-3xl mb-4">{bio.name}</h2>
  <h3 class="text-xl mt-6 mb-2">{bio.title} - {bio.location}</h3>
  <p class="leading-relaxed mb-8">
    {bio.bio}
  </p>

  <div>
    <h3 class="text-xl mt-6 mb-2">Skills</h3>
    <ul class="flex flex-wrap gap-4 list-none p-0">
      {#each bio.skills as skill}
        <li class="bg-gray-100 py-2 px-4 rounded-full">{skill}</li>
      {/each}
    </ul>
  </div>

  <div>
    <h3 class="text-xl mt-6 mb-2">Contact</h3>
    <ul class="flex flex-wrap gap-4 list-none p-0">
      <li>
        <a href="mailto:{bio.contacts.email}" class="text-blue-600 no-underline hover:underline">Email</a>
      </li>
      <li>
        <a href="{bio.contacts.linkedin}" target="_blank" rel="noopener noreferrer" class="text-blue-600 no-underline hover:underline">LinkedIn</a>
      </li>
      <li>
        <a href="{bio.contacts.github}" target="_blank" rel="noopener noreferrer" class="text-blue-600 no-underline hover:underline">GitHub</a>
      </li>
      {#if bio.contacts.website}
        <li>
          <a href="{bio.contacts.website}" target="_blank" rel="noopener noreferrer" class="text-blue-600 no-underline hover:underline">Website</a>
        </li>
      {/if}
    </ul>
  </div>
</section>
