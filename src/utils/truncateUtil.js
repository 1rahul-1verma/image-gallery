
function truncateUtil(div) {
    if(div.clientHeight >= div.scrollHeight) 
        return ;
    let content = div.textContent;
    let letter = content.split("");
    let low = 1, 
        high = letter.length,   
        mid = Math.floor((low + high) / 2);
    while(low < high) {
        const left = letter.filter((alphabet, indx) => {
            return indx < mid;
        });

        const right = letter.filter((alphabet, indx) => {
            return indx > letter.length - mid;
        });

        div.textContent = left.join("") + "..." + right.join("");
        if(div.scrollHeight > div.clientHeight){
            high = mid - 1;
        } else{
            low = mid + 1;
        }

        mid = Math.floor((high + low) / 2);
        
    }
    return ;
}

export { truncateUtil }; 