function calculateSlope(x, y, x1, y1) {
    var changeInY = y - y1;
    var changeInX = x - x1;
    return changeInY / changeInX;
}

function calculateInterceptOfALine(x, y, slope) {
    return y - (slope * x);
}

function calculateYPointOfArbitraryPoint(slope, x, intercept) {
    return (slope * x) + intercept;
}

function calculateArbitraryPointPosition(bPointOnLine, y, slope) {
    var delta = bPointOnLine - y;

    if (delta >= 0 && slope >= 0) {
        return 'point lies below and to the right of the line.';
    } else if (delta >= 0 && slope < 0) {
        return 'point lies below and to the left of the line.';
    } else if (delta < 0 && slope >= 0) {
        return 'point lies above and to the left of the line.';
    } else if (delta < 0 && slope < 0) {
        return 'your point lies above and to the right of the line.';
    }
}

function calculatePointPosition() {
    var x = parseFloat(document.getElementById('x').value, 10);
    var y = parseFloat(document.getElementById('y').value, 10);

    var x1 = parseFloat(document.getElementById('x1').value, 10);
    var y1 = parseFloat(document.getElementById('y1').value, 10);

    var a = parseFloat(document.getElementById('a').value, 10);
    var b = parseFloat(document.getElementById('b').value, 10);

    var slope = calculateSlope(x, y, x1, y1);
    var intercept = calculateInterceptOfALine(x, y, slope);
    var bPointOnLine = calculateYPointOfArbitraryPoint(slope, b, intercept);
    var result = calculateArbitraryPointPosition(bPointOnLine, b, slope);
    document.getElementById('output').innerHTML = result;
}