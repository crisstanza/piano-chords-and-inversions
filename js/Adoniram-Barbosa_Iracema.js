var CHORDS_TMP = [
	{
		"globals": {
			"inversions": [''],
			"keyboards": [6, 6],
			"names": [
				['a', '', 'a', 'a', 'a'],
				['a', '', 'a', 'a', 'a']
			]
		},
		"chords": [
			{
				"chord": "Em",
				"notes": [ [ [4, 16, 19, 23], [4, 11, 16, 19] ] ],
				"fingers": [ [5, 1, 2, 4], [5, 1, 2, 4] ]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "Bm",
				"notes": [ [ [6, 21, 25, 30], [6, 18, 21, 25] ] ],
				"fingers": [ [5, 1, 2, 5], [5, 1, 2, 4] ],
				"keyboards": [5, 5]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "Bm/A",
				"notes": [ [ [4, 21, 25, 30], [4, 18, 21, 25] ] ],
				"fingers": [ [5, 1, 2, 5], [5, 1, 2, 4] ],
				"keyboards": [5, 5]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "B7",
				"notes": [ [ [6, 22, 25, 28], [6, 16, 22, 25] ] ],
				"fingers": [ [5, 1, 2, 5], [5, 1, 2, 4] ],
				"keyboards": [5, 5]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "F#7",
				"notes": [ [ [1, 11, 17, 20] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": [7]
			},
			{
				"chord": "F#m6",
				"notes": [ [ [1, 9, 17, 20] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": [7]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "F#<sup>&#248;</sup>", // &oslash;
				"notes": [ [ [1, 7, 11, 16] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": [3]
			},
			{
				"chord": "C",
				"notes": [ [ [0, 16, 19, 24] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": [4]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "G",
				"notes": [ [ [2, 14, 18, 21], [2, 21, 26, 30] ] ],
				"fingers": [ [5, 1, 2, 4], [5, 1, 2, 4] ],
				"keyboards": [7, 5]
			}
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
