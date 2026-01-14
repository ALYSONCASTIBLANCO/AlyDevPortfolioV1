//This function will render all header functionalities once the
//header is rendered.
function initHeader() {
//Props for menu
let propMenu={
    burger_menu: document.getElementById('burger-menu'),
    slide_menu: document.getElementById('header-menu'),
    menu_active: false,
    //elem_menu: document.querySelectorAll('#slide-menu .main-menu a'),
    firstOption: document.getElementById('header-menu').firstElementChild,
    linksOption: document.querySelectorAll('#header-menu a') 
}

//Methods for menu
  if (!propMenu.burger_menu || !propMenu.slide_menu) return;

  let metMenu = {
    start: function () {
      propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);
      document.addEventListener('click', metMenu.removeMenu);
      metMenu.setActiveMenuLink();
      metMenu.bindLinkClicks();
    },

    toggleMenu: function (e) {
      e.stopPropagation(); // Actions won't scale inmediately to the
      //document.
      propMenu.slide_menu.classList.toggle('active');
    },

    removeMenu: function (e) {
    // If click occurs inside of header or related elements like the slide menu, don't do anything.
    if (
      e.target.closest('#slide-menu') ||
      e.target.closest('#burger-menu')
    ) return;
    //Otherwise, remove the menu.
    propMenu.slide_menu.classList.remove('active');
    },
    setActiveMenuLink: function(){
      //Here I obtain the current page to set the active
      //state to the tab.
      const currentPath=window.location.pathname.split('/').pop();
      //For each a element in my menu, I'll extract the 
      //href property.
      propMenu.linksOption.forEach(link=>{
        const linkPath=link.getAttribute('href').split('../').pop();
        //Toggle when the linkPath is equals to currentPath, verifying that we are in the current page.
        link.classList.toggle('active', linkPath===currentPath ||
          (linkPath === 'Homepage.html' && currentPath==='')
        );
      });
    },
    //Function to get instant feedback when I click the option, inmediately I will figure the change in the menu.
    bindLinkClicks: function(){
      propMenu.linksOption.forEach(link => {
        link.addEventListener('click', function () {
          propMenu.linksOption.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        });
      });   
    }
  };
metMenu.start();
}