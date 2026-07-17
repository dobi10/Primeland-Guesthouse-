import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// MOBILE MENU

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







// RESERVATION SYSTEM

const bookingForm = document.getElementById("bookingForm");


if(bookingForm){


bookingForm.addEventListener("submit", async (e)=>{


e.preventDefault();



const name =
document.getElementById("name").value;


const phone =
document.getElementById("phone").value;


const date =
document.getElementById("date").value;


const message =
document.getElementById("message").value;




try{


await addDoc(collection(db,"bookings"),{


name:name,

phone:phone,

date:date,

message:message,

createdAt:serverTimestamp()


});





const whatsappText = `

Hello PrimeLand Guesthouse,

I would like to make a reservation.

👤 Name: ${name}

📞 Phone: ${phone}

📅 Date: ${date}

💬 Message: ${message}


Thank you.

`;



const whatsappLink =

"https://wa.me/251987770238?text="

+

encodeURIComponent(whatsappText);



window.open(
whatsappLink,
"_blank"
);



bookingForm.reset();



}

catch(error){


console.error(error);


alert(
"Reservation failed. Please check your connection."
);


}



});


}








// GALLERY LIGHTBOX


const galleryImages =
document.querySelectorAll(".gallery img");



galleryImages.forEach((img)=>{


img.addEventListener("click",()=>{


const lightbox =
document.createElement("div");


lightbox.className="lightbox";



lightbox.innerHTML = `

<img src="${img.src}">

<span>×</span>

`;



document.body.appendChild(lightbox);



lightbox.addEventListener("click",()=>{


lightbox.remove();


});


});


});
