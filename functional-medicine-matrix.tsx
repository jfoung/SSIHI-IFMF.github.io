<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functional Medicine Explorer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="quiz-container">
        <div id="quiz">
            <p class="quiz-question">What is Functional Medicine?</p>
            <ul class="quiz-options">
                <li><input type="radio" name="question1" value="correct"> A systems-oriented approach to healthcare</li>
                <li><input type="radio" name="question1" value="incorrect"> A traditional method of treating symptoms</li>
                <li><input type="radio" name="question1" value="incorrect"> A method focusing solely on pharmaceutical treatments</li>
                <li><input type="radio" name="question1" value="incorrect"> An ancient practice with no scientific basis</li>
            </ul>
            <button class="submit-btn" onclick="checkAnswer()">Submit</button>
            <div id="result" class="result"></div>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
