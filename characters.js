import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js'
import * as MODELS from './mscript.js'
import {resizeRendererToDisplaySize} from './functions.js'
import {makeElementObject} from './functions.js'


function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;

  function makeCamera(fov = 40) {
    const aspect = 2;  // the canvas default
    const zNear = 0.1;
    const zFar = 1000;
    return new THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
  }
  const camera = makeCamera();
  camera.position.set(8, 4, 10).multiplyScalar(3);
  camera.lookAt(0, 0, 0);



  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x92FFF2);


  var chicken = new MODELS.Chicken();
  var chef = new MODELS.Chef();
  var pig = new MODELS.Pig();
  chicken.mesh.position.set(0,0,0);
  //scene.add(chicken.mesh);

  chef.mesh.position.set(50,0,0);
  pig.mesh.position.set(100,0,0);
  //scene.add(plane2.mesh);
  //scene.add(plane2.mesh);

  const group=new THREE.Group();
  group.add(chicken.mesh);
  group.add(chef.mesh);
  group.add(pig.mesh);
  scene.add(group);

  //starting showed character
  group.position.x=-0;

  
  
    const color = 0xFFFFFF;
    const intensity = 1.2;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(4, 5, 2);
    scene.add(light);

 
var rightPressed=false;
var leftPressed=false;
var flag=true;
var selectedCharacter = 0;


    document.getElementById("button2").onclick=function(){
      rightPressed=true;

    };
    document.getElementById("button1").onclick= function(){
      leftPressed=true;
    };

  
    var temp = true;
  function render(time) {


    document.getElementById("playbutton").disabled=true;
    time *= 0.001;  // convert time to seconds
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
   
    var s=selectedCharacter;
    
  localStorage.setItem("character", s);

    if (rightPressed){
        rightPressed = false;
    if (group.position.x==0){
        
        chicken.mesh.rotation.y=0;
        group.position.x =-50;
    }
    else if (group.position.x == -50){
        
        chef.mesh.rotation.y = 0;
        group.position.x = -100;
    }
    
}

    if (leftPressed){
        leftPressed = false;
        temp = true;
        if (group.position.x==-50){
           
            chef.mesh.rotation.y=0;
            group.position.x =-0;
        }
        else if (group.position.x == -100){
            
            pig.mesh.rotation.y = 0;
            group.position.x = -50;
        }
    }


    if (group.position.x == 0){
        document.getElementById("playbutton").disabled=false;
        chicken.mesh.rotation.y +=0.03;
        selectedCharacter = 0;
        if (temp && chicken.mesh.position.y <5.5){
            chicken.mesh.position.y += 0.1;
            chicken.animationUp();
        }
        else{
            chicken.animationDown();
            temp = false;
            chicken.mesh.position.y -= 0.1;
            if (chicken.mesh.position.y < -1){temp = true}
        }
    }

    if (group.position.x == -50){
        document.getElementById("playbutton").disabled=false;
        chef.mesh.rotation.y +=0.002;
        selectedCharacter = 1;
        if (temp && chef.mesh.position.y <5.5){
            chef.mesh.position.y += 0.1;
            chef.animationUp();
        }
        else{
            
            chef.animationDown();
            temp = false;
            chef.mesh.position.y -= 0.1;
            if (chef.mesh.position.y < -1){temp = true}
        }
    }



    if (group.position.x == -100){
        document.getElementById("playbutton").disabled=false;
        selectedCharacter = 2;
        pig.mesh.rotation.y +=0.02;
        if (temp && pig.mesh.position.y <5.5){
            pig.mesh.position.y += 0.1;
            pig.animationUp();
        }
        else{
            pig.animationDown();
            temp = false;
            pig.mesh.position.y -= 0.1;
            if (pig.mesh.position.y < -1){temp = true}
        }
    }
    


    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  
  requestAnimationFrame(render);
  

 

}
main();

