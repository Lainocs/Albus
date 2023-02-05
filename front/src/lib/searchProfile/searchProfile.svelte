<script>
    import { faker } from '@faker-js/faker/locale/fr';

    /**
     * Generate fake data - List of people
     * @param {number} numUsers
     * @returns {Array}
     */
    const generateFakeData = () => {
        return {
            _id: faker.datatype.uuid(),
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            avatar: faker.image.avatar(),
            role: faker.helpers.arrayElement(['Étudiant·e', 'Professeur·e']),
        }
    };

    const generatePerson = (numUsers) => {
        return Array.from({ length: numUsers }, generateFakeData);
    };

    let fakePeople = generatePerson(20);
    console.log(fakePeople);


    // Filter setup

    let inputValue = '';
    let searchResult = [];

    $: if(!inputValue) searchResult = []; // <ul> is hidden if inputValue is empty

    const searchPeople = () => {
        if(inputValue) {
            const filteredPeople = fakePeople.filter((people) => {
                return people.name.toLowerCase().includes(inputValue.toLowerCase()) || people.surname.toLowerCase().includes(inputValue.toLowerCase());
            });
            console.log(filteredPeople);
            searchResult = filteredPeople;
        }
    };

    function boldString(text, query) {
        return text.replaceAll(query, `<b class="underline">${query}</b>`);
    }



</script>

<form action="" class="w-3/4 border-albus-orange border-r-2 relative">
    <input type="search"
           name="searchProfile"
           id="searchProfil"
           placeholder="Rechercher une personne..."
           class="h-full w-full px-6 text-xl focus:outline-none"
           bind:value={inputValue}
           on:input={searchPeople}
    >

    <ul class="suggest border-r-2 border-b-2 border-albus-orange w-1/2">
        {#each searchResult as people}
            <li class="flex items-center p-4 bg-white hover:bg-gray-200 hover:cursor-pointer">
                <img src={people.avatar} alt="" class="w-16 h-16 rounded-full">
                <div class="ml-4">
                    <h3 class="text-xl">{@html boldString(people.name, inputValue)} {@html boldString(people.surname, inputValue)}</h3>
                    <p class="text-sm">{people.role}</p>
                </div>
            </li>
        {/each}
    </ul>
</form>


<style lang="sass">
    .suggest
      position: absolute
      top: 78px
      left: 0
      right: 0
      max-height: 400px
      overflow-y: scroll
</style>