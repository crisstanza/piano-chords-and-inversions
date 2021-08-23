let KEYBOARD_PARTS = [ 'wbwbw', 'wbwbwbw' ];

// @Deprecated
let KEYBOARDS = [
	'wbwbwwbwbwbw',
	'wbwbwwbwbwbwwbwbw',
	'wbwbwbwwbwbw',
	'wbwbwbwwbwbwwbwbwbw',
	'wbwbwwbwbwbwwbwbwwbwbwbwwbwbw',
	'wbwbwbwwbwbwwbwbwbwwbwbwwbwbwbw',
	'wbwbwwbwbwbwwbwbwwbwbwbw',
	'wbwbwbwwbwbwwbwbwbwwbwbw'
];

let NOTES_BEMOL = [ 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B' ];
let NOTES_SHARP = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];

let NOTES_DOUBLE_BEMOL = [ 'Dbb', 'Db', 'Ebb', 'Eb', 'Fb', 'Gbb', 'Gb', 'Abb', 'Ab', 'Bbb', 'Bb', 'Cb' ];
let NOTES_DOUBLE_SHARP = [ 'B#', 'C#', 'C##', 'D#', 'D##', 'E#', 'F#', 'F##', 'G#', 'G##', 'A#', 'A##' ];

(function() {

	let CREATOR;

	let KEY_WHITE_WIDTH = 28;
	let KEY_BLACK_WIDTH = 18;

	let KEY_WHITE_HEIGHT = 72;
	let KEY_BLACK_HEIGHT = 42;

	let KEY_CURRENT_RADIUS = 6;

	let NOTE_NAME_BLANK = '____';

	function drawFingerNumber(cx, cy, fingerNumber, svg) {
		CREATOR.create.svg('text', {'text-anchor': 'middle', 'dominant-baseline': 'middle', x: cx, y: cy - 1, 'font-size': '9pt', 'font-family': 'cursive', stroke: '#F7F4F1'}, svg, fingerNumber);
	}

	function drawNotes(notes, fingers, keyboard, svg) {
		let delta = keyboard[0] == 'w' ? 0 : KEY_BLACK_WIDTH / 2;
		let x;
		let f = 0;
		for (let i = 0, j = 0 ; i < keyboard.length ; i++) {
			let key = keyboard[i];
			if (key == 'w') {
				x = 1 + delta + KEY_WHITE_WIDTH * j++;
				let cx = x + KEY_WHITE_WIDTH / 2;
				let cy = KEY_WHITE_HEIGHT - 12;
				if (notes && notes.includes(i)) {
					CREATOR.create.svg('circle', {cx: cx, cy: cy, r: KEY_CURRENT_RADIUS, height: 90, stroke: '#222', fill: '#666', 'stroke-width': 1}, svg);
					if (fingers) {
						drawFingerNumber(cx, cy, fingers[f++], svg);
					}
				}
			} else if (key == 'b') {
				x = 1 + delta + KEY_WHITE_WIDTH * j - KEY_BLACK_WIDTH / 2;
				let cx = x + KEY_BLACK_WIDTH / 2;
				let cy = KEY_BLACK_HEIGHT - 12;
				if (notes && notes.includes(i)) {
					CREATOR.create.svg('circle', {cx: cx, cy: cy, r: KEY_CURRENT_RADIUS, height: 90, stroke: '#222', fill: '#666', 'stroke-width': 1}, svg);
					if (fingers) {
						drawFingerNumber(cx, cy, fingers[f++], svg);
					}
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

	function drawNotesNameLine(chordNotesName, footRow, root, inversionIndexPerLine, notesLineLength, notes, keyboards) {
		for (let j = 0 ; j < notesLineLength ; j++) {
			let keyboardIndex = inversionIndexPerLine * notesLineLength + j;
			if (keyboardIndex < chordNotesName.length) {
				let notesName = chordNotesName[keyboardIndex];
				let col = CREATOR.create('td', {class: 'note-name'}, footRow);
				let k = 0;
				for (let i = 0 ; i < notesName.length ; i++) {
					let note = notesName[i];
					if (note == '_') {
						col.innerHTML += '<span class="blank">' + NOTE_NAME_BLANK + '</span> ';
					} else {
						let noteName, className;
						if (note === '') {
							noteName = '&nbsp;';
							let className = '';
						} else {
							if (typeof note == 'string') {
								let keyboardId = keyboards[keyboardIndex];
								let keyboardKeys = getKeyboardDefinition(keyboardId);
								let keyboardNotes = notes[keyboardIndex];
								let keyboardNote = keyboardNotes[k];
								let delta = keyboardKeys.startsWith('wbwbww') ? 0 : 5;
								let autoNote = keyboardNote + delta;
								if (note.endsWith('.1')) {
									autoNote += 0.1;
								}
								if (note[0] == '-') {
									autoNote *= -1;
								}
								note = autoNote;
							}
							let notePositive = Math.abs(note);
							let noteInt = Math.floor(notePositive);
							let decimalPart = noteInt > 0 ? note % noteInt : 0;
							let names = note >= 0 ? decimalPart == 0 ? NOTES_SHARP : NOTES_DOUBLE_SHARP : decimalPart == 0 ? NOTES_BEMOL : NOTES_DOUBLE_BEMOL;
							noteName = names[noteInt % 12];
							className = isRoot(noteName, root) ? 'bold root' : '';
							k++;
						}
						col.innerHTML += '<span class="' + className + '">' + noteName + '</span> ';
					}
				}
			}
		}
	}

	function isAccidental(noteName) {
		return noteName[1] == 'b' || noteName[1] == '#';
	}

	function isRoot(noteName, root) {
		if (isAccidental(root)) {
			return noteName[0] == root[0] && noteName[1] == root[1];
		} else {
			return !isAccidental(noteName) && noteName[0] == root[0];
		}
	}

	function getKeyboardDefinition(keyboardId) {
		if (typeof keyboardId == 'string')
			return createKeyboardDefinition(keyboardId);
		else
			return KEYBOARDS[keyboardId];
	}

	function createKeyboardDefinition(keyboardId) {
		let sb = [];
		let startPart = keyboardId[0];
		let halvesCount = keyboardId.substring(1) * 2;
		let delta = startPart == 'C' ? 0 : 1;
		for (let i = delta ; i < halvesCount + delta ; i++) {
			sb.push(KEYBOARD_PARTS[i % 2]);
		}
		return sb.join('');
	}

	function drawNotesLine(notesLine, fingers, bodyRow, chordKeyboards, inversionIndexPerLine, notesLineLength, chordInversions) {
		for (let i = 0 ; i < notesLine.length ; i++) {
			let keyboardIndex = inversionIndexPerLine * notesLineLength + i;
			let keyboardId = chordKeyboards[keyboardIndex];
			let keyboard = getKeyboardDefinition(keyboardId);
			let inversionlabel = chordInversions ? chordInversions[keyboardIndex] : keyboardIndex + 1;
			inversionlabel = inversionlabel ? '<i>' + inversionlabel + '.</i> ' : '';
			let col = CREATOR.create('td', {}, bodyRow, inversionlabel);
			let svg = CREATOR.create.svg('svg', {height: KEY_WHITE_HEIGHT + 2}, col);
			drawKeyboard(keyboard, col, svg)
			let fingersLine = fingers ? fingers[keyboardIndex] : null;
			drawNotes(notesLine[i], fingersLine, keyboard, svg);
		}
	}

	function drawSpacer(type) {
		let spacer = CREATOR.create('div', { class: type });
		main.appendChild(spacer);
	}

	function drawChord(chord) {
		let notesColumns = chord.notes[0][0].length;
		let table = CREATOR.create('table', { border: 0, class: 'chord' });
		let tHead = CREATOR.create('thead', {}, table);
		let headRow = tHead.insertRow(0);
		let headCol = CREATOR.create('th', {colspan: notesColumns}, headRow, chord.chord);
		let tBody = CREATOR.create('tbody', {}, table);
		for (let i = 0 ; i < chord.notes.length ; i++) {
			let bodyRow = tBody.insertRow(tBody.rows.length);
			let notesLine = chord.notes[i];
			drawNotesLine(notesLine, chord.fingers, bodyRow, chord.keyboards, i, notesLine.length, chord.inversions);
			let footRow = tBody.insertRow(tBody.rows.length);
			let root = getRoot(chord.chord);
			drawNotesNameLine(chord.names, footRow, root, i, notesLine.length, notesLine, chord.keyboards);
		}
		main.appendChild(table);
	}

	function getRoot(chord) {
		let root = [chord[0]];
		if (isAccidental(chord)) {
			root.push(chord[1]);
		}
		return root.join('');
	}

	function draw(chords) {
		let count = 0;
		for (let i = 0 ; i < chords.length ; i++) {
			let chord = chords[i];
			if (chord.globals) {
				setGlobals(chord.chords, chord.globals);
				draw(chord.chords);
				count += chord.chords.length;
			} else {
				if (chord.spacer) {
					drawSpacer(chord.spacer.type);
				} else if (chord.notes) {
					drawChord(chord);
					count++;
				}
			}
		}
		chordsCount.innerHTML = '(' + count + ')';
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

	function setGlobals(chords, globals) {
		for (let i = 0 ; i < chords.length ; i++) {
			let chord = chords[i];
			if (!chord.inversions && globals.inversions)
				chord.inversions = globals.inversions;
			if (!chord.keyboards && globals.keyboards)
				chord.keyboards = globals.keyboards;
			if (!chord.names && globals.names)
				chord.names = globals.names;
		}
	}

	function fixChordsSet(chordsSet, dictionary) {
		let length = chordsSet.length;
		for (let i = 0 ; i < length ; i++) {
			let chord = chordsSet[i];
			if (!chord.spacer) {
				chordsSet[i] = findChord(chord.chord, dictionary);
				if (chordsSet[i]) {
					chordsSet[i].inversions = chord.inversions;
					chordsSet[i].spacer = chord.spacer;
				}
			}
		}
	}

	function init(event) {
		CREATOR = io.github.crisstanza.ElementsCreator;
		let chords;
		if (typeof CHORDS_SET === 'undefined') {
			chords = CHORDS;
		} else {
			chords = CHORDS_SET;
			fixChordsSet(chords, CHORDS);
		}
		draw(chords);
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
