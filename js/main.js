var mod = document.getElementById("model-area"),
    more = document.getElementById("morebutton"),
    body = document.body,
    docelem = document.documentElement,
    offset = 100,
    scrollpos , docheight;

var moretext = document.createTextNode("Structural, Landscape, Mechanical/ HVAC, Electrical, Plumbing and sewerage, Fire protection, Building management systems and Infrastructure.");
var moretag = document.createElement("h");
moretag.appendChild(moretext);
moretag.classList.add("moreclass");
//ready to show paragraph on hover

docheight = Math.max(body.scrollHeight , body.offsetHeight, docelem.clientHeight , docelem.offsetHeight); 
//we have the max height now
if(docheight != 'undefined')
{
    offset = docheight / 7; //offset is set 
}

window.addEventListener("scroll" , function(event)
{
    scrollpos = body.scrollTop || docelem.scrollTop;
    if(scrollpos > offset)
    {
        mod.classList.remove("blackline");
        mod.classList.add("greenline");
        //remove 3d model and insert line action
    }
})

more.addEventListener("mouseover" , function(event)
{
    more.appendChild(moretag);
    
    
})

more.addEventListener("mouseout" , function(event)
{
    more.removeChild(moretag);
})



