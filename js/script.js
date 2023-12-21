// alert('Halo!')
// console.log('heyho')

// prompt('masukkan usia anda')

 //prompt ("Halo, siapakah nama anda?", "Izza");
 //let name = prompt("Siapakah nama anda?", "");

 //console.log(name);

 // 1
//function replaceName {
// let name = prompt("Siapakah nama anda?", "")
// document.getElementById("name").innerHTML = name
//}

//replaceName();
//document.getElementById('tombol').addEventListener
//("click", function() {
//    replaceName();
//})

//let nameInput = document.getElementById('name-input')

//document.getElementById('kirim').addEventListener("click", function() {
//    const name = nameInput.value

    if (name == "") {
//        document.getElementById(error-name).innerHTML = "nama tidak boleh kososng!"
    }

//    document.getElementById('name').innerHTML = nama
//})

//function validateForm() {
//    const nama = document.forms['message-form']['name-input'].value

//    if (nama == '') {
        document.getElementById('error-name').innerHTML = "Tidak boleh kosong!"

        return false;
//    }

//    document.getElementById("name").innerHTML = nama;
//    document.getElementById("error-name").innerHTML = "";

    return false;
//}

//function setName(name) {

//}

var slideIndex = 1 {
    showDivs(slideIndex);
}

function plusDivs(n) {
    showDivs(slideIndex += n)
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) (slideIndex = x.length) ;
    for (1 = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[slideIndex = 1].style.display = "block";
    }
}
