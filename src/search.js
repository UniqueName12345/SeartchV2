function projects(thing) {
  const encodedThing = encodeURIComponent(thing);
  const searchUrl = `https://scratch.mit.edu/search/projects?q=${encodedThing}`;
  console.log(`Search URL: ${searchUrl}`);
  window.open(searchUrl);
}
function studios(thing) {
    const encodedThing = encodeURIComponent(thing);
    const url = `https://scratch.mit.edu/search/studios?q=${encodedThing}`;
    console.log(`Search URL: ${url}`);
    window.open(url);
}

/**
 * Checks if the ScratchDB service is up and running.
 *
 * @returns {boolean} Returns true if the ScratchDB service is up, otherwise false.
 */
async function isScratchdbUp() {
    try {
        console.log("Checking ScratchDB service...");
        const response = await fetch("https://scratchdb.lefty.one/v3/docs/");
        console.log("Response:", response);
        return response.ok;
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
}

function forums(thing) {
    if (isScratchdbUp()) {
        console.log(`Opening ocular search for ${thing}`);
        window.open(`https://ocular.jeffalo.net/search?q=${thing}`);
    } else {
        console.log("ERROR: Can't use ocular");
        alert("ERROR: Can't use ocular");
    }
}

function wiki(thing) {
  console.log(`Searching for ${thing} on the Scratch Wiki...`);
  window.open(`https://en.scratch-wiki.info/w/index.php?search=${thing}`);
  console.log(`Search for ${thing} complete.`);
}
