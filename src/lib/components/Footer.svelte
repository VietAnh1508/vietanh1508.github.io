<script lang="ts">
  import bio from '$lib/data/bio.js';
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="footer-content">
    <div class="copyright">
      &copy; {currentYear} {bio.name}. All rights reserved.
    </div>

    <div class="social-links">
      <a href={bio.contacts.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={bio.contacts.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="mailto:{bio.contacts.email}">
        Email
      </a>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #f5f5f5;
    padding: 2rem 0;
    margin-top: 4rem;
    border-top: 1px solid #e1e4e8;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .copyright {
    color: #586069;
    font-size: 0.9rem;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-links a {
    color: #0366d6;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
  }

  .social-links a:hover {
    color: #0255b3;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
