// Function to create a blob at the given coordinates
function createBlob(x, y) {
    // Create a new div element
    var blob = document.createElement("div");
    
    // Add a class to style the blob (you can customize the style in the CSS)
    blob.className = "blob";
    
    // Set the position of the blob based on the mouse coordinates
    blob.style.left = x + "px";
    blob.style.top = y + "px";
    
    // Append the blob to the body
    document.body.appendChild(blob);
  }

  // Event listener for the click event
  document.addEventListener("click", function(event) {
    // Get the mouse coordinates from the event
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    // Create a blob at the mouse coordinates
    createBlob(mouseX, mouseY);
  });