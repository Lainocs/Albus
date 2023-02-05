<script>
    import "../app.css";
    import Nav from '$lib/nav/navigation.svelte';
    import SearchProfile from '$lib/searchProfile/searchProfile.svelte';
</script>

<div class="flex">
    <Nav />
    <div class="grow min-h-screen">
        <section class="h-20 border-b-2 border-albus-orange flex">
            <SearchProfile />
        </section>
        <main class="px-6 py-8">
            <slot />
        </main>
    </div>
</div>
