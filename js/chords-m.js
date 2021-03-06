var CHORDS_TMP = [
	{
		"chord": "Cm",
		"notes": [
			[ [0, 3, 7], [3, 7, 12], [2, 7, 10] ]
		],
		"names": [
			[0, -3, 7], [-3, 7, 0], [7, 0, -3]
		],
		"keyboards": [ 0, 1, 2 ]
	},
	{
		"chord": "Dm",
		"notes": [
			[ [2, 5, 9], [0, 4, 9], [4, 9, 12] ]
		],
		"names": [
			[2, 5, 9], [5, 9, 2], [9, 2, 5]
		],
		"keyboards": [ 1, 2, 3 ]
	},
	{
		"chord": "Em",
		"notes": [
			[ [4, 7, 11], [2, 6, 11], [6, 11, 14] ]
		],
		"names": [
			[4, 7, 11], [7, 11, 4], [11, 4, 7]
		],
		"keyboards": [ 1, 2, 3 ]
	},
	{
		"chord": "Fm",
		"notes": [
			[ [0, 3, 7], [3, 7, 12], [0, 5, 8] ]
		],
		"names": [
			[5, 8, 12], [8, 12, 5], [12, 5, 8]
		],
		"keyboards": [ 2, 3, 0 ]
	},
	{
		"chord": "Gm",
		"notes": [
			[ [2, 5, 9], [5, 9, 14], [2, 7, 10] ]
		],
		"names": [
			[7, 10, 2], [10, 2, 7], [2, 7, 10]
		],
		"keyboards": [ 3, 3, 0 ]
	},
	{
		"chord": "Am",
		"notes": [
			[ [4, 7, 11], [0, 4, 9], [4, 9, 12] ]
		],
		"names": [
			[9, 0, 4], [0, 4, 9], [4, 9, 0]
		],
		"keyboards": [ 3, 0, 1 ]
	},
	{
		"chord": "Bm",
		"notes": [
			[ [6, 9, 13], [2, 6, 11], [1, 6, 9] ]
		],
		"names": [
			[11, 2, 6], [2, 6, 11], [6, 11, 2]
		],
		"keyboards": [ 3, 1, 2 ]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
