function checkAnswer() {
    const options = document.getElementsByName('question1');
    let selectedOption;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
        }
    }
    const resultDiv = document.getElementById('result');
    if (selectedOption === 'correct') {
        resultDiv.innerHTML = 'Correct! Functional Medicine is a systems-oriented approach to healthcare.';
        resultDiv.className = 'result correct';
    } else {
        resultDiv.innerHTML = 'Incorrect. Functional Medicine focuses on addressing the underlying causes of disease through a systems-oriented approach.';
        resultDiv.className = 'result incorrect';
    }
}
