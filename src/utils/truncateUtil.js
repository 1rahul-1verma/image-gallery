
function truncateUtil(div) {
    return ;
    // console.log(div);
    // console.log(div.scrollWidth, div.clientWidth);
    // if(div.clientWidth >= div.scrollWidth) 
    //     return ;
    // let content = div.innerHTML;
    // let letter = content.split("");
    // let low = 1, 
    //     high = letter.length,   
    //     mid = Math.floor((low + high) / 2);
    // while(low < high) {
    //     const left = letter.filter((alphabet, indx) => {
    //         return indx < mid;
    //     });

    //     const right = letter.filter((alphabet, indx) => {
    //         return indx > letter.length - mid;
    //     });

    //     div.innerHTML = left.join("") + "..." + right.join("");
    //     if(div.scrollWidth > div.clientWidth){
    //         high = mid - 1;
    //     } else{
    //         low = mid + 1;
    //     }

    //     mid = Math.floor((high + low) / 2);
        
    // }
    // return ;
}

export { truncateUtil }; 