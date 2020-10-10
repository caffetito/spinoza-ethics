//////add ids to nodes

// var elements = document.body.getElementsByTagName('*');
// Set their ids
// for (var i = 0; i < elements.length; i++)
//     elements[i].id = 'id-' + i;



//////tooltip 
function showTooltip(event) {
    const target = event.target
    target.previousElementSibling.classList.toggle('hidden')
}

function hideTooltip(event) {
    const target = event.target
    target.previousElementSibling.classList.toggle('hidden')
    
}

const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach(tooltip => {
    const id = tooltip.dataset.reference
    const referenceText = document.getElementById(id).innerText    
    const tooltipSpan = document.createElement('span')
    const tooltipText = document.createTextNode(referenceText)
    tooltipSpan.appendChild(tooltipText)
    tooltipSpan.classList.add('hidden' , 'tooltip-box')

tooltip.parentNode.insertBefore(tooltipSpan, tooltip)
    tooltip.addEventListener("mouseover", showTooltip)
    tooltip.addEventListener('mouseout', hideTooltip)
})

// show menu only on the way up and not on titlw
function showMenu() {
    
    let refOffset = 0;
    const navHeight = 48;
    const nav = document.querySelector('nav')

    if 




}

