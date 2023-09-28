<script lang="ts">
  export let url: string
</script>

<a 
href={url}
>
<slot />
</a>

<style>
    a {
        display: inline-block;
        text-decoration: none;
    }
</style>