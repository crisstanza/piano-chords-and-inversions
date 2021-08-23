var CHORDS_TMP = [
	{
		"globals": {
			"inversions": [''],
			"keyboards": ['C2'],
			"names": [ ['a', '', 'a', 'a', 'a']	]
		},
		"chords": [
			{
				"chord": "C#6",
				"notes": [ [ [1, 13, 17, 22] ] ],
				"fingers": [ [5, 1, 2, 5] ]
			},
			{
				"chord": "C#6/9/#11",
				"notes": [ [ [1, 10, 15, 19] ] ],
				"fingers": [ [5, 1, 2, 5] ]
			},
			{
				"chord": "C#m6/E",
				"notes": [ [ [4, 13, 16, 22] ] ],
				"fingers": [ [5, 1, 2, 5] ]
			},
			{
				"chord": "D#m7/9",
				"notes": [ [ [3, 13, 17, 19] ] ],
				"fingers": [ [5, 1, 2, 4] ]
			},
			{
				"chord": "E6",
				"notes": [ [ [4, 16, 20, 25] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": ['C2.5']
			},
			{
				"chord": "Edim",
				"notes": [ [ [4, 16, 19, 22] ] ],
				"fingers": [ [5, 1, 2, 3] ],
				"names": [ ['a', '', 'a', 'a', '-a'] ]
			},
			{
				"chord": "E7M",
				"notes": [ [ [4, 15, 20, 23] ] ],
				"fingers": [ [5, 1, 2, 4] ]
			},
			{
				"chord": "F#6",
				"notes": [ [ [1, 13, 17, 22] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": ['G2.5']
			},
			{
				"chord": "Gm7/b5",
				"notes": [ [ [2, 12, 17, 20] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": ['G2'],
				"names": [ ['a', '', 'a', 'a', '-a'] ]
			},
			{
				"chord": "Gdim/9",
				"notes": [ [ [2, 11, 17, 20] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": ['G2'],
				"names": [ ['a', '', '-a.1', 'a', '-a'] ]
			},
			{
				"chord": "G#7/4/9",
				"notes": [ [ [3, 8, 13, 17] ] ],
				"fingers": [ [5, 1, 2, 5] ],
				"keyboards": ['G2']
			},
			{
				"chord": "G#7/9",
				"notes": [ [ [3, 7, 13, 17] ] ],
				"fingers": [ [5, 1, 2, 5] ],
				"keyboards": ['G2'],
				"names": [ ['a', '', 'a.1', 'a', 'a'] ]
			},
			{
				"chord": "G#7/9/13",
				"notes": [ [ [3, 7, 12, 17] ] ],
				"fingers": [ [5, 1, 2, 5] ],
				"keyboards": ['G2'],
				"names": [ ['a', '', 'a.1', 'a', 'a'] ]
			},
			{
				"chord": "A7/E",
				"notes": [ [ [4, 13, 16, 19] ] ],
				"fingers": [ [5, 1, 2, 4] ]
			},
			{
				"chord": "B7/4/9",
				"notes": [ [ [6, 11, 16, 20] ] ],
				"fingers": [ [5, 1, 2, 5] ],
				"keyboards": ['G2']
			},
			{
				"chord": "B7/9",
				"notes": [ [ [6, 10, 16, 20] ] ],
				"fingers": [ [5, 1, 2, 5] ],
				"keyboards": ['G2']
			}
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
