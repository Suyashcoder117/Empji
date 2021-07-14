Webcam.set({
    width: 345,
    height: 298,
    image_format: 'png',
    png_quality: 90
     
 });
camea = document.getElementById("camera");

 Webcam.attach(camea);
 function take_snapshot(){
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri +"' />";
         ;});
     }