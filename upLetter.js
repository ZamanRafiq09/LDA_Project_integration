const fileInputs = document.querySelectorAll('input[type="file"]');

fileInputs.forEach(input => {
  input.addEventListener('change', (event) => {
    const uploadedFileName = event.target.value.split('\\').pop(); // Extract filename from path
    alert(`You selected file: ${uploadedFileName}`);
  });
});
// upload.js
const fileInput = document.getElementById('sanctionLetter');
const finishBtn = document.getElementById('nextBtn');

finishBtn.addEventListener('click', () => {
    if (fileInput.files.length === 0) {
        alert('Error: Please upload a document before proceeding next.');
    } 
});
