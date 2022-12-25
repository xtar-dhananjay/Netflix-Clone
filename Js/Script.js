// Mkae accordion
let allAccordion = document.querySelectorAll('#accordionCont .accordionHeading');
allAccordion.forEach( (e, ei) => {
    e.onclick = () => {
        let collapseIcon = e.closest('.accordion').querySelector('i');
        let accordionContent = e.closest('.accordion').querySelector('.accordionContent');

        if (collapseIcon.classList.contains('fa-plus')) {
            collapseIcon.classList.replace('fa-plus','fa-xmark');
        }else{
            collapseIcon.classList.replace('fa-xmark','fa-plus');
        }
        accordionContent.classList.toggle('accordionColaps');

        // Collapse all accordions leaving the current accordion
        allAccordion.forEach((x, xi) => {    
            if (xi != ei) {
                
                let xaccordionContent = x.closest('.accordion').querySelector('.accordionContent');
                xaccordionContent.classList.remove('accordionColaps');
                let xcollapseIcon = x.closest('.accordion').querySelector('i');
                xcollapseIcon.classList.replace('fa-xmark','fa-plus');

            }

        });
    }
})

// This is complete now 😊👍