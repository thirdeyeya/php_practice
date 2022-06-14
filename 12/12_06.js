document.getElementById('name').addEventListner('blur', function(){
    let span = document.getElementById('msg');
    span.classList.remove('hidden');
});