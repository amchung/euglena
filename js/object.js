var object_canvas,
object_c,
objectOriginX,
objectOriginY;

setupObjectCanvas();

object_c.beginPath();
object_c.fillStyle = "rgba(250, 102, 0, 1)";
object_c.fillRect(ObjectOriginX - 20, ObjectOriginY - 20, 40, 40);

function setupObjectCanvas() {
    object_canvas = document.getElementById('objectCanvas');
    object_c = object_canvas.getContext('2d');
    resetObjectCanvas();
    object_c.strokeStyle = "#ffffff";
    object_c.lineWidth = 2;
}


function resetObjectCanvas(e) {
    // resize the canvas - but remember - this clears the canvas too. 
    object_canvas.width = 800;
    object_canvas.height = 600;

    objectOriginX = object_canvas.width / 2;
    objectOriginY = object_canvas.height / 2;

    // make sure we scroll to the top left. 
    window.scrollTo(0, 0);
}