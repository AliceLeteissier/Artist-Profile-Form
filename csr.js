const container = document.getElementById("form-container");

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    let formHTML = '<form id="artist-form">';

    // ---------------- BASIC INFO ----------------
    formHTML += `
      <fieldset>
        <legend>Basic Information</legend>`;

    data.basic.forEach(field => {
      if (field.type === 'textarea') {
        formHTML += `
          <label>
            ${field.label}
            <textarea name="${field.name}"></textarea>
          </label>
        `;
      } else {
        formHTML += `
          <label>
            ${field.label}
            <input type="${field.type}" name="${field.name}">
          </label>
        `;
      }
    });
      formHTML += `
      </fieldset>
    `;

    // ---------------- MEDIUM (CARD GRID STYLE) ----------------
    formHTML += `
      <fieldset>
        <legend>Medium</legend>
        <div class="medium-grid">
    `;

    data.medium.forEach(medium => {
      formHTML += `
        <label class="medium-card">
          <input type="checkbox" name="mediums" value="${medium}">
          <span>${medium.charAt(0).toUpperCase() + medium.slice(1)}</span>
        </label>
      `;
    });

    formHTML += `
        </div>
      </fieldset>
    `;

    // ---------------- ARTWORK ----------------
    formHTML += `
      <fieldset id="artwork-section">
            <legend class="legend-flex">
                <span>Selected Artworks</span>
                <button type="button" id="add-artwork" class="add-btn">
                + Add Artwork
            </button>
            </legend>

        <div class="artwork-item">
    `;

    data.artwork.forEach(field => {
      if (field.type === "file") {
        formHTML += `
          <label>
            ${field.label}:
            <input type="${field.type}" 
                   name="${field.name}" 
                   accept="${field.accept}">
          </label>
        `;
      } else {
        formHTML += `
          <label>
            ${field.label}:
            <input type="${field.type}" 
                   name="${field.name}">
          </label>
        `;
      }
    });

    formHTML += `
        </div>
      </fieldset>
    `;

    // ---------------- SUBMIT ----------------
    formHTML += `
      <button class="submit" type="submit">Create Profile</button>
    `;

    formHTML += '</form>';

    container.innerHTML = formHTML;

    // ---------------- ADD ARTWORK FUNCTION ----------------

    const addButton = document.getElementById("add-artwork");
    const artworkSection = document.getElementById("artwork-section");

      // Add Artwork

    addButton.addEventListener("click", () => {
      const artworkDiv = document.createElement("div");
      artworkDiv.classList.add("artwork-item");

      artworkDiv.innerHTML = `
        <hr>
        <label>Title:<input type="text" name="artwork-title[]"></label>
        <label>Year:<input type="text" name="artwork-year[]" pattern="\d{4}" placeholder="YYYY"></label>
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

  })

  .catch(error => {
    container.innerHTML = '<p>Failed to load form data.</p>';
    console.error('Error fetching JSON:', error);
  });



