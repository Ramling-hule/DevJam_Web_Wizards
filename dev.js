document.getElementById("How It Works").addEventListener("click", function() {
    
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("crowd-div").addEventListener("click", function() {
    
    document.getElementById("crowd-funding").scrollIntoView({ behavior: "smooth" });
});

document.getElementById('share-div').addEventListener('click', function() {
    const formContainer = document.getElementById('form-container');
    if (formContainer.style.display === 'none') {
      formContainer.style.display = 'block'; // Show form
    } else {
      formContainer.style.display = 'none'; // Hide form
    }
  });
  