$(document).ready(function() {
    // Tambahkan smooth scrolling ke semua link
    $("a").on('click', function(event) {

        // Pastikan this.hash memiliki nilai sebelum mengganti perilaku default
        if (this.hash !== "") {
            // Mencegah perilaku klik tautan default
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Menggunakan metode animate() jQuery untuk menambahkan scroll halaman yang smooth
            // Bilangan opsional (800) menentukan jumlah milidetik yang diperlukan untuk melakukan scrolling ke area yang ditentukan
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Tambahkan hash (#) ke URL setelah selesai scrolling (perilaku klik default)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Memanggil fungsi toggleButton saat dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", toggleButton);

// Memantau scroll event
window.onscroll = function() {
    toggleButton();
};

// Fungsi untuk menampilkan atau menyembunyikan tombol "Scroll to Top" dengan efek fade
function toggleButton() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.classList.add("fade-in");
        scrollToTopBtn.classList.remove("fade-out");
    } else {
        scrollToTopBtn.classList.add("fade-out");
        scrollToTopBtn.classList.remove("fade-in");
        setTimeout(function() {
            scrollToTopBtn.style.display = "none";
        }, 300);
    }
}

// Fungsi untuk menggulir halaman ke bagian atas dengan efek scroll yang halus
function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}

window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("blur", window.scrollY > 0);
  });
  
  
var textArray = [
  "Fahreza Pasha Haikal",
  "Graphic Designer",
  "Mechatronic Engineering",
]; // Ganti dengan array kata-kata yang diinginkan
var speed = 100; // Kecepatan penulisan (ms)
var index = 0;
var arrayIndex = 0;

function typeWriter() {
  var currentText = textArray[arrayIndex];
  if (index < currentText.length) {
    document.getElementById("typewriter").innerHTML +=
      currentText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, speed * 10); // Waktu tunda sebelum menghapus teks
  }
}

function eraseText() {
  var currentText = textArray[arrayIndex];
  if (index >= 0) {
    var newText = currentText.substring(0, index - 1);
    document.getElementById("typewriter").innerHTML = newText;
    index--;
    setTimeout(eraseText, speed);
  } else {
    arrayIndex++;
    if (arrayIndex >= textArray.length) {
      arrayIndex = 0;
    }
    setTimeout(typeWriter, speed); // Waktu tunda sebelum menulis teks lagi
  }
}

// Memulai efek typewriter saat halaman dimuat
window.onload = function () {
  typeWriter();
};

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      800
    ); // Kecepatan scroll (ms)
  }
});


function showContent(contentId) {
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
  document.getElementById(contentId).style.display = 'block';
}

// JavaScript untuk menyembunyikan loading overlay setelah halaman selesai dimuat
window.addEventListener('load', function() {
  document.querySelector('.loading-overlay').style.display = 'none';
});