<script>
    import {page} from "$app/stores";

    let routes = [
        {
            name: "Accueil",
            slug: ""
        },
        {
            name: "Planning",
            slug: "planning"
        },
        {
            name: "Cours",
            slug: "cours"
        },
        {
            name: "Notes",
            slug: "notes"
        }
    ];
    $: currentRoute = $page.url.pathname;

</script>

<header class="w-[280px] bg-white border-r border-gray-200 h-screen">
    <div class="flex flex-col items-center pt-3">
        <img src="/logo.jpg" alt="Logo" class="w-1/4">
    </div>
    {#if routes}
    <ul class="mt-10">
        {#each routes as route}
            <li
                class="py-3 px-6 mx-3 mb-3 rounded transition hover:bg-albus-orange hover:text-white"
                class:active={currentRoute === "/" + route.slug}>
                <a href="/{route.slug}" class="block">{route.name}</a>
            </li>
        {/each}
    </ul>
    {/if}
</header>

<style lang="sass">

    .active
        background: theme("colors.albus-orange")
        a
            color: theme("colors.white")

</style>