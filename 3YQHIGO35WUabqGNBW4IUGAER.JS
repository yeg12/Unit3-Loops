function checkCharacters(text) {
	let counter = 0;

	for (const character of text) {
		counter += 1;
		
	}

	console.log(`Total characters: ${counter}`);
}

checkCharacters("Hello, world!");
