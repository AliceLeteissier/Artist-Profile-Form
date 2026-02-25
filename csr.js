const container = document.getElementById("form-container");

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let formHTML = '<form id="artist-form">';

    // --- BASIC FIELD ---
        data.basic.forEach(field => {
            if (field.type === 'textarea') {
                formHTML += `<label>${field.label}<textarea name="${field.name}"></textarea></label>`;
            } else {
                formHTML += `<label>${field.label}<input type="${field.type}" name="${field.name}"></label>`
            }
        });

    // --- ARTWORK FIELDSET ---
        formHTML += '<fieldset><legend>Artwork</legend>';
        data.artwork.forEach(field => {
            formHTML += `<label>${field.label}:<input type="${field.type}" name="${field.name}"></label>`    
        })
        formHTML += '</fieldset>';


    // --- MEDIUM CHECKBOXES ---
        formHTML += '<fieldset><legend>Medium</legend>';
        data.medium.forEach(medium => {
            formHTML += `<label><input type="checkbox" name="mediums" value="${medium}">${medium.charAt(0).toUpperCase() + medium.slice(1)}</label>`
        });
        formHTML += '</fieldset>';

    // --- SUBMIT BUTTON ---
    
        formHTML += '<button type="submit">Submit</button></form>';

    // Insert into Container
        container.innerHTML = formHTML;
    })
        .catch(error => {
        container.innerHTML = '<p>Failed to load form data.</p>';
        console.error('Error fetching JSON:', error);
    });