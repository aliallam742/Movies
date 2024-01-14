var myDataJson;
let show = "movie/now_playing"
getData()
var links =document.querySelectorAll(".link");
for(var i = 0 ; i< links.length ; i++){
    links[i].onclick = function (){
        var id=this.getAttribute("id");
        show = id;
        getData(show)
    }
}

async function getData(show="movie/now_playing"){
    var myData = await fetch(`https://api.themoviedb.org/3/${show}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR39zLMNO5mxgeOZ0Bzn0o2izG85Gpu3yWokZKz187It3L7Qhy47KIol9HU`)
    myDataJson = await myData.json()
    displayData()
}
function displayData(){
    var cols=``; 
    for ( var i = 0 ; i < myDataJson.results.length ; i++){
        cols +=`<div class="col-md-4 my-2">
            <div class="info-container">
                    <img src="https://image.tmdb.org/t/p/w500${myDataJson.results[i].poster_path}" class="w-100" alt="${myDataJson.results[i].title}" srcset="">
                <div class="info">
                    <h2>${myDataJson.results[i].title}</h2>
                    <p>${myDataJson.results[i].overview}</p>
                    <h6>rate : ${myDataJson.results[i].vote_average}</h6>
                    <h6>date : ${myDataJson.results[i].release_date}</h6>
                </div>
            </div>
        </div>`
    }
document.getElementById("show").innerHTML = cols
}


///===============================================\\\\
var navBtn =document.getElementById("nav-btn");
var navs =document.querySelectorAll(".navs");
var sideBar = document.getElementById("sidebar");

navBtn.onclick = function () {
    sideBar.classList.toggle("re")
    navBtn.classList.toggle("nav-time");
    for(var i= 0 ; i < navs.length; i++){
    navs[i].classList.toggle('animate__backInUp')
    }

}

//-------------------------------------------------------\\\

//rejex

var userName     = document.getElementById("name");
var userEmail    = document.getElementById("mail");
var userPhone    = document.getElementById("phone");
var userAge      = document.getElementById("age");
var password     = document.getElementById("password");
var repassword   = document.getElementById("repassword");
var submitBtn    = document.getElementById("submit");

submitBtn.disabled="true"

var nameRejex   = /^[a-z]{2,8}[0-9]{2,5}$/;
var mailRejex   = /^[a-z]{2,9}[0-9]{2,5}@[a-z]{2,6}\.[a-z]{2,6}/
var phoneRejex  = /^(010|011|012|015)[0-9]{8}$/
var ageRejex    = /^[0-9]{1,2}$/
var passRejex   = /^[a-z0-9]{8,15}[a-zA-Z]{1,3}$/

userName.onkeyup= function (){
    if(nameRejex.test(userName.value)){
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        document.getElementById("name-label").classList.add("d-none")
        submitBtn.removeAttribute("disabled")
    }else{
        userName.classList.remove("is-valid");
        userName.classList.add("is-invalid");
        document.getElementById("name-label").classList.remove("d-none")
        submitBtn.disabled="true"
    }
}

userEmail.onkeyup =function(){
    if(mailRejex.test(userEmail.value)){
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        document.getElementById("mail-label").classList.add("d-none")
        submitBtn.removeAttribute("disabled")
    }else{
        userEmail.classList.remove("is-valid");
        userEmail.classList.add("is-invalid");
        document.getElementById("mail-label").classList.remove("d-none")
        submitBtn.disabled="true"
    }
}
userPhone.onkeyup =function(){
    if(phoneRejex.test(userPhone.value)){
        userPhone.classList.add("is-valid");
        userPhone.classList.remove("is-invalid");
        document.getElementById("phone-label").classList.add("d-none")
        submitBtn.removeAttribute("disabled")

    }else{
        userPhone.classList.remove("is-valid");
        userPhone.classList.add("is-invalid");
        document.getElementById("phone-label").classList.remove("d-none")
        submitBtn.disabled="true"

    }
}
userAge.onkeyup =function(){
    if(ageRejex.test(userAge.value)){
        userAge.classList.add("is-valid");
        userAge.classList.remove("is-invalid");
        document.getElementById("age-label").classList.add("d-none")
        submitBtn.removeAttribute("disabled")
    }else{
        userAge.classList.remove("is-valid");
        userAge.classList.add("is-invalid");
        document.getElementById("age-label").classList.remove("d-none")
        submitBtn.disabled="true"
    }
}
password.onkeyup = function (){
    if(passRejex.test(password.value)){
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        document.getElementById("password-label").classList.add("d-none")
        submitBtn.removeAttribute("disabled")
    }else{
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        document.getElementById("password-label").classList.remove("d-none")
        submitBtn.disabled="true"
    }
}

repassword.onkeyup =function(){
    if(password.value == repassword.value){
        repassword.classList.add("is-valid");
        repassword.classList.remove("is-invalid");
        document.getElementById("repassword-label").classList.add("d-none")
        submitBtn.removeAttribute("disabled")
    }else{
        repassword.classList.remove("is-valid");
        repassword.classList.add("is-invalid");
        document.getElementById("repassword-label").classList.remove("d-none")
        submitBtn.disabled="true"
    }
}

//
//search-------- 

var searchWord = document.getElementById("word-search");
var search= document.getElementById("search");

searchWord.onkeyup = function(){
    cols=``
    for(var i =0 ; i<products.length; i++){
        if(products[i].name.includes(this.value)){
        raws +=`
        <div class="col-md-4">
            <div class="card">
                <img src="${products[i].picture}" id=${i} class="pic" alt="">
                <h4> name  : <span class="fs-5">${products[i].name}</span></h2>
                <h4> price : <span class="fs-5">${products[i].Price} $</span></h3>
                <h4> desc  :  <span class="fs-5">${products[i].description}</span></h4>
                <button onclick="deleteRow(${i})" id="del" class="btn btn-danger">delete</button>
            </div>
        </div>
        `
    }
    }
}