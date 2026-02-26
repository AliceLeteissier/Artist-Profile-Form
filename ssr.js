const addButton = document.getElementById("add-artwork");
const artworkSection = document.getElementById("artwork-section");

// Add Artwork
addButton.addEventListener("click", () => {
    const artworkDiv = document.createElement("div");
    artworkDiv.classList.add("artwork-item");

    artworkDiv.innerHTML = `
        <hr>
        <label>Title:<input type="text" name="artwork-title[]"></label>
        <label>Year:<input type="number" name="artwork-year[]"></label>
        <label>Image:<input type="file" name="artwork-image[]" accept="image/*"></label>
        <button type="button" class="remove-artwork">Remove</button>
    `;

// Insert after last artwork-item
    const lastItem = artworkSection.querySelector(".artwork-item:last-of-type");
    lastItem.after(artworkDiv);
});

// Remove Artwork (Event Delegation)
artworkSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-artwork")) {
        const artworkDiv = e.target.closest(".artwork-item");
        if (artworkDiv) artworkDiv.remove();
    }
});

