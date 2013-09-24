var obj_canvas,
obj_c,
ObjX,
ObjY,
img1 = null,
img2 = null,
cp_canvas = null;

var video_canvas,
video_c;

function setupVidCanvas() {
	// Show loading notice
	video_canvas = document.getElementById('videoCanvas');
	video_c = video_canvas.getContext('2d');
	video_c.fillStyle = '#444';
	video_c.fillText('Loading...', video_canvas.width/2-30, video_canvas.height/3);

	// Setup the WebSocket connection and start the player
	var client = new WebSocket( 'ws://171.65.102.132:8084/' );
	var player = new jsmpeg(client, {canvas:video_canvas});
}

function setupObjCanvas() {
    obj_canvas = document.getElementById('objCanvas');  
    obj_c = obj_canvas.getContext('2d');
}

function drawBox(box_X,box_Y,box_L){
	obj_c.clearRect(0, 0, obj_canvas.width, obj_canvas.height);
	obj_c.strokeStyle = "rgba(250, 102, 0, 1)";
    obj_c.lineWidth = 2;
	
	obj_c.beginPath();
	obj_c.rect(box_X - box_L/2, box_Y - box_L/2, box_L, box_L);
    obj_c.stroke();	
}