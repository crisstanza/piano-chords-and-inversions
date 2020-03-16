var CHORDS_TMP = [
	{
		"chord": "F#m(5b)/7",
		"notes": [
			[ [1, 4, 7, 11], [4, 7, 11, 13], [0, 4, 6, 9] ],
			[ [4, 6, 9, 12], [], [] ]
		],
		"names": [
			[6, 9, 12, 16], [9, 12, 16, 6], [12, 16, 6, 9],
			[4, 6, 9, 12], ['_', '_', '_', '_'], ['_', '_', '_', '_']
		],
		"keyboards": [
			2, 3, 0,
			1, 1, 1
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
