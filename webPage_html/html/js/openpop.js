function displayRadioValue() {
    var answer = document.querySelector('input[type="radio"][name="RefStyle"]:checked').value;
    var answer2 = document.querySelector('input[type="radio"][name="RefStyle2"]:checked').value;

    if (answer == "Harvard" && answer2 == "Journal") {
        alert("Harvard and Journal");
        openPopup("Journal.html", answer);
    } else if (answer == "Vancouver" && answer2 == "Journal") {
        alert("Vancouver and Journal");
        openPopup("Journal.html", answer);
    } else if (answer == "APA" && answer2 == "Journal") {
        alert("APA and Journal");
        openPopup("Journal.html", answer);
    } else if (answer == "MLA" && answer2 == "Journal") {
        alert("MLA and Journal");
        openPopup("Journal.html", answer);
    } else if (answer == "Harvard" && answer2 == "Book") {
        alert("Harvard and Book");
        openPopup("Book.html", answer);
    } else if (answer == "Vancouver" && answer2 == "Book") {
        alert("Vancouver and Book");
        openPopup("Book.html", answer);
    } else if (answer == "APA" && answer2 == "Book") {
        alert("APA and Book");
        openPopup("Book.html", answer);
    } else if (answer == "MLA" && answer2 == "Book") {
        alert("MLA and Book");
        openPopup("Book.html", answer);
    } else if (answer == "Harvard" && answer2 == "Website") {
        alert("Harvard and Website");
        openPopup("Site.html", answer);
    } else if (answer == "Vancouver" && answer2 == "Website") {
        alert("Vancouver and Website");
        openPopup("Site.html", answer);
    } else if (answer == "APA" && answer2 == "Website") {
        alert("APA and Website");
        openPopup("Site.html", answer);
    } else if (answer == "MLA" && answer2 == "Website") {
        alert("MLA and Website");
        openPopup("Site.html", answer);
    } else if (answer == "Harvard" && answer2 == "Media") {
        alert("Harvard and Media");
        openPopup("Media.html", answer);
    } else if (answer == "Vancouver" && answer2 == "Media") {
        alert("Vancouver and Media");
        openPopup("Media.html", answer);
    } else if (answer == "APA" && answer2 == "Media") {
        alert("APA and Media");
        openPopup("Media.html", answer);
    } else if (answer == "MLA" && answer2 == "Media") {
        alert("MLA and Media");
        openPopup("Media.html", answer);
    } else if (answer == "Harvard" && answer2 == "Conference") {
        alert("Harvard and Conference");
        openPopup("Conference.html", answer);
    } else if (answer == "Vancouver" && answer2 == "Conference") {
        alert("Not Available as Citation was missing from CiteThemRight");
    } else if (answer == "APA" && answer2 == "Conference") {
        alert("APA and Conference");
        openPopup("Conference.html", answer);
    } else if (answer == "MLA" && answer2 == "Conference") {
        alert("MLA and Conference");
        openPopup("Conference.html", answer);
    } else {
        alert("Please Enter a Source and Style");
    }
}

function openPopup(page, answer) {
    var newWindow = window.open(page, "CitationPage", "width=800, height=600, top=100, left=100, resizable=1, scrollbars=1");
    if (newWindow) {
        newWindow.focus();
    }
    sessionStorage.setItem("answer", answer);
}