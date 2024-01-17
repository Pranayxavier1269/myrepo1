function addElements() {
    var elementCountInput = document.getElementById("elementCount");
    var outputDiv = document.getElementById("output");

    // Clear previous content
    outputDiv.innerHTML = "";

    // Get the number of elements from the input
    var elementCount = parseInt(elementCountInput.value);

    // Validate input
    if (isNaN(elementCount) || elementCount < 1 || elementCount > 20) {
        alert("Please enter a valid number between 1 and 20.");
        return;
    }

    // Add elements to the output
    for (var i = 1; i <= elementCount; i++) {
        var newElement = document.createElement("div");
        newElement.textContent = "Element " + i;
        outputDiv.appendChild(newElement);
    }
}
