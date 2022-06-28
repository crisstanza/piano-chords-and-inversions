var CHORDS_TMP = [
	{
		"globals": {
			"inversions": [''], "keyboards": ['E2'], "names": [ ['a', '', 'a', 'a', 'a'] ]
		},
		"chords": [
			{
				"chord": "A",
				"notes": [ [ [4, 16, 20, 23] ] ],
				"fingers": [ [5, 1, 2, 4] ]
			},
			{
				"chord": "C#m",
				"notes": [ [ [1, 8, 13, 16] ] ],
				"fingers": [ [3, 1, 2, 4] ],
				"keyboards": ['C2']
			},
			{
				"chord": "D",
				"notes": [ [ [2, 9, 14, 18] ] ],
				"fingers": [ [2, 1, 2, 4] ],
				"keyboards": ['C2']
			},
			{
				"chord": "E",
				"notes": [ [ [4, 11, 16, 20] ] ],
				"fingers": [ [1, 1, 2, 4] ],
				"keyboards": ['C2']
			},
			{
				"spacer": { "type": "space" }
			},
			{
				"chord": "A",
				"notes": [ [ [4, 16, 20, 23] ] ],
				"fingers": [ [5, 1, 2, 4] ]
			},
			{
				"chord": "D",
				"notes": [ [ [2, 9, 14, 18] ] ],
				"fingers": [ [1, 1, 2, 4] ],
				"keyboards": ['C2']
			},
			{
				"chord": "F#m",
				"notes": [ [ [1, 16, 20, 25] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": ['E2.5']
			},
			{
				"chord": "C#m",
				"notes": [ [ [1, 8, 13, 16] ] ],
				"fingers": [ [2, 1, 2, 5] ],
				"keyboards": ['C2']
			},
			{
				"spacer": { "type": "space" }
			},
			{
				"chord": "C#m",
				"notes": [ [ [1, 13, 16, 20] ] ],
				"fingers": [ [2, 1, 2, 4] ],
				"keyboards": ['C2']
			},
			{
				"chord": "Bm",
				"notes": [ [ [6, 18, 21, 25] ] ],
				"fingers": [ [1, 1, 2, 3] ],
				"keyboards": ['E2.5']
			},
			{
				"chord": "E7",
				"notes": [ [ [4, 11, 14, 20] ] ],
				"fingers": [ [1, 1, 2, 3] ],
				"keyboards": ['C2']
			},
			{
				"spacer": { "type": "space" }
			},
			{
				"chord": "C#7",
				"notes": [ [ [1, 8, 11, 17] ] ],
				"fingers": [ [3, 1, 2, 4] ],
				"keyboards": ['C2']
			},
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
