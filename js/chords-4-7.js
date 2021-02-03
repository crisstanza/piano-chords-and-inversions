var CHORDS_TMP = [
	{
		"chord": "D4/7",
		"notes": [
			[ [2, 6, 7, 9, 12], [1, 2, 4, 7, 9], [2, 4, 7, 9, 13] ],
			[ [4, 7, 9, 13, 14], [0, 2, 6, 7, 9], [] ]
		],
		"fingers": [ [5, 1, 2, 3, 5] ],
		"names": [
			[2, 6, 7, 9, 12], [6, 7, 9, 12, 2], [7, 9, 12, 2, 6],
			[9, 12, 2, 6, 7], [12, 2, 6, 7, 9], ['_', '_', '_', '_', '_']
		],
		"keyboards": [
			1, 2, 3,
			3, 0, 1
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
