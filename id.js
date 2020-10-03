// function getUniqueKeyForNode (targetNode) {
//     const pieces = ['el'];
//     let node = targetNode;

//     while (node && node.parentNode) {
//         pieces.push(Array.prototype.indexOf.call(node.parentNode.childNodes, node));
//         node = node.parentNode
//     }

//     return pieces.reverse().join('-');
// }

console.log("it works!")

var elements = document.body.getElementsByTagName('*');

// Set their ids
for (var i = 0; i < elements.length; i++)
    elements[i].id = 'id-' + i;