// Firebase imports

import { db } from "./firebase.js";

import { 
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// Mobile menu

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});



document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});






// Booking Form Firebase


const bookingForm = document.getElementById("bookingForm");


bookingForm.addEventListener("submit", async (e)=>{


    e.preventDefault();



    const bookingData = {

        name: document.getElementById("name").value,

        phone: document.getElementById("phone").value,

        date: document.getElementById("date").value,

        room: document.getElementById("room").value,

        message: document.getElementById("message").value,

        createdAt: serverTimestamp()

    };



    try{


        await addDoc(

            collection(db,"bookings"),

            bookingData

        );


        alert(
        "Thank you! Your booking request was sent successfully."
        );


        bookingForm.reset();



    }


    catch(error){


        console.log(error);


        alert(
        "Something went wrong. Please try again."
        );


    }



});






// Scroll animation


const sections = document.querySelectorAll("section");


sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s";

});



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let top = section.getBoundingClientRect().top;


if(top < window.innerHeight - 100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}



});


});
