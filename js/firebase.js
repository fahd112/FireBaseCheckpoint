// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDWBHMKVzuySXxPcMcMCiev_7Gy3wxyJzk",
    authDomain: "gmcproject-1e7bf.firebaseapp.com",
    databaseURL: "https://gmcproject-1e7bf.firebaseio.com",
    projectId: "gmcproject-1e7bf",
    storageBucket: "gmcproject-1e7bf.appspot.com",
    messagingSenderId: "578999845152",
    appId: "1:578999845152:web:6b58300a4ef7e6b288d745",
    measurementId: "G-1X2CNV8D41"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var myform = document.getElementById("ContactForm");
myform.addEventListener("submit", sendMessage);
var messageref = firebase.database().ref("Users")

function sendMessage(event) {
    event.preventDefault();
    var name = document.getElementById("Iname").value;
    var email = document.getElementById("Iemail").value;
    var phone = document.getElementById("Iphone").value;
    var track = document.getElementById("Itrack").value;

    submitform(name, email, phone, track);
    myform.reset();
    document.querySelector(".congratulations").style.display="block"
}

function submitform(name, email, phone, track) {
    var newmessageref = messageref.push();
    newmessageref.set({
        username: name,
        useremail: email,
        userphone: phone,
        usertrack: track
    })


};