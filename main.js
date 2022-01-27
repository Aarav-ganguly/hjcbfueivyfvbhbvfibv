img = "";
status = "";

function preload()
{
img = loadImage('dog_cat.jpg');
}

function setup() 
{
canvas = createCanvas (640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function draw() 
{
image(img, 0, 0, 640, 420);
fill('#797EF6');
text("dog", 45, 75);
noFill();
stroke('#4ADEDE');
rect(30 , 60, 450, 350);

fill('#FDE992');
text("cat", 320, 120);
noFill();
stroke('FDEFB2');
rect(300 , 90, 270, 320);
}

function modelLoaded() {
console.log(" Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}