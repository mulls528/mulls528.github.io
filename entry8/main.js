< // Function to generate a random message>
 function getRandomMessage() {
    var messages = [
      'Message 1',
      'Message 2',
      'Message 3',
      'Message 4',
      'Message 5'
    ];

    var randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }

  // Function to handle click on the image container
  function handleImageContainerClick() {
    var randomMessage = getRandomMessage();

    // Display the message in the message container
    var messageContainer = document.getElementById('message-container');
    messageContainer.textContent = randomMessage;
    messageContainer.style.display = 'block';

    // Hide the message after a delay (e.g., 2 seconds)
    setTimeout(function() {
      messageContainer.style.display = 'none';
    }, 2000);
  }

  // Add click event listener to the image container
  var imageContainer = document.getElementById('image-container');
  imageContainer.addEventListener('click', handleImageContainerClick);



