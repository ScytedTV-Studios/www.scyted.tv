document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.getElementById("close");

    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            data.images.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image;
                imgElement.alt = "Gallery Image";
                imgElement.addEventListener("click", () => {
                    modal.style.display = "block";
                    modalImg.src = image;
                });
                gallery.appendChild(imgElement);
            });
        });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
