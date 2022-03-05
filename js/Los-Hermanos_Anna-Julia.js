var CHORDS_TMP = [
	{
		"globals": {
			"inversions": [''], "keyboards": [6], "names": [ ['a', 'a'] ]
		},
		"chords": [
			{
				"chord": "E",
				"notes": [ [ [16, 20] ] ],
				"fingers": [ [2, 4] ]
			},
			{
				"chord": "C#m",
				"notes": [ [ [13, 16] ] ],
				"fingers": [ [1, 2] ]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "G#m",
				"notes": [ [ [8, 11] ] ],
				"fingers": [ [1, 2] ]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "A",
				"notes": [ [ [9, 13] ] ],
				"fingers": [ [1, 2] ]
			},
			{
				"chord": "B",
				"notes": [ [ [11, 15] ] ],
				"fingers": [ [1, 2] ]
			}
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
