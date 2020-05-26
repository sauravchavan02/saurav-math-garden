var answer;
var score = 0;
backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 4);
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.floor(Math.random() * 5);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;    
}

function checkAnswer() {
    const prediction = predictImage();
    console.log(`answer: ${answer}, predicition: ${prediction}`);
    
    if (prediction == answer){
        score++;
        if (score <= 6){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Well done! your math graden is in full bloom! want to start again?');
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }
        console.log(`correct. score ${score}`);
    } else{
        if (score != 0) {score--;}
        console.log(`wrong. score ${score}`);
        alert('oops! check your calculation and try writing the number neater next time!');
        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages; 
        }, 1000);
    }

}