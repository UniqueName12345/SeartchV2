function projects(thing) {
    window.open(`https://scratch.mit.edu/search/projects?q=${thing}`);
}
function studios(thing) {
    window.open(`https://scratch.mit.edu/search/studios?q=${thing}`);
}

async function isScratchdbUp() {
    const response = await fetch("https://scratchdb.lefty.one/v3/docs/", { timeout: 5000 });
    return response.ok;
}


function forums(thing) {
    if (isScratchdbUp()) {
        window.open(`https://ocular.jeffalo.net/search?q=${thing}`);
    } else {
        alert("ERROR: Can't use ocular");
    }
}