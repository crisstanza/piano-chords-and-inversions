(function() {

	var CREATOR;

	function drawChord(chord) {
		let table = CREATOR.create('table', { border: 1 });

		let tHead = CREATOR.create('thead', {}, table);
		let headRow = tHead.insertRow(0);
		let headCol = CREATOR.create('th', {colspan: chord.inversions.length + 1}, headRow, chord.chord);

		let tBody = CREATOR.create('tbody', {}, table);
		let bodyRow = tBody.insertRow(0);
		drawKeyboard(bodyRow, KEYBOARDS.triad, chord.triad);
		for (let i = 0 ; i < KEYBOARDS.inversions.length ; i++) {
			let keyboard = KEYBOARDS.inversions[i];
			let triad = chord.inversions[i];
			drawKeyboard(bodyRow, keyboard, triad);
		}

		let tFoot = CREATOR.create('tfoot', {}, table);
		let footRow = tFoot.insertRow(0);
		drawTriad(footRow, chord.triad);
		for (let i = 0 ; i < chord.inversions.length ; i++) {
			let triad = chord.inversions[i];
			drawTriad(footRow, triad);
		}

		main.appendChild(table);
	}

	function drawKeyboard(parentRow, keyboard, triad) {
		let col = CREATOR.create('td', {}, parentRow);
		let svg = CREATOR.create.svg('svg', {}, col);
	}

	function drawTriad(parentRow, triad) {
		let col = CREATOR.create('td', {}, parentRow, triad);
	}

	function drawChords(chords) {
		for (let i = 0 ; i < chords.length ; i++) {
			let chord = chords[i];
			drawChord(chord)
		}
	}

	function init(event) {
		CREATOR = io.github.crisstanza.ElementsCreator;
		drawChords(CHORDS);
	}

	function window_HashChange(event) {
		var hash = document.location.hash;
		console.log(hash);
	}

	function window_Load(event) {
		init(event);
	}

	window.addEventListener('load', window_Load);
	window.addEventListener('hashchange', window_HashChange);

})();