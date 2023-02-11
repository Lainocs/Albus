<script>
	const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/users')
		const data = await response.json()
		return data
  }

	let inputValue = '';
	let searchResult = [];

	$: if (!inputValue) searchResult = []; // <ul> is hidden if inputValue is empty

	const searchPeople = async () => {
		if (inputValue) {
			const users = await fetchUsers()
			searchResult = users.filter((people) => {
				let fullname = people.name + ' ' + people.surname;
				let reverseFullname = people.surname + ' ' + people.name;
				return (
					fullname.toLowerCase().includes(inputValue.toLowerCase()) ||
					reverseFullname.toLowerCase().includes(inputValue.toLowerCase())
				);
			});
		}
	};

	function boldString(fullName, query) {
		if (!fullName.toLowerCase().includes(query.toLowerCase())) {
			let reverseFullName = fullName.split(' ').reverse().join(' ');
			return reverseFullName.replace(new RegExp(query, 'gi'), (match) => `<b class="underline">${match}</b>`);
		}
		return fullName.replace(new RegExp(query, 'gi'), (match) => `<b class="underline">${match}</b>`);
	}
</script>

<form action="" class="w-3/4 border-albus-orange border-r-2 relative">
	<input
		type="search"
		name="searchProfile"
		id="searchProfil"
		placeholder="Rechercher une personne..."
		class="h-full w-full px-6 text-xl focus:outline-none"
		autocomplete="off"
		bind:value={inputValue}
		on:input={searchPeople}
	/>

	<ul class="suggest border-r-2 border-b-2 border-albus-orange w-1/2">
		{#each searchResult as people}
			<li class="flex items-center p-4 bg-white hover:bg-gray-200 hover:cursor-pointer">
				<img src={people.avatar} alt="" class="w-16 h-16 rounded-full" />
				<div class="ml-4">
					<h3 class="text-xl">
						{@html boldString(people.name + ' ' + people.surname, inputValue)}
					</h3>
					{#if people.role === "teacher"}
						<p class="text-sm">Enseignant·e</p>
					{:else if people.role === "student"}
						<p class="text-sm">Étudiant·e</p>
					{/if}
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
