function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameConsole");
	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on("pose", gotPoses);
}

function modalLoaded(){
	console.log("Modal Loaded");
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;
	}
}

function draw() {
	game()
}






