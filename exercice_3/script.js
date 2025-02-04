const allTabs = document.querySelectorAll(".tabs_link");
const allPanels = document.getElementsByClassName("tabs_panel");

for(let tab of allTabs){
    tab.addEventListener("click",() => {

        //Get target element from the id of the link
        let targetId = tab.href.split(/[#/]/).pop();
        let targetElement = document.getElementById(targetId);

        //Set active from target elements
        targetElement.classList.add("active");
        tab.classList.add("active");


        //Unset active from elements in the target container
        const allScopedTabs = tab.closest(".tabs").getElementsByClassName("tabs_link");
        const allScopedPanels = tab.closest(".tabs").nextElementSibling.getElementsByClassName("tabs_panel");
        
        //For tabs link
        for(let tabChild of allScopedTabs){
            if(tabChild != tab){
                tabChild.classList.remove("active");
            }
        }

        //For tabs panel
        for(let panelChild of allScopedPanels){
            if(panelChild != targetElement){
                panelChild.classList.remove("active");
            }
        }
    })

};