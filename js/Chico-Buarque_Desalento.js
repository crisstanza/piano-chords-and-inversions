var CHORDS_TMP = [
	{
		"globals": {
			"inversions": ['']
		},
		"chords": [
			{
				"chord": "Fm",
				"notes": [ [ [0, 12, 15, 19] ] ],
				"fingers": [ [5, 1, 2, 3] ],
				"names": [ [5, '', 5, -8, 12] ],
				"keyboards": [7]
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "Gb(6)",
				"notes": [ [ [1, 17, 20, 22] ] ],
				"fingers": [ [4, 1, 3, 4] ],
				"names": [ [-6, '', -10, -13, -15] ],
				"keyboards": [7],
			},
			{
				"chord": "Gbm(6)",
				"notes": [ [ [1, 16, 20, 22] ] ],
				"fingers": [ [4, 1, 2, 3] ],
				"names": [ [-6, '', -10.1, -13, -15] ],
				"keyboards": [7],
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "Bbm(7M)",
				"notes": [ [ [5, 16, 20, 24] ] ],
				"fingers": [ [2, 1, 2, 3] ],
				"names": [ [-10, '', 9, -13, 17] ],
				"keyboards": [5],
			},
			{
				"chord": "Bbm(7m)",
				"notes": [ [ [3, 15, 20, 24] ] ],
				"fingers": [ [3, 1, 2, 3] ],
				"names": [ [-8, '', -8, -13, 17] ],
				"keyboards": [5],
			},
			{
				"chord": "Bbm(6)",
				"notes": [ [ [2, 14, 20, 24] ] ],
				"fingers": [ [4, 1, 2, 3] ],
				"names": [ [7, '', 7, -13, 17] ],
				"keyboards": [5],
			},
			{
				"chord": "Bbm(5+)",
				"notes": [ [ [1, 13, 20, 24] ] ],
				"fingers": [ [5, 1, 2, 3] ],
				"names": [ [-6, '', -6, -13, 17] ],
				"keyboards": [5],
			},
			{
				"spacer": { "type": "break-line" }
			},
			{
				"chord": "C/Bb",
				"notes": [ [ [5, 7, 11, 14] ] ],
				"fingers": [ [2, 1, 2, 3] ],
				"names": [ [-10, '', 12, 4, 7] ],
				"keyboards": [3],
			},
			{
				"chord": "F(7m)/A",
				"notes": [ [ [4, 11, 16, 19] ] ],
				"fingers": [ [3, 1, 2, 3] ],
				"names": [ [-10, '', 12, 4, 7] ],
				"keyboards": [7],
			},
			{
				"chord": "Gm(7m)(5-)",
				"notes": [ [ [2, 12, 17, 20] ] ],
				"fingers": [ [3, 1, 2, 3] ],
				"names": [ [7, '', 5, -10, -1] ],
				"keyboards": [7],
			},
			{
				"chord": "C(7)(9m)",
				"notes": [ [ [0, 7, 10, 13] ] ],
				"fingers": [ [1, 1, 2, 3] ],
				"names": [ [7, '', 5, -10, -1] ],
				"keyboards": [1],
			},
			{
				"spacer": { "type": "space" }
			},
			{
				"chord": "F(6)",
				"notes": [ [ [0, 9, 12, 16] ] ],
				"fingers": [ [5, 1, 2, 3] ],
				"names": [ [5, '', 2, 5, 9] ],
				"keyboards": [3]
			},
			{
				"chord": "C(7m)(13)",
				"notes": [ [ [0, 16, 21, 22] ] ],
				"fingers": [ [5, 1, 2, 3] ],
				"names": [ [12, '', 4, 9, 8] ],
				"keyboards": [6]
			},
			{
				"chord": "C(7m)(13-)",
				"notes": [ [ [0, 16, 20, 22] ] ],
				"fingers": [ [5, 1, 2, 3] ],
				"names": [ [12, '', 4, 9, 8] ],
				"keyboards": [6]
			},
			{
				"spacer": { "type": "space" }
			},
			{
				"chord": "F(7M)",
				"notes": [ [ [0, 11, 16, 19] ] ],
				"fingers": [ [5, 1, 2, 3] ],
				"names": [ [5, '', 4, 9, 12] ],
				"keyboards": [7]
			}
		]
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
