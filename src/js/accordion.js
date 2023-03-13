// I want to make use of event bubbling. 

class AccordionComponent {
  #accordion = document.querySelector("div[class='accordion']"); 

  constructor () {
    this.#accordion.addEventListener('click', this.#showPanelOnClick); 
  }

  #showPanelOnClick(evtObj) {
    const accordionBtn = evtObj.target.closest("button[class~='accordion__btn']"); 

    if(!accordionBtn) return; 

    const accordionPanel = accordionBtn.parentElement.nextElementSibling; 
    
    const isExpanded = accordionBtn.getAttribute('aria-expanded') === 'true' || false;

    accordionBtn.setAttribute('aria-expanded', `${!isExpanded}`); 

    if(isExpanded) {
      accordionPanel.setAttribute('hidden', ''); 
      accordionBtn.classList.remove('accordion__btn--active'); 
    } else {
      accordionPanel.removeAttribute('hidden'); 
      accordionBtn.classList.add('accordion__btn--active'); 
    }
   
  }
}

new AccordionComponent(); 


// Check out this link to see another variation of the accordion which I built --> https://codepen.io/TraversetheDOM/pen/jOvLxre

