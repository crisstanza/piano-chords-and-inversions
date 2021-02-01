var CHORDS_TMP = [
	{
		"chord": "Fm",
		"notes": [
			[ [0, 12, 15, 19] ]
		],
		"names": [
			[5, '', 5, -8, 12]
		],
		"keyboards": [7],
		"inversions": ['']
	},
	{
		"spacer": { "type": "break-line" }
	},
	{
		"chord": "Gb6",
		"notes": [
			[ [1, 17, 20, 22] ]
		],
		"names": [
			[-6, '', -10, -13, -15]
		],
		"keyboards": [7],
		"inversions": ['']
	},
	{
		"chord": "Gbm6",
		"notes": [
			[ [1, 16, 20, 22] ]
		],
		"names": [
			[-6, '', -10.1, -13, -15]
		],
		"keyboards": [7],
		"inversions": ['']
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
