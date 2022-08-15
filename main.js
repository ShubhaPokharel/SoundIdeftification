//https://teachablemachine.withgoogle.com/models/X9ZpnVHbh/

function startSound() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/X9ZpnVHbh/model.json', modelReady);

}
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound_resultsLabel").innerHTML = 'The sound is: ' + results[0].label;
        document.getElementById("confidence_results").innerHTML = 'Accuracy: ' + (results[0].confidence * 100).toFixed(2) + " %";

        document.getElementById("sound_resultsLabel").style.color = "rgb("+ r +","+ g +", "+ b +" )";
        document.getElementById("confidence_results").style.color = "rgb("+ r +","+ g +", "+ b +" )";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        
    }
}