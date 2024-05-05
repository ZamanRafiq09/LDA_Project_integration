// upload.js
const sanctionLetterInput = document.getElementById('sanctionLetter');
const stampedPlanInput = document.getElementById('stampedPlan');
const finishBtn = document.getElementById('nextBtn');

finishBtn.addEventListener('click', () => {
    if (sanctionLetterInput.files.length === 0 || stampedPlanInput.files.length === 0) {
        alert('Error: Please upload both documents before proceeding next.');
    } 
});
