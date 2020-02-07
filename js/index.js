(function() {

	let CREATOR;

	let KEY_WHITE_WIDTH = 30;
	let KEY_BLACK_WIDTH = 20;

	let KEY_WHITE_HEIGHT = 80;
	let KEY_BLACK_HEIGHT = 50;

	let KEY_CURRENT_RADIUS = 6;

	function drawChord(chord) {
		let table = CREATOR.create('table', { border: 0 });

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
		drawTriad(footRow, chord.triad, chord.chord[0]);
		for (let i = 0 ; i < chord.triadInversions.length ; i++) {
			let triad = chord.triadInversions[i];
			drawTriad(footRow, triad, chord.chord[0]);
		}

		main.appendChild(table);
	}

	function drawKeyboard(parentRow, keyboard, triad) {
		let col = CREATOR.create('td', {}, parentRow);
		let svg = CREATOR.create.svg('svg', {height: KEY_WHITE_HEIGHT + 2}, col);
		let delta = keyboard[0] == 'w' ? 0 : KEY_BLACK_WIDTH / 2;
		let x;
		for (let i = 0, j = 0 ; i < keyboard.length ; i++) {
			let key = keyboard[i];
			if (key == 'w') {
				x = 1 + delta + KEY_WHITE_WIDTH * j++;
				CREATOR.create.svg('rect', {x: x, y: 1, width: KEY_WHITE_WIDTH, height: KEY_WHITE_HEIGHT, stroke: '#000', fill: '#F7F4F1', 'stroke-width': 1}, svg);
				if (i == keyboard.length - 1) {
					let svgWidth = x + KEY_WHITE_WIDTH + 1;
					svg.setAttribute('width', svgWidth);
				}
				if (triad.includes(i)) {
					CREATOR.create.svg('circle', {cx: x + KEY_WHITE_WIDTH / 2, cy: KEY_WHITE_HEIGHT - 12, r: KEY_CURRENT_RADIUS, height: 90, stroke: '#222', fill: '#666', 'stroke-width': 1}, svg);
				}
			}
		}
		for (let i = 0, j = 0 ; i < keyboard.length ; i++) {
			let key = keyboard[i];
			if (key == 'w') {
				j++;
			} else if (key == 'b') {
				x = 1 + delta + KEY_WHITE_WIDTH * j - KEY_BLACK_WIDTH / 2;
				CREATOR.create.svg('rect', {x: x, y: 1, width: KEY_BLACK_WIDTH, height: KEY_BLACK_HEIGHT, stroke: '#000', fill: '#AAA', 'stroke-width': 1}, svg);
				if (i == keyboard.length - 1) {
					let svgWidth = x + KEY_BLACK_WIDTH + 1;
					svg.setAttribute('width', svgWidth);
				}
				if (triad.includes(i)) {
					CREATOR.create.svg('circle', {cx: x + KEY_BLACK_WIDTH / 2, cy: KEY_BLACK_HEIGHT - 12, r: KEY_CURRENT_RADIUS, height: 90, stroke: '#222', fill: '#666', 'stroke-width': 1}, svg);
				}
			}
		}
	}

	function drawTriad(parentRow, triad, root) {
		let className = NOTES[triad[0] % 12] == root ? 'bold' : '';
		let col = CREATOR.create('td', {class: className}, parentRow);
		for (let i = 0 ; i < triad.length ; i++) {
			let note = triad[i];
			let noteName = NOTES[note % 12];
			className = noteName == root ? 'italic' : '';
			col.innerHTML += '<span class="' + className + '">' + noteName + '</span> ';
		}
		col.innerHTML = col.innerHTML.trim();
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