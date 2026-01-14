//Do a request to render the components in the DOM when are
//required by the current page.
async function loadComponent(id, path, callback) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
//The third parameter here, the callback, is basically...
//what to do next? Is a function that will be executed once 
//the HTML page is rendered.
  if (typeof callback === 'function') {
    callback();
  }
}

// Load Components
loadComponent('header', './components/header.html', initHeader);
loadComponent('footer', './components/footer.html');