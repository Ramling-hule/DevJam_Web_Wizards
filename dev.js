document.getElementById("How").addEventListener("click", function() {
    
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("crowd-div").addEventListener("click", function() {
    
    document.getElementById("crowd-funding").scrollIntoView({ behavior: "smooth" });
});

// document.getElementById('share-div').addEventListener('click', function() {
//     const shareContainer = document.getElementById('share-container');
//     if (shareContainer.style.display === 'none') {
//       shareContainer.scrollIntoView({ behavior: "smooth" });
//       shareContainer.style.display = 'block'; // Show share
//     } else {
//       // shareContainer.scrollIntoView({ behavior: "smooth" });
//       shareContainer.style.display = 'none'; // Hide share
//     }
//   });
  
  // document.getElementById('chat').addEventListener('click', function() {
  //   const chatContainer = document.getElementById('chat-container');
  //   chatContainer.scrollIntoView({ behavior: "smooth" });
  //   if (chatContainer.style.display === 'none') {
  //     chatContainer.style.display = 'block'; // Show chat
  //   } else {
  //     chatContainer.style.display = 'none'; // Hide chat
  //   }
  // });


  function openModal1() {
    const modal = document.getElementById('formModal');
    const googleForm = document.getElementById('googleForm');
    
    googleForm.src = "https://docs.google.com/forms/d/1o1JIsyXIPrYUqgThu0rAmaZTPTPHHrat-MogyOVo2G4/viewform?embedded=true";
    
    modal.style.display = "block";
 }

 function openModal2() {
    const modal = document.getElementById('formModal');
    const googleForm = document.getElementById('googleForm');
    
    googleForm.src = "https://docs.google.com/forms/d/1a74CA33-yj6RqagVmpyPCauTaL94ul15XPu_axiPEQg/viewform?embedded=true";
    
    modal.style.display = "block";
 }
function closeModal() {
    document.getElementById('formModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('formModal');
    // googleForm.src = 'none';
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
  