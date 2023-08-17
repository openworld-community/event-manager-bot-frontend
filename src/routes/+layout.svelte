<script>
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import './layout.css'
</script>

<Header></Header>
<div class="main">
    <slot as='main'></slot>
</div>
<Footer></Footer>