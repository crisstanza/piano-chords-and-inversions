var KEYBOARDS = [
	'wbwbwwbwbwbw', 'wbwbwwbwbwbwwbwbw', 'wbwbwbwwbwbw', 'wbwbwbwwbwbwwbwbwbw',
	'wbwbwwbwbwbwwbwbwwbwbwbwwbwbw', 'wbwbwbwwbwbwwbwbwbwwbwbwwbwbwbw', 'wbwbwwbwbwbwwbwbwwbwbwbw'
];

var NOTES_BEMOL = [ 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B' ];
var NOTES_SHARP = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];

(function() {

	let CREATOR;

	let KEY_WHITE_WIDTH = 28;
	let KEY_BLACK_WIDTH = 18;

	let KEY_WHITE_HEIGHT = 72;
	let KEY_BLACK_HEIGHT = 42;

	let KEY_CURRENT_RADIUS = 6;

	let NOTE_NAME_BLANK = '____';

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

	function drawNotesNameLine(chordNotesName, footRow, root, inversionIndexPerLine, notesLineLength) {
		for (let i = 0 ; i < notesLineLength ; i++) {
			let keyboardIndex = inversionIndexPerLine * notesLineLength + i;
			if (keyboardIndex < chordNotesName.length) {
				let notesName = chordNotesName[keyboardIndex];
				let col = CREATOR.create('td', {class: 'note-name'}, footRow);
				for (let i = 0 ; i < notesName.length ; i++) {
					let note = notesName[i];
					if (note == '_') {
						col.innerHTML += '<span class="blank">' + NOTE_NAME_BLANK + '</span> ';
					} else {
						let names = note > 0 ? NOTES_SHARP : NOTES_BEMOL;
						note = Math.abs(note);
						let noteName = names[note % 12];
						let className = noteName[0] == root[0] ? 'bold root' : '';
						col.innerHTML += '<span class="' + className + '">' + noteName + '</span> ';
					}
				}
			}
		}
	}

	function drawNotesLine(notesLine, keyboards, bodyRow, chordKeyboards, inversionIndexPerLine, notesLineLength, chordInversions) {
		for (let i = 0 ; i < notesLine.length ; i++) {
			let keyboardIndex = inversionIndexPerLine * notesLineLength + i;
			let keyboard = keyboards[chordKeyboards[keyboardIndex]];
			let inversionlabel = chordInversions ? chordInversions[keyboardIndex] : keyboardIndex + 1;
			inversionlabel = inversionlabel ? '<i>' + inversionlabel + '.</i> ' : '';
			let col = CREATOR.create('td', {}, bodyRow, inversionlabel);
			let svg = CREATOR.create.svg('svg', {height: KEY_WHITE_HEIGHT + 2}, col);
			drawKeyboard(keyboard, col, svg)
			drawNotes(notesLine[i], keyboard, svg)
		}
	}

	function drawSpacer() {
		let br = CREATOR.create('div', { class: 'spacer' });
		main.appendChild(br);
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
			drawNotesLine(notesLine, keyboards, bodyRow, chord.keyboards, i, notesLine.length, chord.inversions);
			let footRow = tBody.insertRow(tBody.rows.length);
			drawNotesNameLine(chord.names, footRow, chord.chord[0], i, notesLine.length);
		}
		main.appendChild(table);
	}

	function draw(chords, keyboards) {
		for (let i = 0 ; i < chords.length ; i++) {
			let chord = chords[i];
			if (chord) {
				if (chord.spacer) {
					drawSpacer();
				} else if (chord.notes) {
					let notes = chord.notes[0][0];
					drawChord(chord, keyboards);
				}
			}
		}
	}

	function highlightFromHash(chord) {
		let tables = main.querySelectorAll('table');
		let length = tables.length;
		for (let i = 0 ; i < length ; i++) {
			let table = tables[i];
			let currentChord = table.querySelector('th').innerHTML;
			if (currentChord == chord) {
				table.setAttribute('class', 'highlight');
			}
		}
	}

	function findChord(chordName, dictionary) {
		let length = dictionary.length;
		for (let i = 0 ; i < length ; i++) {
			let chord = dictionary[i];
			if (chord.chord == chordName) {
				return chord;
			}
		}
	}

	function fixChordsSet(chordsSet, dictionary) {
		let length = chordsSet.length;
		for (let i = 0 ; i < length ; i++) {
			let chord = chordsSet[i];
			if (!chord.spacer) {
				chordsSet[i] = findChord(chord.chord, dictionary);
				chordsSet[i].inversions = chord.inversions;
				chordsSet[i].spacer = chord.spacer;
			}
		}
	}

	function init(event) {
		CREATOR = io.github.crisstanza.ElementsCreator;
		let chordsSet;
		if (typeof CHORDS_SET === 'undefined') {
			chordsSet = CHORDS;
		} else {
			chordsSet = CHORDS_SET;
			fixChordsSet(chordsSet, CHORDS);
		}
		draw(chordsSet, KEYBOARDS);
	}

	function window_HashChange(event) {
		var hash = document.location.hash;
		if (hash) {
			highlightFromHash(hash.slice(1));
		}
	}

	function window_Load(event) {
		init(event);
		window_HashChange(event);
	}

	function log() {
		var length = arguments.length;
		for (let i = 0 ; i < length ; i++) {
			console.log(arguments[i]);
		}
	}

	window.addEventListener('load', window_Load);
	window.addEventListener('hashchange', window_HashChange);

})();
