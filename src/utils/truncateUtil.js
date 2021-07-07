
function truncateUtil(node, content) {
    node.childNodes[3].textContent  = content;
    let letter = content.split("");
    let low = 1, 
        high = letter.length,   
        mid = Math.floor((low + high) / 2);
    console.log(node.scrollHeight, node.clientWidth);
    while(low < high) {
        const left = letter.filter((alphabet, indx) => {
            return indx < mid;
        });

        const right = letter.filter((alphabet, indx) => {
            return indx > letter.length - mid;
        });

        node.childNodes[3].textContent = left.join("") + "..." + right.join("");
        if(node.scrollWidth > node.clientWidth){
            high = mid - 1;
        } else{
            low = mid + 1;
        }

        mid = Math.floor((high + low) / 2);
        
    }
    return node.childNodes[3].textContent;
}

export { truncateUtil }; 