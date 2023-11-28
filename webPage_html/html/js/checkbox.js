function addQualification() {
    const inputField = document.getElementById("qualification");
    const qualificationName = inputField.value.trim();
    if (qualificationName !== "") {
        const qualificationList = document.getElementById("qualificationList");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
<input type="checkbox" id="checkbox_${qualificationName}">
<label for="checkbox_${qualificationName}">${qualificationName}</label>
<button onclick="removeQualification('${qualificationName}')">삭제</button>
`;
        qualificationList.appendChild(listItem);
        inputField.value = "";
    }
}

function removeQualification(qualificationName) {
    const checkbox = document.getElementById(`checkbox_${qualificationName}`);
    if (checkbox.checked) {
        const listItem = checkbox.parentElement;
        listItem.remove();
    }
}