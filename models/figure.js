const colors = ['orange', 'blue', 'yellow', 'green', 'purple', 'red'];
const shapes = [
    [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ], 
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [1, 1],
        [1, 1]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
]

function Figure(colors, shapes) {
    this.colors = colors;
    this.shapes = shapes; 
} 

let FigureObject = new Figure(colors, shapes);

module.exports = FigureObject;