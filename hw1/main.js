import * as THREE from 'three';

const scene = new THREE.Scene();//--------------------scene settings
const camera = new THREE.PerspectiveCamera();
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( 500, 500 );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );//-------------------------box
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.rotation.set (0, 45, 0);
scene.add( cube );

const video = document.createElement("video"); //---------------------------video
navigator.mediaDevices.getUserMedia({video:true}).then( (stream) => {
    video.srcObject = stream;
    video.play();
});
video.style.width = renderer.domElement.width;
video.style.height = renderer.domElement.height;
renderer.domElement.style.position = "absolute";
document.body.appendChild(video);

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();
