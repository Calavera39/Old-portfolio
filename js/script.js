
window.onload=function(){
    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');
    close = document.querySelector('.menu__close')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});




const counters = document.querySelectorAll('.skills__sitem-percent'),
    lines = document.querySelectorAll('.skills__sitem-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})



const submitform = document.getElementById('submitform')

submitform.addEventListener('submit', SendMail)

    function SendMail(event) {
event.preventDefault()
const tempParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    from_text: document.getElementById('text').value
}

emailjs.send('service_qgix1q4', 'template_yn345it', tempParams, 'EITdJU-79xVBkCbt2' )
        .then(function() {
            console.log('SUCCESS!');
            alert("Sent!")
        }, function(error) {
            console.log('FAILED...', error);
        });

        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('text').value = ''

        

}




}

