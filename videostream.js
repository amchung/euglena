var video_canvas,
video_c;

// Show loading notice
video_canvas = document.getElementById('videoCanvas');
video_c = video_canvas.getContext('2d');
video_c.fillStyle = '#444';
video_c.fillText('Loading...', canvas.width/2-30, canvas.height/3);

// Setup the WebSocket connection and start the player
var client = new WebSocket( 'ws://171.65.102.132:8084/' );
var player = new jsmpeg(client, {canvas:canvas});
