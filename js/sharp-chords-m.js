var CHORDS_TMP = [
	{
		"chord": "F#m",
		"notes": [
			[ [1, 4, 8], [4, 8, 13], [1, 6, 9] ]
		],
		"names": [
			[6, 9, 1], [9, 1, 6], [1, 6, 9]
		],
		"keyboards": [ 2, 3, 0 ]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
