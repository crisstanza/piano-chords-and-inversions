var CHORDS_TMP = [
	{
		"chord": "Dm7",
		"notes": [
			[ [2, 5, 9, 12], [0, 4, 7, 9], [4, 7, 9, 12] ],
			[ [0, 2, 5, 9], [], [] ]
		],
		"names": [
			[2, 5, 9, 0], [5, 9, 0, 2], [9, 0, 2, 5],
			[0, 12, 5, 9], ['_', '_', '_', '_'], ['_', '_', '_', '_']
		],
		"keyboards": [
			1, 2, 3,
			0, 1, 3
		]
	},
	{
		"chord": "Em7",
		"notes": [
			[ [4, 7, 11, 14], [2, 6, 9, 11], [6, 9, 11, 14] ],
			[ [2, 4, 7, 11], [], [] ]
		],
		"names": [
			[4, 7, 11, 2], [7, 11, 2, 4], [11, 2, 4, 7],
			[2, 4, 7, 11], ['_', '_', '_', '_'], ['_', '_', '_', '_']
		],
		"keyboards": [
			1, 2, 3,
			0, 3, 1
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
