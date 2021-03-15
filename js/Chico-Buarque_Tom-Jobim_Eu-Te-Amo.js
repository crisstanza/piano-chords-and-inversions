var CHORDS_TMP = [
	{
		"globals": {
			"inversions": [''], "keyboards": [7], "names": [ ['a', '', 'a', 'a', 'a'] ]
		},
		"chords": [
			{
				"chord": "G7(4)(9)",
				"notes": [ [ [2, 12, 16, 19] ] ],
				"fingers": [ [5, 1, 2, 4] ]
			},
			{
				"chord": "Eb7M/G",
				"notes": [ [ [2, 9, 10, 17] ] ],
				"fingers": [ [5, 1, 2, 5] ],
				"names": [ ['a', '', 'a', '-a', '-a'] ]
			},
			{
				"chord": "G4(7/9/13)",
				"notes": [ [ [2, 11, 16, 19] ] ],
				"fingers": [ [5, 1, 2, 4] ]
			},
			{
				"chord": "G7(b9)",
				"notes": [ [ [2, 12, 15, 18] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"names": [ ['a', '', 'a', '-a', 'a'] ]
			},
			{
				"spacer": { "type": "space" }
			},
			{
				"chord": "C7M",
				"notes": [ [ [0, 16, 19, 23] ] ],
				"fingers": [ [5, 1, 2, 4] ],
				"keyboards": [6]
			},
			{
				"chord": "B7(4)",
				"notes": [ [ [6, 11, 13, 16] ] ],
				"fingers": [ [3, 1, 2, 4] ]
			},
			{
				"chord": "B7",
				"notes": [ [ [6, 10, 13, 16] ] ],
				"fingers": [ [3, 2, 3, 4] ]
			}
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
