<script>
    import "../app.css";
    import Nav from '$lib/nav/navigation.svelte';
</script>

<div class="flex">
    <Nav />
    <main class="py-3 grow px-6 min-h-screen">
        <slot />
    </main>
</div>


