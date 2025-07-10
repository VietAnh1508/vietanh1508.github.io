<script lang="ts">
  import bio from '$lib/data/bio';
</script>

<section class="bio">
  <h2>{bio.name}</h2>
  <h3>{bio.title} - {bio.location}</h3>
  <p class="bio-text">
    {bio.bio}
  </p>

  <div class="skills">
    <h3>Skills</h3>
    <ul>
      {#each bio.skills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="contact">
    <h3>Contact</h3>
    <ul>
      <li>
        <a href="mailto:{bio.contacts.email}">Email</a>
      </li>
      <li>
        <a href="{bio.contacts.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </li>
      <li>
        <a href="{bio.contacts.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
      {#if bio.contacts.website}
        <li>
          <a href="{bio.contacts.website}" target="_blank" rel="noopener noreferrer">Website</a>
        </li>
      {/if}
    </ul>
  </div>
</section>

<style>
  .bio {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0 0.5rem;
  }

  .bio-text {
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .skills ul, .contact ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }

  .skills li {
    background-color: #f0f0f0;
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }

  .contact a {
    color: #0077cc;
    text-decoration: none;
  }

  .contact a:hover {
    text-decoration: underline;
  }
</style>
