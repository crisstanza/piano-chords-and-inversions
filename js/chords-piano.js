var KEYBOARDS = {
	"triad": "wbwbwwbwbwbwwb",
	"inversions": [
		"bwwbwbwbwwbwbw", "bwbwbwwbwbwwbwb"
	]
};

var CHORDS = [
	{
		"chord": "G", "triad": [ 2, 7, 11 ],
		"inversions": [
			[ 4, 8, 11 ], [ 5, 8, 13 ]
		],
		"triadInversions": [
			[ 7, 11, 2 ], [ 11, 2, 7 ]
		]
	},
	{
		"chord": "C", "triad": [ 0, 4, 7 ],
		"inversions": [
			[ 1, 4, 9 ], [ 1, 6, 10 ]
		],
		"triadInversions": [
			[ 4, 7, 0 ], [ 7, 0, 4 ]
		]
	},
	{
		"chord": "D", "triad": [ 2, 6, 9 ],
		"inversions": [
			[ 3, 6, 11 ], [ 3, 8, 12 ]
		],
		"triadInversions": [
			[ 6, 9, 2 ], [ 9, 2, 6 ]
		]
	},
	{
		"chord": "Bm", "triad": [ 2, 6, 11 ],
		"inversions": [
			[ 8, 3, 11 ], [ 5, 8, 12 ]
		],
		"triadInversions": [
			[ 6, 11, 2 ], [ 11, 2, 6 ]
		]
	},
	{
		"chord": "Em", "triad": [ 4, 7, 11 ],
		"inversions": [
			[ 4, 8, 13 ], [ 5, 10, 13 ]
		],
		"triadInversions": [
			[ 7, 11, 4 ], [ 11, 4, 7 ]
		]
	}
];

var NOTES = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
