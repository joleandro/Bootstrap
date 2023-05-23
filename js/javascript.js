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
