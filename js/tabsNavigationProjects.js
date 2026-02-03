(function(){
    //Object for Tab properties
    let propTabs={
        first_heading: document.getElementById('projects_header').firstElementChild,
        first_content: document.getElementById('projects_content').firstElementChild,
        header_styles: document.querySelector('#projects_header li').classList.value,
        content_styles: document.getElementById('projects_content').firstElementChild.classList.value,
        header_links: document.querySelectorAll('#projects_header li a'),
        li_header: document.querySelectorAll('#projects_header li'),
        divs_content: document.querySelectorAll('#projects_content > div'),
        active_content: null
    }
    //Object with Tab Methods:
    let metTabs={
        start: function(){
            propTabs.first_heading.className=propTabs.header_styles+' active';
            propTabs.first_content.className=propTabs.content_styles+' active';

            for (let i= 0; i< propTabs.header_links.length; i++) {
                propTabs.header_links[i].addEventListener('click', metTabs.tabEvent);
                
            }
        },
        tabEvent: function(e){
            e.preventDefault();
            for (let i = 0; i < propTabs.li_header.length; i++) {
                propTabs.li_header[i].className=propTabs.header_styles;               
            }
           for (let i = 0; i < propTabs.divs_content.length; i++) {
                propTabs.divs_content[i].className=propTabs.content_styles;
            
           }
           this.parentElement.className = propTabs.header_styles+' active';
           propTabs.active_content=this.getAttribute('href');
           document.querySelector(propTabs.active_content).className=propTabs.content_styles+' active';
           document.querySelector(propTabs.active_content).style.opacity = 0;
           setTimeout(function(){
			document.querySelector(propTabs.active_content).style.opacity = 1;
		}, 100);
        }
    }
    metTabs.start();
}())