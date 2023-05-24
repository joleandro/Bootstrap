// button responsive
document.getElementById("navbarToggleBtn").addEventListener("click", function() {
    var iconElement = this.querySelector(".navbar-toggler-icon");
    if (iconElement.classList.contains("btn-close")) {
        iconElement.classList.remove("btn-close");
    } else {
        iconElement.classList.add("btn-close");
    }
});

// link active
let links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', function() {
      links.forEach(otherLink => {
        otherLink.classList.remove('active');
      });
  
      link.classList.toggle('active');
    });
  });

