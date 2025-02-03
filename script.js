
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("more-info").addEventListener("click", function() {
        alert("Such wow! Message here amazing!");
    });
});

document.getElementById('email-link').addEventListener('click', function(event) {
    event.preventDefault();  
    document.getElementById('email-message').style.display = 'block'; 
});

function showImage(imageSrc) {
    document.getElementById("modal-img").src = imageSrc;
    document.getElementById("image-modal").style.display = "block";
}

function closeImage() {
    document.getElementById("image-modal").style.display = "none";
}

