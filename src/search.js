async function forums(query) {
    const url = `https://ocular.jeffalo.net/search?q=${query}&sort=relevance`;
    const response = await fetch(url);
    if (response.ok) {
      const html = await response.text();
      return html;
    } else {
      return `Error: ${response.status}`;
    }
  }
  
  async function projects(query) {
    const url = `https://api.scratch.mit.edu/search/projects/?q=${query}`;
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      return `Error: ${response.status}`;
    }
  }
  
  async function studios(query) {
    const url = `https://api.scratch.mit.edu/search/studios/?q=${query}`;
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      return `Error: ${response.status}`;
    }
  }
  