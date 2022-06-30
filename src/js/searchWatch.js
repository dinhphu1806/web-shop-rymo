const searchInput = () => {
    let searchInput = document.getElementById('search-input').value.toUpperCase();
    let filterSearch = document.getElementById('filter-search');
    let item = document.querySelectorAll('.filter-item');
    let pname = document.getElementsByTagName('h4');

    for(var i=0; i< pname.length; i++) {
        let match = item[i].getElementsByTagName('h4')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchInput) > -1){
                item[i].style.display = "";
            } else{
                item[i].style.display = "none"
            }
        }

    }
}


// searchInput.onkeyup = () => {  // cungx gioonsg bo onkeuup = searchInput() vao cho input
//     const x = searchInput.value.toLowerCase();
//     showItem(x);
// }

// call function
// function showItem(x) {
//     for(let list of item) {
//         let product = list.children[1].children[0].innerHTML;
//         let name = product.toLowerCase();
//         if(name.indexOf(x) > -1)
//         {
//             list.style.display = "";
//         } else {
//             list.style.display = "none";
//         }
//     }
// }




// function showItem(x) {
//     for(let arr of li){
//         let product = arr.children[1].children[0].innerHTML;
//         let name = product.toLowerCase();
//         if (name.search(x) > -1)
//         {
//             arr.style.display = "";
//         }else{
//             arr.style.display = "none";
//         }
//     }
// }

