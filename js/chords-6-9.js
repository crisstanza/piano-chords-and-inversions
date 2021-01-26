var CHORDS_TMP = [
	{
		"chord": "C6/9",
		"notes": [
			[ [0, 4, 7, 9, 14], [4, 7, 9, 14, 24], [2, 4, 9, 19, 23] ],
			[ [4, 9, 19, 23, 26], [2, 12, 16, 19, 21], [] ]
		],
		"names": [
			[0, 4, 7, 9, 14], [4, 7, 9, 14, 0], [7, 9, 14, 0, 4],
			[9, 14, 0, 4, 7], [14, 0, 4, 7, 9], ['_', '_', '_', '_', '_']
		],
		"keyboards": [
			1, 4, 5,
			5, 6, 4
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
