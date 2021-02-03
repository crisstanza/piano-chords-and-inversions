var CHORDS_TMP = [
	{
		"chord": "Fm",
		"notes": [ [ [0, 12, 15, 19] ] ],
		"fingers": [ [5, 1, 2, 3] ],
		"names": [ [5, '', 5, -8, 12] ],
		"keyboards": [7],
		"inversions": ['']
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
		"inversions": ['']
	},
	{
		"chord": "Gbm(6)",
		"notes": [ [ [1, 16, 20, 22] ] ],
		"fingers": [ [4, 1, 2, 3] ],
		"names": [ [-6, '', -10.1, -13, -15] ],
		"keyboards": [7],
		"inversions": ['']
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
		"inversions": ['']
	},
	{
		"chord": "Bbm(7)",
		"notes": [ [ [3, 15, 20, 24] ] ],
		"fingers": [ [3, 1, 2, 3] ],
		"names": [ [-8, '', -8, -13, 17] ],
		"keyboards": [5],
		"inversions": ['']
	}
];

if (typeof CHORDS === 'undefined') {
	var CHORDS = CHORDS_TMP;
} else {
	CHORDS = CHORDS.concat(CHORDS_TMP);
}
