var toDoListCategories = ["shopping", "house", "startup", "apps", "personal", "remember"];
var checkboxSection = document.getElementById("checkboxes");
var notesSection = document.getElementById("notes");
var notes = [];
toDoListCategories.forEach(function (category) {
    // ===== CREATE RADIO BUTTONS FOR EACH CATEGORY =====
    // 1. create a bootstrap '.col' div element for the grid system
    var newColDiv = document.createElement("div");
    newColDiv.setAttribute("class", "radio-button col-sm-6 col-lg-4 " + category);
    // 2. create radio button
    var newButton = document.createElement('input');
    newButton.setAttribute("type", "radio");
    newButton.setAttribute("name", "category");
    newButton.setAttribute("id", category);
    var label = document.createElement('label');
    label.setAttribute("for", category);
    label.setAttribute("class", category);
    label.textContent = category;
    // 3. place in html
    newColDiv.appendChild(newButton);
    newColDiv.appendChild(label);
    checkboxSection ? checkboxSection.append(newColDiv) : alert("no checkbox section");
});
function displayItem(postIt, category) {
    // ===== CREATE POST-IT FOR DISPLAY FOR TO-DO ITEM =====
    // 1. create post-it
    var newPostIt = document.createElement("div");
    newPostIt.setAttribute("class", "col-sm-6 col-lg-4 post-it " + category);
    // 2. write stuff on the post-it
    var content;
    if (postIt.link) {
        content = document.createElement("a");
        content.setAttribute("href", postIt.link);
        content.setAttribute("target", "_blank");
        content.setAttribute("rel", "noopener noreferrer");
    }
    else {
        content = document.createElement("p");
    }
    content.setAttribute("class", "postit-text");
    content.textContent = postIt.note;
    // 3. place in html
    newPostIt.appendChild(content);
    notesSection ? notesSection.appendChild(newPostIt) : alert("no notes section");
}
function clearForm() {
    var note = document.getElementById("note");
    var link = document.getElementById("link");
    var radio = document.querySelector('input[name="category"]:checked');
    note.value = "";
    link.value = "";
    radio.checked = false;
}
function submit() {
    var note = document.getElementById("note").value;
    var link = document.getElementById("link").value;
    var categoryElement = document.querySelector('input[name="category"]:checked');
    if (!note) {
        alert("write a note!");
        return;
    }
    else if (!categoryElement) {
        alert("pick a category!");
        return;
    }
    var category = categoryElement.id;
    var newItem = {
        "note": note,
        "link": link
    };
    notes.push(newItem);
    displayItem(newItem, category);
    console.log(notes);
    clearForm();
}
var submitButton = document.getElementById("submit");
submitButton ? submitButton.addEventListener('click', submit) : alert("no submit button");
