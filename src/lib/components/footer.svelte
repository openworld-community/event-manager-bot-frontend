<script>
  import {onMount} from 'svelte'
  import Button from './button.svelte';

  let container;

  const fetchVersion = (async () => {
    const response = await fetch('')
  })
</script>

<footer class="footer">
  <Button
  size='large'
  >
    Меню
  </Button>
  <p>hello im footer</p>
</footer>

<style>
  .footer {
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-columns: 80px 1fr 2px;
  }

</style>