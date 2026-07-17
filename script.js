// PrimeLand Guesthouse JavaScript


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}



document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});







// WhatsApp Booking


const bookingForm = document.getElementById("bookingForm");


if(bookingForm){


bookingForm.addEventListener("submit",(e)=>{


e.preventDefault();



const name =
document.getElementById("name").value;


const phone =
document.getElementById("phone").value;


const date =
document.getElementById("date").value;


const room =
document.getElementById("room").value;


const message =
document.getElementById("message").value;




const text = `

Hello PrimeLand Guesthouse,

I would like to make a booking request.

👤 Name: ${name}

📞 Phone: ${phone}

📅 Date: ${date}

🛏 Room: ${room}

💬 Message: ${message}


Thank you.

`;




const whatsappNumber = "251987770238";


const whatsappLink =

"https://wa.me/" +

whatsappNumber +

"?text=" +

encodeURIComponent(text);



window.open(whatsappLink,"_blank");



bookingForm.reset();



});


}







// Scroll reveal animation


const sections = document.querySelectorAll("section");


sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="0.8s ease";

});



function reveal(){


sections.forEach(section=>{


const position =
section.getBoundingClientRect().top;



if(position < window.innerHeight - 100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}



});


}



window.addEventListener("scroll",reveal);


reveal();
