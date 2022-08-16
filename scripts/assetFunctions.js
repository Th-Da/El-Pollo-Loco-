let setIntervalIds = [];

function setStobbableInterval(fn, time) {
    let id = setInterval(fn, time);
    setIntervalIds.push(id);
}

