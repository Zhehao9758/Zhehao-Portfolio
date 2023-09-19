function leaveMessage() {
  // use modal later
  const message = prompt("Please leave a message here");
  if (message !== null) {
    // fake functionality for now, to be implemented with http request later
    console.log(message);
    alert("Message sent successfully!");
  }
}
