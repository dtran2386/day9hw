var costs = [4.99, 1.99, 7.54, 3.69];

function greaterThanFour(current) {
    return current > 4;
}

function total(running, next) {
    console.log(running + ' ' + next);
    return running + next;
}

function timesThree(three) {
    return three * 3;
}

function greaterThanOne(curr) {
    return curr > 1;
}


// map
function map(array, change) {
    var keepers = [];
    for (var i = 0; i < array.length; i++) {
        /*
        1. Get the input
            var value = array[i];
        2. Modify it using the provided function
            var result = change(value);
        3. Add the modified value to the 'keepers' array.
            keepers.push(result);
        */
        keepers.push(change(array[i]));
    }
    return keepers;
}

// filter
function filter(array, refine) {
    var keepers = [];
    for (var i = 0; i < array.length; i++) {
        if (refine(array[i]) === true) {
            keepers.push(array[i]);
        }
    }
    return keepers;
}

// reduce
function reduce(array, amalgamate, start) {
    var now = start;
    for (var i = 0; i < array.length; i++) {
        now = amalgamate(now, array[i]);
    }
    return now;
}

// reject
function reject(array, refine) {
    var keepers = [];
    for (var i = 0; i < array.length; i++) {
        if (refine(array[i]) === false) {
            keepers.push(array[i]);
        }
    }
    return keepers;
}

// find
function find(array, sift) {
    for (var i = 0; i < array.length; i++) {
        if (sift(array[i]) === true) {
            return array[i];
        }
    }
}

// some
function some(array, any) {
    for (var i = 0; i < array.length; i++) {
        if (any(array[i]) === true) {
            return true;
        }
    }
}

// every
function every(array, all) {
    for (var i = 0; i < array.length; i++) {
        if (all(array[i]) === false) {
            return false;
        } 
    }
    return true;
}

function negate(predicateFunc) {
        return !predicateFunc.this;
    
}











