const addButton = document.getElementById("add-artwork");
const artworkSection = document.getElementById("artwork-section");

// Add Artwork

addButton.addEventListener("click", () => {

    const artworkDiv = document.createElement("div");
    artworkDiv.classList.add("artwork-item");

    artworkDiv.innerHTML = `
        <hr>
        <label>Title:
            <input type="text" name="artwork-title[]">
        </label>

        <label>Year:
            <input type="number" name="artwork-year[]">
        </label>

        <label>Image:
            <input type="file" name="artwork-image[]" accept="image/*">
        </label>

        <button type="button" class="remove-artwork">Remove</button>
    `;

    artworkSection.insertBefore(artworkDiv, addButton);

});

// Add exhibition

const exhibitionSection = document.getElementById("exhibition-section");
const addExhibitionBtn = document.getElementById("add-exhibition");

addExhibitionBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("exhibition-item");

    div.innerHTML = `
        <hr>
        <label>Title:
            <input type="text" name="exhibition-title[]">
        </label>

        <label>Venue:
            <input type="text" name="exhibition-venue[]">
        </label>

        <label>Start Date:
            <input type="date" name="exhibition-start[]">
        </label>

        <label>End Date:
            <input type="date" name="exhibition-end[]">
        </label>

        <button type="button" class="remove-exhibition">
            Remove
        </button>
    `;

    exhibitionSection.insertBefore(div, addExhibitionBtn);
});

exhibitionSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-exhibition")) {
        e.target.parentElement.remove();
    }
});