const container = document.getElementById("form-container");

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    let formHTML = '<form id="artist-form">';

    // ---------------- BASIC INFO ----------------
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

    // ---------------- MEDIUM ----------------
    formHTML += '<fieldset><legend>Medium</legend>';

    data.medium.forEach(medium => {
      formHTML += `
        <label>
          <input type="checkbox" name="mediums" value="${medium}">
          ${medium.charAt(0).toUpperCase() + medium.slice(1)}
        </label>
      `;
    });

    formHTML += '</fieldset>';

    // ---------------- ARTWORK ----------------
    formHTML += '<fieldset id="artwork-section">';
    formHTML += '<legend>Selected Artworks</legend>';
    formHTML += '<div class="artwork-item">';

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

    formHTML += '</div>';
    formHTML += '<button type="button" id="add-artwork">Add Another Artwork</button>';
    formHTML += '</fieldset>';

    // ---------------- EXHIBITIONS ----------------
    formHTML += '<fieldset id="exhibition-section">';
    formHTML += '<legend>Current Exhibitions</legend>';
    formHTML += '<div class="exhibition-item">';

    data.exhibition.forEach(field => {
      formHTML += `
        <label>
          ${field.label}:
          <input type="${field.type}" name="${field.name}">
        </label>
      `;
    });

    formHTML += '</div>';
    formHTML += '<button type="button" id="add-exhibition">Add Another Exhibition</button>';
    formHTML += '</fieldset>';

    // ---------------- SUBMIT ----------------
    formHTML += '<button type="submit">Submit</button>';
    formHTML += '</form>';

    container.innerHTML = formHTML;
  })
  .catch(error => {
    container.innerHTML = '<p>Failed to load form data.</p>';
    console.error('Error fetching JSON:', error);
  });