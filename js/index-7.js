(function() {

	let CREATOR;

	let KEY_WHITE_WIDTH = 30;
	let KEY_BLACK_WIDTH = 20;

	let KEY_WHITE_HEIGHT = 80;
	let KEY_BLACK_HEIGHT = 50;

	let KEY_CURRENT_RADIUS = 6;

	function drawNotes(notes, keyboard, svg) {
		let delta = keyboard[0] == 'w' ? 0 : KEY_BLACK_WIDTH / 2;
		let x;
		for (let i = 0, j = 0 ; i < keyboard.length ; i++) {
			let key = keyboard[i];
			if (key == 'w') {
				x = 1 + delta + KEY_WHITE_WIDTH * j++;
				if (notes && notes.includes(i)) {
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
				if (notes && notes.includes(i)) {
					CREATOR.create.svg('circle', {cx: x + KEY_BLACK_WIDTH / 2, cy: KEY_BLACK_HEIGHT - 12, r: KEY_CURRENT_RADIUS, height: 90, stroke: '#222', fill: '#666', 'stroke-width': 1}, svg);
				}
			}
		}
	}

	function drawKeyboard(keyboard, col, svg) {
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
			}
		}
	}

	function drawNotesNameLine(notesNameLine, footRow, root) {
		for (let i = 0 ; i < notesNameLine.length ; i++) {
			let notesName = notesNameLine[i];
			let col = CREATOR.create('td', {class: 'note-name'}, footRow);
			for (let i = 0 ; i < notesName.length ; i++) {
				let note = notesName[i];
				let names = note > 0 ? NOTES_SHARP : NOTES_BEMOL;
				note = Math.abs(note);
				let noteName = names[note % 12];
				let className = noteName[0] == root[0] ? 'bold' : '';
				col.innerHTML += '<span class="' + className + '">' + noteName + '</span> ';
			}
		}
	}

	function drawNotesLine(notesLine, keyboards, j, bodyRow) {
		let keyboardLine = keyboards[j];
		for (let i = 0 ; i < keyboardLine.length ; i++) {
			let keyboard = keyboardLine[i];
			let col = CREATOR.create('td', {}, bodyRow);
			let svg = CREATOR.create.svg('svg', {height: KEY_WHITE_HEIGHT + 2}, col);
			drawKeyboard(keyboard, col, svg)
			drawNotes(notesLine[i], keyboard, svg)
		}
	}

	function drawChord(chord, keyboards) {
		let notesColumns = chord.notes[0][0].length;
		let table = CREATOR.create('table', { border: 0 });
		let tHead = CREATOR.create('thead', {}, table);
		let headRow = tHead.insertRow(0);
		let headCol = CREATOR.create('th', {colspan: notesColumns}, headRow, chord.chord);
		let tBody = CREATOR.create('tbody', {}, table);
		for (let i = 0 ; i < chord.notes.length ; i++) {
			let bodyRow = tBody.insertRow(tBody.rows.length);
			let notesLine = chord.notes[i];
			drawNotesLine(notesLine, keyboards, i, bodyRow);
			let footRow = tBody.insertRow(tBody.rows.length);
			let notesNamesLine = chord.names[i];
			drawNotesNameLine(notesNamesLine, footRow, chord.chord[0]);
		}
		main.appendChild(table);
	}

	function draw(chords, keyboards) {
		for (let i = 0 ; i < chords.length ; i++) {
			let chord = chords[i];
			let notes = chord.notes[0][0];
			drawChord(chord, keyboards);
		}
	}

	function init(event) {
		CREATOR = io.github.crisstanza.ElementsCreator;
		draw(CHORDS, KEYBOARDS);
	}

	function log(x) { console.log(x); }
	function window_HashChange(event) { var hash = document.location.hash; }
	function window_Load(event) { init(event); }

	window.addEventListener('load', window_Load);
	window.addEventListener('hashchange', window_HashChange);

})();