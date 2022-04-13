status = "";
object = [];


function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelReady);
    document.getElementById("status").innerHTML = "Status: Detecting objects...";
}

function modelReady() {
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 380, 380);
    if(status != ""){
        objectDetector.detect(video, gotResults);
        for (var z = 0; z < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects detected!";
            document.getElementById("number_of_objects").innerHTML = "Number of objects: " + object.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}