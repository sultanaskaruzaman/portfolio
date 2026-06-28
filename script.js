/* ===========================
   DARK MODE
=========================== */

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = darkBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/* ===========================
   NAVBAR SHADOW
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow = "none";

    }

});


/* ===========================
   BACK TO TOP
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#3B82F6";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "18px";
topBtn.style.display = "none";
topBtn.style.transition = ".3s";
topBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===========================
   ACTIVE NAVBAR
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});