<script lang="ts">
  import bio from '$lib/data/bio.js';
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-100 py-8 mt-16 border-t border-gray-200">
  <div class="max-w-6xl mx-auto px-8 flex justify-between items-center flex-wrap gap-4 md:flex-row flex-col md:text-left text-center">
    <div class="text-gray-600 text-sm">
      &copy; {currentYear} {bio.name}. All rights reserved.
    </div>

    <div class="flex gap-6">
      <a 
        href={bio.contacts.github} 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-blue-600 no-underline text-sm transition-colors hover:text-blue-800 hover:underline"
      >
        GitHub
      </a>
      <a 
        href={bio.contacts.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-blue-600 no-underline text-sm transition-colors hover:text-blue-800 hover:underline"
      >
        LinkedIn
      </a>
      <a 
        href="mailto:{bio.contacts.email}"
        class="text-blue-600 no-underline text-sm transition-colors hover:text-blue-800 hover:underline"
      >
        Email
      </a>
    </div>
  </div>
</footer>
