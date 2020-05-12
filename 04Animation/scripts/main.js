

//  changing individual properties with code and using setInterval
 var rotationSpeed = Math.random();
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeed;
 	myOtherBox.object3D.rotation.y += rotationSpeed;
 	myOtherBox.object3D.rotation.z -= rotationSpeed;
 	console.log(rotationSpeed)
}

setInterval(spin, 16); // equivalent to 60 fps