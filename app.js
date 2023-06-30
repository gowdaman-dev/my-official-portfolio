const navbar = document.querySelector(".header");
window.onscroll = () => {
    if (window.scrollY > 80) {
        navbar.style = `background-color:rgba(128, 128, 128, 0.29); transition:.5s ease-in-out;`
    } else {
        navbar.style = `background-color:transperant; transition:.5s ease-in-out;`
    }
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.header , .home-content h1 , .heading , .contact h2', { origin: 'top' });
ScrollReveal().reveal('.home-content p , .contact-link , .skill .block , .pg-block ,.contact-content , .form', { origin: 'bottom' });


// email section

emailjs.init('JbI-6kacKYbl7vDhk');


const sendit = document.getElementById('sender');
const notify = document.getElementById('notify');


sendit.addEventListener('click',()=>{
    notify.textContent = "message sent ✔"
    function cleartext(){
        notify.textContent = ""
    }
    emailjs.send("service_6hb6t5y", "template_zmiml5b", {
        user_name: document.getElementById('user_name').value,
        user_mail: document.getElementById('user_mail').value,
        message: document.getElementById('message').value
    });
    console.log(document.querySelector('#message').value)
    setInterval(cleartext , 5000)
})

function sender(){
    alert(document.getElementById('user_name').value)
}