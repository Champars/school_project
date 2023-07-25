function preload() {

}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    mobilenet = ml5.imageClassifier('MobileNet', modelloaded);
}

function modelloaded() {
    console.log("mobilenet is active");
}

function draw() {
    image(video, 0, 0, 350, 300);
    mobilenet.classify(video, gotresults);
}
prev = "";

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        if (prev != results[0].label && results[0].confidence >= 0.5) {
            prev = results[0].label
            document.getElementById("y").innerHTML = "The computer guessed: " + results[0].label;
        }
    }
}