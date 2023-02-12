<script>
    export let data
    const { teachers } = data

</script>
<h1 class="font-bold text-4xl mb-8">Enseignant·es</h1>
<section class="teacher-grid">
    <main class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {#each teachers as teacher}
            <div class="flex gap-4 shadow-2xl px-6 py-8 rounded-xl items-center">
                <img src="{teacher.avatar}" alt="Photo de {teacher.name} {teacher.surname}" class="rounded-full aspect-square w-1/5 object-cover">
                <div>
                    <h2 class="font-bold text-2xl">{teacher.name} {teacher.surname}</h2>
                    <a href="/teachers/{teacher.id}" class="text-albus-orange">Voir le profil</a>
                </div>

            </div>
        {/each}
    </main>
    <aside>

    </aside>
</section>
<style lang="sass">
    .teacher-grid
      display: grid
      grid-template-columns: 3fr 1fr
      grid-gap: 1rem

      @media screen and (max-width: 768px)
        grid-template-columns: 1fr


</style>