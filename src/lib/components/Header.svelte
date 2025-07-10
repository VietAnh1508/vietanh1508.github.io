<script lang="ts">
  // Import profile image if needed
  // import profileImage from '/static/profile-image.jpg';
  import bio from '$lib/data/bio.js';
</script>

<header>
  <div class="profile">
    <!-- Profile image -->
    <!-- <img src={profileImage} alt="Profile" /> -->
    <h1>{bio.name}</h1>
    <p>{bio.title}</p>
    <p class="location">{bio.location}</p>
  </div>
  <!-- Navigation if needed -->
</header>

<style>
  header {
    padding: 2rem 0;
    text-align: center;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    color: #666;
  }

  .location {
    font-size: 1rem;
    color: #888;
  }
</style>
