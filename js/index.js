

const tabSelectionHandler = new TabSelectionHandler();

(function App()
{
    // console.log(document.getElementsByClassName("tabs"));
    tabSelectionHandler.initTabs();
})();


function TabSelectionHandler()
{
    this.tabsHolder = document.getElementsByClassName("tabs");
    this.tabsContentHolder = document.getElementsByClassName("tab-content-container");

    this.initTabs = function()
    {
        
        for (let i = 0; i < this.tabsHolder.length; i++) 
        {
            const tabs = Array.from(this.tabsHolder[i].children);
            const contents = Array.from(this.tabsContentHolder[i].children);

            tabs.forEach((tab, index)=>
            {
                tab.addEventListener("click", ()=>
                {
                    tab.classList.toggle("active");
                    contents[index].classList.toggle("active");

                    tabs.forEach((t, ind) => 
                    {
                        if (t !== tab && t.classList.contains("active")) 
                        {
                            t.classList.remove("active");
                            contents[ind].classList.remove("active");
                            return;    
                        }
                        
                    });
                })
            });  
            
        }
        // this.tabsHolder.forEach(element => {
        //     console.log(element);
        // });
    }


}


