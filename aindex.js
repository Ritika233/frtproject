// Initialize Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"
var firebaseConfig = {
    apiKey: "AIzaSyBWBhjjgW3XYqSvmW2MENqjGgOAm_vjL5g",
    authDomain: "formsss-1ba5f.firebaseapp.com",
    projectId: "formsss-1ba5f",
    storageBucket: "formsss-1ba5f.appspot.com",
    databaseURL: "https://formsss-1ba5f-default-rtdb.firebaseio.com/",
    messagingSenderId: "953037792172",
    appId: "1:953037792172:web:1724c9a5ededa39727d009"
};


var app = initializeApp(firebaseConfig);
const database = getDatabase();


document.getElementById('contactform').addEventListener('submit', submitform);



function submitform(e) {
    e.preventDefault();
    //getvalues
    var name = getInputVal('name');
    var Hometown = getInputVal('Hometown');
    var Destination = getInputVal('Destination');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var Budget=getInputVal('Budget');
    var query = getInputVal('query');
    //save message
    saveMessage(name, Hometown, Destination, email,Budget,phone, query);
    alert("click on the image to go to website");

}

//function to get form values 
function getInputVal(id) {
    return document.getElementById(id).value;
}
//save meessage to firebase
function saveMessage(name,  email, phone, query) {
    // var newMessageRef = messagesRef.push();
    const messagesRef = getDatabase();
    set(ref(messagesRef, 'users/' + phone), {
        name: name,
        email: email,
        phone: phone,
        query: query
    });
}