let startTime;
let totalElapsedTime = 0;
let currentQuestion = 0;
const totalQuestions = 5;
const correctAnswers = ["ヌオー", "トカゲ"];
const images = ["1_mn.avif", "SMGK503_L.jpg"];

function startGame() {
    startTime = new Date().getTime();
    showRandomImage();
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('buttons').style.display = 'block';
}

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const characterImage = document.getElementById("characterImage");
    characterImage.src = images[randomIndex];
    characterImage.setAttribute("data-answer", correctAnswers[randomIndex]);
}

function checkAnswer(answer) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000;
    totalElapsedTime += timeTaken;
    const resultDiv = document.getElementById("result");
    const correctAnswer = document.getElementById("characterImage").getAttribute("data-answer");

    if (answer === correctAnswer) {
        resultDiv.innerHTML = `正解！時間: ${timeTaken}秒`;
    } else {
        resultDiv.innerHTML = "不正解、残念";
    }

    currentQuestion++;

    if (currentQuestion < totalQuestions) {
        setTimeout(() => {
            resultDiv.innerHTML = "";
            startGame();
        }, 1000);
    } else {
        resultDiv.innerHTML += `<br>全部の問題が終わりました。合計時間: ${totalElapsedTime}秒`;
        document.getElementById('buttons').style.display = 'none';
        document.getElementById('restartButton').style.display = 'block';
    }
}

function restartGame() {
    totalElapsedTime = 0;
    currentQuestion = 0;
    document.getElementById('result').innerHTML = '';
    startGame();
}

// ゲーム開始時に時間を記録
startGame();
