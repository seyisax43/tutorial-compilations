const button = document.querySelector('.buttons')
const modal = document.querySelector('.wrap')
const closeButton = document.getElementById('close-btn');

button.addEventListener('click', function(){

    modal.style.display = 'block';

  

});

closeButton.addEventListener('click', function(){
    modal.style.display = 'none';
})



window.addEventListener('click', function(e) {

    if (e.target === modalContainer) {
        modal.style.display = 'none';
    }
});



// window.addEventListener('click', function(e) {
//     if (e.target === modal) {
//         modal.style.display = 'none';

//     }
// })
