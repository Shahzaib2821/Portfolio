window.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        opacity: 1,
        x: dets.clientX,
        y: dets.clientY,
        duration: 1,
        ease: "power2.out",
    });
});


//------ About page---------
var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    document.getElementById(tabname).classList.add('active-tab');
    document.querySelector(`.tablinks[data-tab="${tabname}"]`).classList.add('active-link');
}


// Menu 

var sidemenu = document.querySelector(".sidemenu");
var menuIcon = document.querySelector(".icon2");

function openmenu() {
    sidemenu.style.right = "0";
    menuIcon.style.display = "none"; 
}

function closemenu() {
    sidemenu.style.right = "-50vw";
    menuIcon.style.display = "block"; 
}

// Form connect to Google Sheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyLCx67T_5LgKCQTNT3_E6eo02erIyjOEtTf1sp2W63ibTGmSdYO2X4XaPPpvatasGI/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.querySelector('#msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully"
        setTimeout(() => {
            msg.innerHTML=""
        }, 3000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  
// hamburger-----------------
function openmenu() {
    var navLinks = document.querySelector('nav .links ul');
    gsap.to(navLinks, { 
        right: 0,
    });
  }

  function closemenu() {
    var navLinks = document.querySelector('nav .links ul');
    gsap.to(navLinks, { right: '-50vw' });
  }

  var links = document.querySelectorAll('nav .links ul a');

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      closemenu();
    });
  });
