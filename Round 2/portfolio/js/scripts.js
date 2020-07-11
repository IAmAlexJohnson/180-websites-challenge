let hamburger = document.getElementById('hamburger-menu');
let nav = document.getElementById('navigation');

hamburger.addEventListener("click", (e) => {
    let classes = nav.classList;

    for(let i = 0; i < classes.length; i++){
        if(classes[i] == 'fullscreen'){
            nav.classList.remove('fullscreen');
            console.log('remove');
        } else{
            nav.classList.add('fullscreen');
            console.log('add');
        }
    }
  
});