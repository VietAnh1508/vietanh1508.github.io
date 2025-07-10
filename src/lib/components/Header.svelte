<script lang="ts">
  // Import profile image if needed
  // import profileImage from '/static/profile-image.jpg';
  import bio from '$lib/data/bio.js';
</script>

<header class="py-8 text-center">
  <div class="flex flex-col items-center gap-4">
    <!-- Profile image -->
    <!-- <img src={profileImage} alt="Profile" /> -->
    <h1 class="m-0 text-4xl">{bio.name}</h1>
    <p class="m-0 text-xl text-gray-600">{bio.title}</p>
    <p class="text-base text-gray-500">{bio.location}</p>
  </div>
  <!-- Navigation if needed -->
</header>
