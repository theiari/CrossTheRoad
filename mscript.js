
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js'
import { Vector3 } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
//import { randFloat } from 'three/src/math/MathUtils';
import { randomPosition } from './functions.js';
//import * as WATER from 'Water';


const chickenSize = 15;
const zoom = 2;

//PLANE 1
export var Plane1=function(){
  this.mesh = new THREE.Object3D();

  //cilinder for the body
  const bodyGeometry = new THREE.CylinderGeometry(3, 1.5 , 20, 9, 25);
  //const bodyMaterial = new THREE.MeshPhongMaterial({color: 0x6688AA});
  var mmaterial = new THREE.MeshPhongMaterial()
  const texture = new THREE.TextureLoader().load('assets/metal.jpg')
  mmaterial.map = texture
  const bodyMesh = new THREE.Mesh(bodyGeometry, mmaterial);

  bodyMesh.position.y = 1.4;
  bodyMesh.rotation.x=Math.PI/2
  bodyMesh.castShadow = true;
  this.mesh.add(bodyMesh);


  const torusGeometry = new THREE.TorusGeometry( 2.6, 0.5, 6, 9 );
  const torusMaterial = new THREE.MeshPhongMaterial( { color: 0x6688AA } );
  const torus = new THREE.Mesh( torusGeometry, torusMaterial );
  torus.position.set(0,10,0);
  torus.rotation.x=Math.PI/2
  torus.rotation.z=Math.PI/2
  torus.castShadow = true;
  bodyMesh.add( torus );


  const tipGeometry = new THREE.CylinderGeometry( 0.8, 1.3, 3, 9 );
  const tipMaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );
  const tipCylinder = new THREE.Mesh( tipGeometry, tipMaterial );
  tipCylinder.position.set(0,10,0);
  bodyMesh.add( tipCylinder );


  const geometry = new THREE.ConeGeometry( 1, 1, 9 );
  const material = new THREE.MeshPhongMaterial( {color: 0xffff00} );
  const cone = new THREE.Mesh( geometry, material );
  cone.position.set(0,2,0);
  tipCylinder.add( cone );


  //propeller
  const propGeometry = new THREE.BoxGeometry( 1, 10, 0.2 );
  const propMaterial = new THREE.MeshPhongMaterial( {color: 0x7CFC00} );
  this.propeller = new THREE.Mesh( propGeometry, propMaterial );
  this.propeller.position.set(0,1.35,11.5);
  this.mesh.add(this.propeller);


  //wings
  var wwmaterial = new THREE.MeshPhongMaterial()

  var wtexture = new THREE.TextureLoader().load('assets/brick.jpg')
  wwmaterial.map = wtexture

  const bumpTexture = new THREE.TextureLoader().load('assets/brickMap.jpg')
  wwmaterial.bumpMap = bumpTexture
  wwmaterial.bumpScale = 0.015

  const wingGeometry = new THREE.BoxGeometry( 0.7, 4, 25 );
  //const wingMaterial = new THREE.MeshPhongMaterial( {color: 0xffa500} );
  const wing1 = new THREE.Mesh( wingGeometry, wwmaterial );
  const wing2 = new THREE.Mesh( wingGeometry, wwmaterial );
  wing1.rotation.y=Math.PI/2
  wing1.position.set(0 ,5.5, 1);
  wing2.rotation.y=Math.PI/2
  wing2.position.set(0, 5.5, -3.5);

  const wgeometryA = new THREE.CylinderGeometry( 2, 2, 0.7, 5, 1, false, 0, Math.PI );
  const wmaterialA = new THREE.MeshPhongMaterial( {color: 0xffff00} );
  const wcylinder1A = new THREE.Mesh( wgeometryA, wmaterialA );
  const wcylinder2A = new THREE.Mesh( wgeometryA, wmaterialA );
  wcylinder1A.rotation.z=-Math.PI/2
  wcylinder1A.rotation.x=Math.PI/2
  wcylinder1A.position.set(0, 0, -12.5);
  wcylinder2A.rotation.z=Math.PI/2
  wcylinder2A.rotation.x=Math.PI/2
  wcylinder2A.position.set(0, 0, 12.5);
  wing1.add( wcylinder1A );
  wing1.add( wcylinder2A );

  const wgeometryB = new THREE.CylinderGeometry( 2, 2, 0.7, 5, 1, false, 0, Math.PI );
  const wmaterialB = new THREE.MeshPhongMaterial( {color: 0xffff00} );
  const wcylinder1B = new THREE.Mesh( wgeometryB, wmaterialB );
  const wcylinder2B = new THREE.Mesh( wgeometryB, wmaterialB );
  wcylinder1B.rotation.z=-Math.PI/2
  wcylinder1B.rotation.x=Math.PI/2
  wcylinder1B.position.set(0, 0, -12.5);
  wcylinder2B.rotation.z=Math.PI/2
  wcylinder2B.rotation.x=Math.PI/2
  wcylinder2B.position.set(0, 0, 12.5);
  wing2.add( wcylinder1B );
  wing2.add( wcylinder2B );

  bodyMesh.add( wing1 );
  bodyMesh.add( wing2 );



  //poles
  const Pgeometry = new THREE.BoxGeometry( 4.8, 0.3, 0.3 );
  const Pmaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const pole1 = new THREE.Mesh( Pgeometry, Pmaterial );
  pole1.position.set(2, 1, 10);
  pole1.rotation.y=Math.PI/8
  const pole2 = new THREE.Mesh( Pgeometry, Pmaterial );
  pole2.position.set(2, -1, 10);
  pole2.rotation.y=Math.PI/8
  const pole3 = new THREE.Mesh( Pgeometry, Pmaterial );
  pole3.position.set(2, 1, -10);
  pole3.rotation.y=-Math.PI/8
  const pole4 = new THREE.Mesh( Pgeometry, Pmaterial );
  pole4.position.set(2, -1, -10);
  pole4.rotation.y=-Math.PI/8

  const Pgeometry1 = new THREE.BoxGeometry( 0.3, 5, 0.3 );
  const Pmaterial1 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const pole5 = new THREE.Mesh( Pgeometry1, Pmaterial1 );
  pole5.position.set(1.5, 5, -2);
  pole5.rotation.x=-Math.PI/4
  pole5.rotation.z=-Math.PI/8
  const pole6 = new THREE.Mesh( Pgeometry1, Pmaterial1 );
  pole6.position.set(-1.5, 5, -2);
  pole6.rotation.x=-Math.PI/4
  pole6.rotation.z=Math.PI/8

  wing1.add(pole1);
  wing1.add(pole2);
  wing1.add(pole3);
  wing1.add(pole4);

  bodyMesh.add(pole5);
  bodyMesh.add(pole6);

  //spoilers
  const spoiler = new THREE.Shape()
                      spoiler.moveTo( 2, 0 )
                      spoiler.lineTo( 0, 0 )
                      spoiler.lineTo( 1.8, 2 )
                      spoiler.lineTo( 2, 2 ); // close path
  const extrudeSettings = {
    depth: 0.5,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0.5,
  }

  const sgeometry = new THREE.ExtrudeGeometry( spoiler, extrudeSettings );
  const smaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );

  const smesh = new THREE.Mesh( sgeometry, smaterial );
  const smeshR = new THREE.Mesh( sgeometry, smaterial );
  const smeshL = new THREE.Mesh( sgeometry, smaterial );
  smesh.position.set(-0.25, -7.5, -1.8);
  smesh.rotation.y=Math.PI/2
  smesh.rotation.x=-Math.PI/2

  smeshR.rotation.x=Math.PI
  smeshR.rotation.z=Math.PI/2

  smeshL.rotation.x=Math.PI
  smeshL.rotation.z=Math.PI/2
  smeshL.rotation.y=Math.PI

  smeshR.position.set(-1.5, -7.5, 0);
  smeshL.position.set(1.5, -7.5, -0.5);


  bodyMesh.add(smesh);
  bodyMesh.add(smeshR);
  bodyMesh.add(smeshL);



  //wheels
  const Pgeometry2 = new THREE.BoxGeometry( 0.3, 2.5, 0.3 );
  const Pmaterial2 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const pole7 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole7.position.set(-1.5, 6, 3);
  pole7.rotation.x=-Math.PI/2.5
  const pole8 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole8.position.set(-1.5, 5, 3);
  pole8.rotation.x=Math.PI/2.5

  const pole9 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole9.position.set(1.5, 6, 3);
  pole9.rotation.x=-Math.PI/2.5
  const pole10 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole10.position.set(1.5, 5, 3);
  pole10.rotation.x=Math.PI/2.5

  const wheelGeometry = new THREE.CylinderGeometry( 1, 1, 0.5, 32 );
  const wheelMaterial = new THREE.MeshPhongMaterial( {color: 0x808080} );
  const wheel1 = new THREE.Mesh( wheelGeometry, wheelMaterial );
  wheel1.position.set(-0.5,-1.5,-0.1);
  wheel1.rotation.z=Math.PI/2

  const wheel2 = new THREE.Mesh( wheelGeometry, wheelMaterial );
  wheel2.position.set(0.5,-1.5,-0.1);
  wheel2.rotation.z=Math.PI/2

  const pole11 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole11.position.set(0, -7, 2.5);
  pole11.rotation.x=-Math.PI/2.5
  const pole12 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole12.position.set(0, -8, 2.5);
  pole12.rotation.x=Math.PI/2.5


  const wheel3 = new THREE.Mesh( wheelGeometry, wheelMaterial );
  wheel3.position.set(-0.5,-1.5,-0.1);
  wheel3.rotation.z=Math.PI/2

  pole7.add(wheel1);
  pole9.add(wheel2);
  pole11.add(wheel3);

  bodyMesh.add(pole7);
  bodyMesh.add(pole8);

  bodyMesh.add(pole9);
  bodyMesh.add(pole10);

  bodyMesh.add(pole11);
  bodyMesh.add(pole12);

  //guns
  const gunGeometry = new THREE.CylinderGeometry( 0.5, 0.5, 3.5, 32 );
  const gunMaterial = new THREE.MeshPhongMaterial( {color: 0x505050} );
  const gunR = new THREE.Mesh( gunGeometry, gunMaterial );
  gunR.position.set(1, -0.8, 0);
  gunR.rotation.z=Math.PI/2
  const gunL = new THREE.Mesh( gunGeometry, gunMaterial );
  gunL.position.set(1, 0.8 , 0);
  gunL.rotation.z=Math.PI/2

  const Pmaterial3 = new THREE.MeshPhongMaterial( {color: 0x505050} );
  const pole14 = new THREE.Mesh( Pgeometry2, Pmaterial3 );
  const pole15 = new THREE.Mesh( Pgeometry2, Pmaterial3 );
  pole14.position.set(3, 6.5,-1);
  pole14.rotation.z=Math.PI/2;
  pole15.position.set(-3, 6.5,-1);
  pole15.rotation.z=Math.PI/2;

  pole14.add(gunR);
  pole15.add(gunL);

  bodyMesh.add(pole14);
  bodyMesh.add(pole15);

  this.bulletr1_position_x= -2;
  this.bulletr1_position_y= 0;
  this.bulletr1_position_z= 3.5;
  this.bulletl1_position_x= 2;
  this.bulletl1_position_y= 0;
  this.bulletl1_position_z= 3.5;

  this.hit=false;

  this.R1bullets=[];
  this.L1bullets=[];

  this.R1bullets=[];
  this.L1bullets=[];

var bullet_velocity=1.2;


this.shoot=function(){
this.R1bullets.forEach(b => {
  b.mesh.position.z-=bullet_velocity;
  });


this.L1bullets.forEach(b => {
  b.mesh.position.z-=bullet_velocity;
});
}
  
  this.destroy=function(){
    if(this.hit){
      //this.mesh.position.y-=0.002*this.mesh.position.z*this.mesh.position.z;
      this.mesh.position.y-=0.002*125;
      this.mesh.position.z-=0.5;
      this.mesh.rotation.x-=0.02;
      this.mesh.rotation.z+=0.1;
    }
  }

  this.movePlanePattern1=function(vel){
    this.mesh.position.z-=vel;
  }

  var flag=true;
  this.ll=randomPosition(-90,90);
 
  this.movePlanePattern2=function(velz, velx){
    this.mesh.position.z-=velz;
    if(this.mesh.position.x < this.ll && flag==true){
      this.mesh.position.x+=velx;

      if( this.mesh.position.x >= this.ll){ flag=false}
    }else if(this.mesh.position.x > this.ll-30 && flag==false){
      this.mesh.position.x-=velx;
      if( this.mesh.position.x <= this.ll-30){ flag=true}
    }
  }

  this.playerHit=false;
  this.playerLives;
  this.removelife=function(){
    if(this.playerHit){
    this.playerLives-=1;
    this.playerHit=false;
  }
}
this.destroyPlayer=function(){
  if(this.playerLives<=0){
    //this.mesh.position.y-=1;
    //this.mesh.rotation.z+=0.1;
    //this.mesh.position.y-=0.002*this.mesh.position.z*this.mesh.position.z;
    this.mesh.position.y-=0.008*125;
    this.mesh.position.z-=0.5;
    this.mesh.rotation.x-=0.04;
    this.mesh.rotation.z-=0.08;

  }
}

}
//
export var Plane33=function(){
  const plane = new THREE.Group();
  this.mesh = new THREE.Object3D();

  const body = new THREE.Mesh(
    new THREE.BoxBufferGeometry( chickenSize*zoom, chickenSize*zoom, 20*zoom ),
    new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } )
  );
  body.position.z = 10*zoom;
  body.castShadow = true;
  body.receiveShadow = true;
  plane.add(body);

  const rowel = new THREE.Mesh(
    new THREE.BoxBufferGeometry( 2*zoom, 4*zoom, 2*zoom ),
    new THREE.MeshLambertMaterial( { color: 0xF0619A, flatShading: true } )
  );
  rowel.position.z = 21*zoom;
  rowel.castShadow = true;
  rowel.receiveShadow = false;
  plane.add(rowel);
}

export var Pig = function(){
this.mesh = new THREE.Object3D();
// geometry for the pig's body
const bodyGeometry = new THREE.BoxBufferGeometry(5, 2, 2.2);
const noseGeometry = new THREE.BoxBufferGeometry(0.8, 1, 1.3);
const noseHoleGeometry = new THREE.BoxBufferGeometry(0.2, 0.5, 0.3);
const eyeGeometry = new THREE.BoxBufferGeometry(0.3, 0.3, 0.3);
const tailGeometry = new THREE.CylinderBufferGeometry(0.1, .2, 1.4);




// material for the pink pig's body
const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xFFC0CB });
const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFFC0F0 });
const eyesMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
const noseHoleMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
// Mesh for the pig's body
const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
const noseMesh = new THREE.Mesh(noseGeometry, headMaterial);
const noseHolesMesh1 = new THREE.Mesh(noseHoleGeometry,noseHoleMaterial);
const noseHolesMesh2 = new THREE.Mesh(noseHoleGeometry,noseHoleMaterial);
const eyeMesh1 = new THREE.Mesh(eyeGeometry,eyesMaterial);
const eyeMesh2 = new THREE.Mesh(eyeGeometry,eyesMaterial);
const tailMesh = new THREE.Mesh(tailGeometry, bodyMaterial);





noseHolesMesh1.position.set(4.4,1.2,0.3);
noseHolesMesh2.position.set(4.4,1.2,-0.3);
eyeMesh1.position.set(4,2.2,0.4);
eyeMesh2.position.set(4,2.2,-0.4);
// Create a geometry for the pig's head
const headGeometry = new THREE.BoxBufferGeometry(1.7, 2, 2);

// material for the pink pig's head


// mesh for the pig's head
const headMesh = new THREE.Mesh(headGeometry, bodyMaterial);

// Position the pig's head on top of the pig's body
headMesh.position.set(3.2, 1.5, 0);
noseMesh.position.set(4,1.2,0);
//pig's head to the scene
this.mesh.add(headMesh);

// geometry for the pig's legs
const legGeometry = new THREE.BoxBufferGeometry(.8, 2, .8);

// material for the pink pig's legs
const legMaterial = new THREE.MeshPhongMaterial({ color: 0xFFC0D3 });

//meshes for the pig's legs
const leftFrontLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const rightFrontLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const leftBackLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const rightBackLegMesh = new THREE.Mesh(legGeometry, legMaterial);

// pig's legs on the bottom of the pig's body
leftFrontLegMesh.position.set(-1.8, -1.8, -0.7);
rightFrontLegMesh.position.set(-1.8, -1.8, 0.7);
leftBackLegMesh.position.set(1.8, -1.8, 0.7);
rightBackLegMesh.position.set(1.8, -1.8, -0.7);
tailMesh.position.set(-3,.8,0);
tailMesh.rotation.z = 20;


//Grouping pig's limbs
const groupedHeadPig = new THREE.Group();
groupedHeadPig.add(headMesh);
groupedHeadPig.add(eyeMesh1);
groupedHeadPig.add(eyeMesh2);
groupedHeadPig.add(noseMesh);
groupedHeadPig.add(noseHolesMesh1);
groupedHeadPig.add(noseHolesMesh2);




// Add the pig's body to the scene
this.mesh.add(bodyMesh);
this.mesh.add(groupedHeadPig);
this.mesh.add(tailMesh);
this.mesh.add(rightFrontLegMesh);
this.mesh.add(leftBackLegMesh);
this.mesh.add(leftFrontLegMesh);
this.mesh.add(rightBackLegMesh);


// mesh for the pig's tail


// pig's tail on the back of the pig's body


this.animationUp = function(){
groupedHeadPig.rotation.z += .5 * 0.005;
rightFrontLegMesh.rotation.z += 1.5 * 0.005;
leftBackLegMesh.rotation.z -= 1.5 * 0.005;
leftFrontLegMesh.rotation.z -=1.5 * 0.005;
rightBackLegMesh.rotation.z +=1.5 * 0.005;
tailMesh.position.x+=1 * 0.005;;
tailMesh.rotation.z += 2 * 0.005;
}

this.animationDown = function(){
  groupedHeadPig.rotation.z -= .5 * 0.005;
  rightFrontLegMesh.rotation.z -= 1.5 * 0.005;
  leftBackLegMesh.rotation.z += 1.5 * 0.005;
  leftFrontLegMesh.rotation.z +=1.5 * 0.005;
  rightBackLegMesh.rotation.z -=1.5 * 0.005;
  tailMesh.rotation.z -= 2 * 0.005;
  tailMesh.position.x-=1 * 0.005;
}



  
}


export var Chicken = function() {
  this.mesh = new THREE.Object3D();
  

  
//GEOMETRIES
const bodyGeometry = new THREE.BoxGeometry(3, 2, 2.2);
  const headGeometry = new THREE.BoxGeometry(1, 2, 1.5);
  const wingGeometry = new THREE.BoxGeometry(2,1,0.5);
  const legGeometry = new THREE.BoxGeometry(0.2,2,0.2);
  const footGeometry = new THREE.BoxGeometry(1,0.1,0.4);
  const beakGeometry = new THREE.BoxGeometry(1.2,0.5,1.3);
  const tongueGeometry = new THREE.BoxGeometry(1.2,.6,0.7); //indeed it's not literally its tongue tho...
  const eyesGeometry = new THREE.BoxGeometry(.25, .25, .25);
  //MATERIALS
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  const legMaterial = new THREE.MeshPhongMaterial({color: 0x9b870c })
  const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFF000D});
  const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000});
//MESHES
  // Create a mesh for the chicken's body
  const bodyMesh = new THREE.Mesh(bodyGeometry, material);

  // Create a mesh for the chicken's head
  const headMesh = new THREE.Mesh(headGeometry, material);

  //legs meshes
  const rightLegMesh = new THREE.Mesh(legGeometry, legMaterial);
  const leftLegMesh = new THREE.Mesh(legGeometry, legMaterial);
  
  //wings meshes
  const leftWingMesh = new THREE.Mesh(wingGeometry, material);
  const rightWingMesh = new THREE.Mesh(wingGeometry, material);

  //feet meshes
  const leftFootMesh = new THREE.Mesh(footGeometry, legMaterial);
  const rightFootMesh = new THREE.Mesh(footGeometry, legMaterial);

  //beak mesh
  const beakMesh = new THREE.Mesh(beakGeometry, legMaterial);

  //tongue mesh
  const tongueMesh = new THREE.Mesh(tongueGeometry, headMaterial);
  //eyes meshes
  const leftEyeMesh = new THREE.Mesh(eyesGeometry, eyeMaterial);
  const rightEyeMesh = new THREE.Mesh(eyesGeometry, eyeMaterial);
//POSITIONS & ROTATIONS
  headMesh.position.set(1.5, 1.5, 0);
  leftLegMesh.position.set(-0.3,-2,-0.5);
  
  rightLegMesh.position.set(-0.3,-2,0.5);


  
  leftWingMesh.position.set(0.8,0,1.35);
  leftWingMesh.rotation.z = 35;
  rightWingMesh.rotation.z = 35;
  rightWingMesh.position.set(0.8,0,-1.35);

  leftFootMesh.position.set(0,-3,-0.5);
  rightFootMesh.position.set(0,-3,0.5);

  beakMesh.position.set(2.2,1.7,0);

  tongueMesh.position.set(2,1.2,0);
  
  leftEyeMesh.position.set(2,2.2,0.5);
  rightEyeMesh.position.set(2,2.2,-0.5);


//limbs nesting for the animations
const groupedLeftLeg = new THREE.Group();
groupedLeftLeg.add(leftFootMesh);
groupedLeftLeg.add(leftLegMesh);
const groupedRightLeg = new THREE.Group();
groupedRightLeg.add(rightLegMesh);
groupedRightLeg.add(rightFootMesh);
const groupedHead = new THREE.Group();
groupedHead.add(headMesh);
groupedHead.add(beakMesh);
groupedHead.add(tongueMesh);
groupedHead.add(leftEyeMesh);
groupedHead.add(rightEyeMesh);



  // Add the body and head meshes to the `Chicken` object
  this.mesh.add(bodyMesh);
  this.mesh.add(groupedHead);
 
  this.mesh.add(leftWingMesh);
  this.mesh.add(rightWingMesh);
  this.mesh.add(groupedLeftLeg);
  this.mesh.add(groupedRightLeg);



  

  this.animationUp = function(){
    this.moveWingsUp();
    this.moveHeadUp();
    this.moveLegsUp();
  }

  this.animationDown = function(){
    this.moveWingsDown();
    this.moveHeadDown();
    this.moveLegsDown();
  }


  this.moveWingsUp = function(){
    
      leftWingMesh.rotation.x -= 25.5*0.0005;
      rightWingMesh.rotation.x += 25.5*0.0005;
      
  }
  this.moveWingsDown = function(){
    
    leftWingMesh.rotation.x += 25.5*0.0005;
    rightWingMesh.rotation.x -= 25.5*0.0005;
    
}

  this.moveLegsUp= function(){
    
    groupedLeftLeg.rotation.z -= 5 * 0.002;
    groupedRightLeg.rotation.z += 5 * 0.002;
  
}

  this.moveLegsDown= function(){
    groupedLeftLeg.rotation.z += 5 * 0.002;
    groupedRightLeg.rotation.z -= 5 * 0.002;
  }

  this.moveHeadUp = function(){
    groupedHead.rotation.z += 5 * 0.0015;
  }

  this.moveHeadDown = function(){
    groupedHead.rotation.z -= 5 * 0.0015;
  }



};


export var Chef = function() {
  this.mesh = new THREE.Object3D();

  // Create a geometry for the dummy's body
  const bodyGeometry = new THREE.BoxGeometry(3, 4, 2);

  // Create a material for the dummy
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

  // Create a mesh for the dummy's body
  const bodyMesh = new THREE.Mesh(bodyGeometry, material);

  // Create a geometry for the dummy's head
  const headGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

  // Create a material for the dummy's head
  const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFFCDCD });

  // Create a mesh for the dummy's head
  const headMesh = new THREE.Mesh(headGeometry, headMaterial);

  // Position the head mesh on top of the body mesh
  headMesh.position.set(0, 3, 0);

  // Create a geometry for the dummy's arms
  const armGeometry = new THREE.BoxGeometry(0.5, 3, 0.75);

  // Create a material for the dummy's arms
  const armMaterial = new THREE.MeshPhongMaterial({ color: 0xFFCDCD });

  // Create a mesh for the dummy's left arm
  const leftArmMesh = new THREE.Mesh(armGeometry, armMaterial);

  // Position the left arm mesh on the side of the body mesh
  leftArmMesh.position.set(2, 1.25, 1);
  leftArmMesh.rotation.set(1.7,0,0);
  // Create a mesh for the dummy's right arm
  const rightArmMesh = new THREE.Mesh(armGeometry, armMaterial);

  // Position the right arm mesh on the other side of the body mesh
  rightArmMesh.position.set(-2, 2, 1);
  rightArmMesh.rotation.set(-2, 0, 0);
  // Create a geometry for the dummy's legs
  const legGeometry = new THREE.BoxGeometry(0.75, 3.2, 0.5);

  // Create a material for the dummy's legs
  const legMaterial = new THREE.MeshPhongMaterial({ color: 0xFFCDCD });

  // Create a mesh for the dummy's left leg
  const leftLegMesh = new THREE.Mesh(legGeometry, legMaterial);

  // Position the left leg mesh below the body mesh
  leftLegMesh.position.set(0.7, -3.25, 0);

  // Create a mesh for the dummy's right leg
  const rightLegMesh = new THREE.Mesh(legGeometry, legMaterial);

  // Position the right leg mesh below the body mesh
  rightLegMesh.position.set(-0.7, -3.25, 0);

  const hatGeometry = new THREE.CylinderBufferGeometry(.7,.7,1.5,6);
  const hatTopGeometry = new THREE.CylinderBufferGeometry(1,1,.8,5);

  const knifeGripGeometry = new THREE.BoxBufferGeometry(.2,.2,1.2);
  const knifeBladeGeometry = new THREE.BoxBufferGeometry(0.08,1,2);


  const gripMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
  const bladeMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
  const gripMesh = new THREE.Mesh(knifeGripGeometry,gripMaterial);
  const bladeMesh = new THREE.Mesh(knifeBladeGeometry,bladeMaterial);
  const hatTopMesh = new THREE.Mesh(hatTopGeometry,material);
  const hatMesh = new THREE.Mesh(hatGeometry,material);
  hatMesh.position.set(0,4.5,0);
  hatTopMesh.position.set(0,5.5,0);

  gripMesh.rotation.x=2;
  bladeMesh.rotation.x=2;
  gripMesh.position.set(-2,3,2.5);
  bladeMesh.position.set(-2,3.8,3.3);

//grouping elements
  const groupedRightArm = new THREE.Group();
  groupedRightArm.add(rightArmMesh);
  groupedRightArm.add(gripMesh);
  groupedRightArm.add(bladeMesh);
  const groupedHeadChef = new THREE.Group();
  groupedHeadChef.add(headMesh);
  groupedHeadChef.add(hatMesh);
  groupedHeadChef.add(hatTopMesh);


  // Add the body, head, arms, and legs meshes to the `Dummy` object
  this.mesh.add(bodyMesh);
  this.mesh.add(leftArmMesh);
  this.mesh.add(groupedRightArm);
  this.mesh.add(leftLegMesh);
  this.mesh.add(rightLegMesh);
  this.mesh.add(groupedHeadChef);
 


this.animationUp = function(){
  groupedHeadChef.rotation.x += .5 * 0.005;
  groupedRightArm.rotation.x -= 1.5 * 0.005;
  leftLegMesh.rotation.x +=1.7 * 0.005;
  leftLegMesh.position.z -=1.9 * 0.005;
  rightLegMesh.rotation.x -=1.7 * 0.005;
  rightLegMesh.position.z +=1.9 * 0.005;
  leftArmMesh.rotation.x -= 2.3 * 0.005;
}

this.animationDown = function(){
  groupedHeadChef.rotation.x -= .5 * 0.005;
  groupedRightArm.rotation.x += 1.5 * 0.005;
  leftLegMesh.rotation.x -=1.7 * 0.005;
  rightLegMesh.rotation.x +=1.7 * 0.005;
  rightLegMesh.position.z -=1.9 * 0.005;
  leftLegMesh.position.z +=1.9 * 0.005;
  leftArmMesh.rotation.x += 2.3 * 0.005;
}



};

/*export var Plane2 = function(){
this.mesh= new THREE.Object3D();

// Material
const material = new THREE.MeshLambertMaterial({ color: 0xffffff })




class Figure {
	constructor(params) {
		this.params = {
			x: 0,
			y: 0,
			z: 0,
			ry: 0,
			...params
		}
		
		// Create group and add to scene
		this.group = new THREE.Group()

//this.mesh.add(this.group)  ;

// Position according to params
this.group.position.x = this.params.x;
this.group.position.y = this.params.y;
this.group.position.z = this.params.z;
this.group.rotation.y = this.params.ry;
this.group.scale.set(5, 5, 5);

// Material
this.headHue = 50;
this.bodyHue = 50;
this.headLightness = 50;
this.headMaterial = new THREE.MeshLambertMaterial({ color: `hsl(${this.headHue}, 30%, ${this.headLightness}%)` });
this.bodyMaterial = new THREE.MeshLambertMaterial({ color: `hsl(${this.bodyHue}, 85%, 50%)` });
}

createBody() {
this.body = new THREE.Group();
const geometry = new THREE.BoxGeometry(1, 1.5, 1);
const bodyMain = new THREE.Mesh(geometry, this.bodyMaterial);

this.body.add(bodyMain);
this.group.add(this.body);

this.createLegs();
}

createHead() {
// Create a new group for the head
this.head = new THREE.Group();

// Create the main cube of the head and add to the group
const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);
const headMain = new THREE.Mesh(geometry, this.headMaterial);
this.head.add(headMain);

// Add the head group to the figure
this.group.add(this.head);

// Position the head group
this.head.position.y = 1.65;
this.mesh.add(this.head);
// Add the eyes
this.createEyes();
}

createArms() {
const height = 0.85;

for(let i = 0; i < 2; i++) {
  const armGroup = new THREE.Group();
  const geometry = new THREE.BoxGeometry(0.25, height, 0.25);
  const arm = new THREE.Mesh(geometry, this.headMaterial);
  const m = i % 2 === 0 ? 1 : -1;
  
  // Add arm to group
  armGroup.add(arm);
  
  // Add group to figure
  this.body.add(armGroup);
  
  // Translate the arm by half the height
  arm.position.y = height * -0.5;
  
  // Position the arm relative to the figure
  armGroup.position.x = m * 0.8;
  armGroup.position.y = 0.6;
  
  // Rotate the arm
  //armGroup.rotation.z = degreesToRadians(30 * m);
}
}

createEyes() {
const eyes = new THREE.Group();
const geometry = new THREE.SphereGeometry(0.15, 12, 8);
const material = new THREE.MeshLambertMaterial({ color: 0x44445c });

for(let i = 0; i < 2; i++) {
  const eye = new THREE.Mesh(geometry, material);
  const m = i % 2 === 0 ? 1 : -1;
  
  eyes.add(eye);
  eye.position.x = 0.36 * m;
}

this.head.add(eyes);

eyes.position.y = -0.1;
eyes.position.z = 0.7;
}

createLegs() {
const legs = new THREE.Group();
const geometry = new THREE.BoxGeometry(0.25, 0.4, 0.25);

for(let i = 0; i < 2; i++) {
  const leg = new THREE.Mesh(geometry, this.headMaterial);
  const m = i % 2 === 0 ? 1 : -1;
  
  legs.add(leg);
  leg.position.x = m * 0.22;
}

this.group.add(legs);
legs.position.y = -1.15;

this.body.add(legs);
}

init() {
this.createBody();
this.createHead();
this.createArms();
}
}

const figure = new Figure({
//ry: degreesToRadians(30)
})
figure.init();


}*/






//PLANE 2 DISABLED FOR NOW
/*export var Plane2 = function(){
this.mesh= new THREE.Object3D();
const bodyGeometryp2 = new THREE.CylinderGeometry(3, 1 , 20, 9, 25);
//const bodyMaterialp2= new THREE.MeshPhongMaterial({color: 0x00ff00});
var mmaterial2 = new THREE.MeshPhongMaterial()
const texture2 = new THREE.TextureLoader().load('assets/metal.jpg')
mmaterial2.map = texture2
const bodyMeshp2 = new THREE.Mesh(bodyGeometryp2, mmaterial2);

bodyMeshp2.position.y = 1.4;
bodyMeshp2.rotation.x=Math.PI/2
bodyMeshp2.castShadow = true;
this.mesh.add(bodyMeshp2);

var cilmaterial = new THREE.MeshPhongMaterial()

  var ctexture = new THREE.TextureLoader().load('assets/rust.jpg')
  cilmaterial.map = ctexture

  const cbumpTexture = new THREE.TextureLoader().load('assets/rustMap.jpg')
  cilmaterial.bumpMap = cbumpTexture
  cilmaterial.bumpScale = 0.015

const tipGeometryp2 = new THREE.CylinderGeometry( 1.5, 3, 2, 9 );
//const tipMaterialp2 = new THREE.MeshPhongMaterial( {color: 0xff0000} );
const tipCylinderp2 = new THREE.Mesh( tipGeometryp2, cilmaterial );
tipCylinderp2.position.set(0,11,0);
bodyMeshp2.add( tipCylinderp2 );

const geometry4 = new THREE.ConeGeometry( 1.5, 1, 9 );
const material4 = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const cone4 = new THREE.Mesh( geometry4, material4 );
cone4.position.set(0,1.5,0);
tipCylinderp2.add( cone4 );


//propeller
const propGeometryp = new THREE.BoxGeometry( 1, 10, 0.2 );
const propMaterialp = new THREE.MeshPhongMaterial( {color: 0x7CFC00} );
this.propeller = new THREE.Mesh( propGeometryp, propMaterialp );
const propellerp2 = new THREE.Mesh( propGeometryp, propMaterialp );
this.propeller.position.set(0, 1.35, 12);
propellerp2.position.set(0, 0,0 );
propellerp2.rotation.z=Math.PI/2
this.propeller.add( propellerp2 );
this.mesh.add( this.propeller );

//wings
const wings = new THREE.Shape();
					wings.moveTo( 20, 0 );
					wings.lineTo( 0, 0 );
					wings.lineTo( 0, 3 );
					wings.lineTo( 16, 6 );
          wings.lineTo( 24, 6 );
          wings.lineTo( 40, 3 );
          wings.lineTo( 40, 0 );

const extrudeSettingsW = {
  depth: 0.5,
  bevelEnabled: true,
  bevelSegments: 0,
  steps: 2,
  bevelSize: 0.5,
  bevelOffset: 0,
	bevelSegments: 1
}

const wgeometry = new THREE.ExtrudeGeometry( wings, extrudeSettingsW );
const wmaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );
const wmesh = new THREE.Mesh( wgeometry, wmaterial );

wmesh.scale.set(1,1,0.05);
wmesh.position.set(-20, 2, 1.5);
bodyMeshp2.add(wmesh);

//wheels
const Pgeometry2 = new THREE.BoxGeometry( 0.3, 2.5, 0.3 );
const Pmaterial2 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
const pole7 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
pole7.position.set(-1.5, 6, 3);
pole7.rotation.x=-Math.PI/2.5
const pole8 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
pole8.position.set(-1.5, 5, 3);
pole8.rotation.x=Math.PI/2.5
const wheelGeometry = new THREE.CylinderGeometry( 1, 1, 0.5, 32 );
const wheelMaterial = new THREE.MeshPhongMaterial( {color: 0x808080} );
const wheel1 = new THREE.Mesh( wheelGeometry, wheelMaterial );
wheel1.position.set(-0.5,-1.5,-0.1);
wheel1.rotation.z=Math.PI/2

const wheel2 = new THREE.Mesh( wheelGeometry, wheelMaterial );
wheel2.position.set(0.5,-1.5,-0.1);
wheel2.rotation.z=Math.PI/2
const pole9 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
pole9.position.set(1.5, 6, 3);
pole9.rotation.x=-Math.PI/2.5
const pole10 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
pole10.position.set(1.5, 5, 3);
pole10.rotation.x=Math.PI/2.5

pole7.add(wheel1);
pole9.add(wheel2);


bodyMeshp2.add(pole7);
bodyMeshp2.add(pole8);

bodyMeshp2.add(pole9);
bodyMeshp2.add(pole10);


const wheelp2 = new THREE.Mesh( wheelGeometry, wheelMaterial );
wheelp2.position.set(0,-8,1.2);
wheelp2.rotation.z=Math.PI/2
bodyMeshp2.add(wheelp2);




//spoilers
var spmaterial = new THREE.MeshPhongMaterial()

  var sptexture = new THREE.TextureLoader().load('assets/rust.jpg')
  spmaterial.map = sptexture

  const spbumpTexture = new THREE.TextureLoader().load('assets/rustMap.jpg')
  spmaterial.bumpMap = spbumpTexture

const sgeometry2 = new THREE.BoxGeometry( 11, 1.5, 0.5 );
//const smaterial2 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
const spoilerp2 = new THREE.Mesh( sgeometry2, spmaterial );
spoilerp2.position.set(0,-9,-0.5);
bodyMeshp2.add( spoilerp2 );
const spoiler = new THREE.Shape()
                      spoiler.moveTo( 2, 0 )
                      spoiler.lineTo( 0, 0 )
                      spoiler.lineTo( 1.8, 2 )
                      spoiler.lineTo( 2, 2 ); // close path
  const extrudeSettings = {
    depth: 0.5,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0.5,
  }
const sgeometry = new THREE.ExtrudeGeometry( spoiler, extrudeSettings );
const smaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );
const smesh2 = new THREE.Mesh( sgeometry, smaterial );
smesh2.position.set(-0.25,-7.5,-1.4);
smesh2.rotation.y=Math.PI/2
smesh2.rotation.x=-Math.PI/2
bodyMeshp2.add(smesh2);


//cabin
const cgeometry = new THREE.TorusGeometry( 2, 1.5, 16, 100, Math.PI );
const cmaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
const cabin = new THREE.Mesh( cgeometry, cmaterial );
cabin.rotation.y=Math.PI/2
cabin.rotation.x=-Math.PI/2
cabin.position.set(0,0,0);
bodyMeshp2.add( cabin );

//guns
const Pmaterial3 = new THREE.MeshPhongMaterial( {color: 0x505050} );
const pole14 = new THREE.Mesh( Pgeometry2, Pmaterial3 );
const pole15 = new THREE.Mesh( Pgeometry2, Pmaterial3 );
pole14.position.set(3, 6.5,-1);
pole14.rotation.z=Math.PI/2;
pole15.position.set(-3, 6.5,-1);
pole15.rotation.z=Math.PI/2;

const gunGeometry = new THREE.CylinderGeometry( 0.5, 0.5, 3.5, 32 );
const gunMaterial = new THREE.MeshPhongMaterial( {color: 0x505050} );
const gunR2 = new THREE.Mesh( gunGeometry, gunMaterial );
gunR2.position.set(-1.2 , 7, -2);
gunR2.rotation.x=-Math.PI/24
const gunL2 = new THREE.Mesh( gunGeometry, gunMaterial );
gunL2.position.set(1.2 , 7 , -2);
gunL2.rotation.x=-Math.PI/24
bodyMeshp2.add( gunR2 );
bodyMeshp2.add( gunL2 );


const gunR = new THREE.Mesh( gunGeometry, gunMaterial );
gunR.position.set(1, -0.8, 0);
gunR.rotation.z=Math.PI/2
const gunL = new THREE.Mesh( gunGeometry, gunMaterial );
gunL.position.set(1, 0.8 , 0);
gunL.rotation.z=Math.PI/2


pole14.add(gunR);
pole15.add(gunL);

const gunR3 = pole14.clone();
const gunR4 = pole14.clone();
const gunL3= pole15.clone();
const gunL4 = pole15.clone();
gunR3.rotation.y=-Math.PI/2
gunR3.position.set(-9,3,2.6);
gunR4.rotation.y=-Math.PI/2
gunR4.position.set(-18,3,2.6);
gunL3.rotation.y=Math.PI/2
gunL3.position.set(9,3,2.6);
gunL4.rotation.y=Math.PI/2
gunL4.position.set(18,3,2.6);
bodyMeshp2.add( gunR3 );
bodyMeshp2.add( gunL3 );
bodyMeshp2.add( gunR4 );
bodyMeshp2.add( gunL4 );

this.hit=false;

this.playerHit=false;
  this.playerLives;
  this.removelife=function(){
    if(this.playerHit){
    this.playerLives-=1;
    this.playerHit=false;
    }
  }
  this.destroyPlayer=function(){
    if(this.playerLives<=0){
      //this.mesh.position.y-=1;
      //this.mesh.rotation.z+=0.1;
      //this.mesh.position.y-=0.002*this.mesh.position.z*this.mesh.position.z;
      this.mesh.position.y-=0.005*125;
      this.mesh.position.z-=0.5;
      this.mesh.rotation.x-=0.01;
      this.mesh.rotation.z-=0.09;

    }
  }
  
  this.destroy=function(){
    if(this.hit){
      //this.mesh.position.y-=1;
      //this.mesh.rotation.z+=0.1;
      //this.mesh.position.y-=0.002*this.mesh.position.z*this.mesh.position.z;
      this.mesh.position.y-=0.002*125;
      this.mesh.position.z-=0.5;
      this.mesh.rotation.x-=0.01;
      this.mesh.rotation.z-=0.05;

    }
  }
  this.movePlanePattern1=function(vel){
    this.mesh.position.z-=vel;
  }

  this.rotate=function(){
    if(this.mesh.rotation.z<2*Math.PI){
      this.mesh.rotation.z+=0.1;
    }
  }

  var flag=true;
  this.ll=randomPosition(-90,90);
 
  this.movePlanePattern2=function(velz, velx){
    this.mesh.position.z-=velz;
    if(this.mesh.position.x < this.ll && flag==true){
      this.mesh.position.x+=velx;

      if( this.mesh.position.x >= this.ll){ flag=false}
    }else if(this.mesh.position.x > this.ll-30 && flag==false){
      this.mesh.position.x-=velx;
      if( this.mesh.position.x <= this.ll-30){ flag=true}
    }
  }



//Bullets

//const BulletGeometry = new THREE.BoxGeometry( 0.5, 2.5, 0.5 );
//const BulletMaterial = new THREE.MeshPhongMaterial( {color: 0xD4AF37} );
//this.bullet = new THREE.Mesh( BulletGeometry, BulletMaterial );
this.bulletr1_position_x= -9;
this.bulletr1_position_y= 0;
this.bulletr1_position_z= 3.5;
this.bulletl1_position_x= 9;
this.bulletl1_position_y= 0;
this.bulletl1_position_z= 3.5;
//this.bullet=new Bullet();
//this.bullet.mesh.position.set(-9,5, 3.5);
//this.mesh.add( this.bullet.mesh );

this.positionPoint=null;

this.R1bullets=[];
this.L1bullets=[];

var bullet_velocity=1.7;


this.shoot=function(){
this.R1bullets.forEach(b => {
  b.mesh.position.z-=bullet_velocity;
  });


this.L1bullets.forEach(b => {
  b.mesh.position.z-=bullet_velocity;
});
}
} */


export var Bullet = function(){
  const BulletGeometry = new THREE.BoxGeometry( 0.5, 2.5, 0.5 );
  const BulletMaterial = new THREE.MeshPhongMaterial( {color: 0xD4AF37} );
  this.mesh= new THREE.Mesh( BulletGeometry, BulletMaterial );
  this.mesh.rotation.x=Math.PI/2;

  this.shoot=function(vel){
    this.mesh.position.z+=vel;
  }
  this.stop=function(){
    this.mesh.position.z+=0;
  }

}




export var Heart= function(){
const shape = new THREE.Shape();
const x = -2.5;
const y = -5;
shape.moveTo(x + 2.5, y + 2.5);
shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

const extrudeSettings = {
  steps: 2,  // ui: steps
  depth: 2,  // ui: depth
  bevelEnabled: true,  // ui: bevelEnabled
  bevelThickness: 1,  // ui: bevelThickness
  bevelSize: 1,  // ui: bevelSize
  bevelSegments: 2,  // ui: bevelSegments
};

const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const material = new THREE.MeshPhongMaterial( {color: 0xff0000} );

this.mesh= new THREE.Mesh(geometry, material)
this.mesh.rotation.x=-Math.PI/2;

this.fall=function(){
    this.mesh.position.y-=0.002*125;
    this.mesh.position.z-=0.5;
    this.mesh.rotation.x-=0.02;
    this.mesh.rotation.z+=0.1;
  }
}







































/*


//PLANE 3
export var Plane3 = function(){
  this.mesh= new THREE.Object3D();
  const bodygeometry = new THREE.CylinderGeometry(4, 4 , 12, 6, 25);
  const bodymaterial= new THREE.MeshPhongMaterial({color: 0xff0000});
  const body = new THREE.Mesh(bodygeometry, bodymaterial);
  
  body.position.y = 1.4;
  body.rotation.x=Math.PI/2
  body.castShadow = true;
  this.mesh.add(body);

  const lwgeometry = new THREE.BoxGeometry( 10, 10, 1 );
  const lwmaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const leftwing = new THREE.Mesh( lwgeometry, lwmaterial );
  leftwing.position.set(9,2,-2)
  body.add( leftwing );


  const rightwing = new THREE.Mesh( lwgeometry, lwmaterial );
  rightwing.position.set(-9,2,-2)
  body.add( rightwing );


  const geometry = new THREE.ConeGeometry( 4, 6, 6);
  const material = new THREE.MeshPhongMaterial( {color: 0xffff00} );
  const cone = new THREE.Mesh( geometry, material );
  cone.position.set(0,9.5,0)
  body.add( cone );

  //collo
  const cgeometry = new THREE.CylinderGeometry( 2, 4, 5, 6 );
const cmaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );
const collo = new THREE.Mesh( cgeometry, cmaterial );
collo.position.set(0,2,-2)
collo.rotation.x=-Math.PI/6
cone.add( collo );


//head
const hgeometry = new THREE.BoxGeometry( 3, 5, 2 );
const hmaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
const head = new THREE.Mesh( hgeometry, hmaterial );
head.position.set(0,6,1);
head.rotation.x=Math.PI/10
collo.add( head );
const head2 = new THREE.Mesh( hgeometry, hmaterial );
head2.position.set(0,6,-1);
collo.add( head2 );
*/
/*

  let moveDir = new THREE.Vector3(
    2 - leftwing.position.x,
    2 - leftwing.position.y,
    -2 - leftwing.position.z
);
moveDir.normalize();
let moveDist = leftwing.position.distanceTo(new THREE.Vector3(2,2,-2));
/// step 2: move camera to anchor point
leftwing.translateOnAxis(moveDir, moveDist);
/// step 3: rotate camera
leftwing.rotation.y=-Math.PI/6;
/// step4: move camera along the opposite direction
moveDir.multiplyScalar(-1);
leftwing.translateOnAxis(moveDir, moveDist);
*/

  /*

  
  
  const tipGeometryp2 = new THREE.CylinderGeometry( 1.5, 3, 2, 9 );
  const tipMaterialp2 = new THREE.MeshPhongMaterial( {color: 0xff0000} );
  const tipCylinderp2 = new THREE.Mesh( tipGeometryp2, tipMaterialp2 );
  tipCylinderp2.position.set(0,11,0);
  bodyMeshp2.add( tipCylinderp2 );
  
  const geometry4 = new THREE.ConeGeometry( 1.5, 1, 9 );
  const material4 = new THREE.MeshPhongMaterial( {color: 0xffff00} );
  const cone4 = new THREE.Mesh( geometry4, material4 );
  cone4.position.set(0,1.5,0);
  tipCylinderp2.add( cone4 );
  
  
  //propeller
  const propGeometryp = new THREE.BoxGeometry( 1, 10, 0.2 );
  const propMaterialp = new THREE.MeshPhongMaterial( {color: 0x7CFC00} );
  this.propeller = new THREE.Mesh( propGeometryp, propMaterialp );
  const propellerp2 = new THREE.Mesh( propGeometryp, propMaterialp );
  this.propeller.position.set(0, 1.35, 12);
  propellerp2.position.set(0, 0,0 );
  propellerp2.rotation.z=Math.PI/2
  this.propeller.add( propellerp2 );
  this.mesh.add( this.propeller );
  
  //wings
  const wings = new THREE.Shape();
            wings.moveTo( 20, 0 );
            wings.lineTo( 0, 0 );
            wings.lineTo( 0, 3 );
            wings.lineTo( 16, 6 );
            wings.lineTo( 24, 6 );
            wings.lineTo( 40, 3 );
            wings.lineTo( 40, 0 );
  
  const extrudeSettingsW = {
    depth: 0.5,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 1
  }
  
  const wgeometry = new THREE.ExtrudeGeometry( wings, extrudeSettingsW );
  const wmaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );
  const wmesh = new THREE.Mesh( wgeometry, wmaterial );
  
  wmesh.scale.set(1,1,0.05);
  wmesh.position.set(-20, 2, 1.5);
  bodyMeshp2.add(wmesh);
  
  //wheels
  const Pgeometry2 = new THREE.BoxGeometry( 0.3, 2.5, 0.3 );
  const Pmaterial2 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const pole7 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole7.position.set(-1.5, 6, 3);
  pole7.rotation.x=-Math.PI/2.5
  const pole8 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole8.position.set(-1.5, 5, 3);
  pole8.rotation.x=Math.PI/2.5
  const wheelGeometry = new THREE.CylinderGeometry( 1, 1, 0.5, 32 );
  const wheelMaterial = new THREE.MeshPhongMaterial( {color: 0x808080} );
  const wheel1 = new THREE.Mesh( wheelGeometry, wheelMaterial );
  wheel1.position.set(-0.5,-1.5,-0.1);
  wheel1.rotation.z=Math.PI/2
  
  const wheel2 = new THREE.Mesh( wheelGeometry, wheelMaterial );
  wheel2.position.set(0.5,-1.5,-0.1);
  wheel2.rotation.z=Math.PI/2
  const pole9 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole9.position.set(1.5, 6, 3);
  pole9.rotation.x=-Math.PI/2.5
  const pole10 = new THREE.Mesh( Pgeometry2, Pmaterial2 );
  pole10.position.set(1.5, 5, 3);
  pole10.rotation.x=Math.PI/2.5
  
  pole7.add(wheel1);
  pole9.add(wheel2);
  
  
  bodyMeshp2.add(pole7);
  bodyMeshp2.add(pole8);
  
  bodyMeshp2.add(pole9);
  bodyMeshp2.add(pole10);
  
  
  const wheelp2 = new THREE.Mesh( wheelGeometry, wheelMaterial );
  wheelp2.position.set(0,-8,1.2);
  wheelp2.rotation.z=Math.PI/2
  bodyMeshp2.add(wheelp2);
  
  
  
  
  //spoilers
  const sgeometry2 = new THREE.BoxGeometry( 11, 1.5, 0.5 );
  const smaterial2 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const spoilerp2 = new THREE.Mesh( sgeometry2, smaterial2 );
  spoilerp2.position.set(0,-9,-0.5);
  bodyMeshp2.add( spoilerp2 );
  const spoiler = new THREE.Shape()
                        spoiler.moveTo( 2, 0 )
                        spoiler.lineTo( 0, 0 )
                        spoiler.lineTo( 1.8, 2 )
                        spoiler.lineTo( 2, 2 ); // close path
    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0.5,
    }
  const sgeometry = new THREE.ExtrudeGeometry( spoiler, extrudeSettings );
  const smaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );
  const smesh2 = new THREE.Mesh( sgeometry, smaterial );
  smesh2.position.set(-0.25,-7.5,-1.4);
  smesh2.rotation.y=Math.PI/2
  smesh2.rotation.x=-Math.PI/2
  bodyMeshp2.add(smesh2);
  
  
  //cabin
  const cgeometry = new THREE.TorusGeometry( 2, 1.5, 16, 100, Math.PI );
  const cmaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
  const cabin = new THREE.Mesh( cgeometry, cmaterial );
  cabin.rotation.y=Math.PI/2
  cabin.rotation.x=-Math.PI/2
  cabin.position.set(0,0,0);
  bodyMeshp2.add( cabin );
  
  //guns
  const Pmaterial3 = new THREE.MeshPhongMaterial( {color: 0x505050} );
  const pole14 = new THREE.Mesh( Pgeometry2, Pmaterial3 );
  const pole15 = new THREE.Mesh( Pgeometry2, Pmaterial3 );
  pole14.position.set(3, 6.5,-1);
  pole14.rotation.z=Math.PI/2;
  pole15.position.set(-3, 6.5,-1);
  pole15.rotation.z=Math.PI/2;
  
  const gunGeometry = new THREE.CylinderGeometry( 0.5, 0.5, 3.5, 32 );
  const gunMaterial = new THREE.MeshPhongMaterial( {color: 0x505050} );
  const gunR2 = new THREE.Mesh( gunGeometry, gunMaterial );
  gunR2.position.set(-1.2 , 7, -2);
  gunR2.rotation.x=-Math.PI/24
  const gunL2 = new THREE.Mesh( gunGeometry, gunMaterial );
  gunL2.position.set(1.2 , 7 , -2);
  gunL2.rotation.x=-Math.PI/24
  bodyMeshp2.add( gunR2 );
  bodyMeshp2.add( gunL2 );
  
  
  const gunR = new THREE.Mesh( gunGeometry, gunMaterial );
  gunR.position.set(1, -0.8, 0);
  gunR.rotation.z=Math.PI/2
  const gunL = new THREE.Mesh( gunGeometry, gunMaterial );
  gunL.position.set(1, 0.8 , 0);
  gunL.rotation.z=Math.PI/2
  
  
  pole14.add(gunR);
  pole15.add(gunL);
  
  const gunR3 = pole14.clone();
  const gunR4 = pole14.clone();
  const gunL3= pole15.clone();
  const gunL4 = pole15.clone();
  gunR3.rotation.y=-Math.PI/2
  gunR3.position.set(-9,3,2.6);
  gunR4.rotation.y=-Math.PI/2
  gunR4.position.set(-18,3,2.6);
  gunL3.rotation.y=Math.PI/2
  gunL3.position.set(9,3,2.6);
  gunL4.rotation.y=Math.PI/2
  gunL4.position.set(18,3,2.6);
  bodyMeshp2.add( gunR3 );
  bodyMeshp2.add( gunL3 );
  bodyMeshp2.add( gunR4 );
  bodyMeshp2.add( gunL4 );
  
  this.hit=false;
  
  this.playerHit=false;
    this.playerLives;
    this.removelife=function(){
      if(this.playerHit){
      this.playerLives-=1;
      this.playerHit=false;
      }
    }
    
    this.destroy=function(){
      if(this.hit || this.playerLives<=0){
        //this.mesh.position.y-=1;
        //this.mesh.rotation.z+=0.1;
        //this.mesh.position.y-=0.002*this.mesh.position.z*this.mesh.position.z;
        this.mesh.position.y-=0.002*125;
        this.mesh.position.z-=0.5;
        this.mesh.rotation.x-=0.01;
        this.mesh.rotation.z-=0.05;
  
      }
    }
    this.movePlanePattern1=function(vel){
      this.mesh.position.z-=vel;
    }
  
    this.rotate=function(){
      if(this.mesh.rotation.z<2*Math.PI){
        this.mesh.rotation.z+=0.1;
      }
    }
  
    var flag=true;
    this.ll=randomPosition(-90,90);
   
    this.movePlanePattern2=function(velz, velx){
      this.mesh.position.z-=velz;
      if(this.mesh.position.x < this.ll && flag==true){
        this.mesh.position.x+=velx;
  
        if( this.mesh.position.x >= this.ll){ flag=false}
      }else if(this.mesh.position.x > this.ll-30 && flag==false){
        this.mesh.position.x-=velx;
        if( this.mesh.position.x <= this.ll-30){ flag=true}
      }
    }
  
  
  
  //Bullets
  
  //const BulletGeometry = new THREE.BoxGeometry( 0.5, 2.5, 0.5 );
  //const BulletMaterial = new THREE.MeshPhongMaterial( {color: 0xD4AF37} );
  //this.bullet = new THREE.Mesh( BulletGeometry, BulletMaterial );
  this.bulletr1_position_x= -9;
  this.bulletr1_position_y= 0;
  this.bulletr1_position_z= 3.5;
  this.bulletl1_position_x= 9;
  this.bulletl1_position_y= 0;
  this.bulletl1_position_z= 3.5;
  //this.bullet=new Bullet();
  //this.bullet.mesh.position.set(-9,5, 3.5);
  //this.mesh.add( this.bullet.mesh );
  
  this.positionPoint=null;
  
  this.R1bullets=[];
  this.L1bullets=[];
  
  var bullet_velocity=1.7;
  
  
  this.shoot=function(){
  this.R1bullets.forEach(b => {
    b.mesh.position.z-=bullet_velocity;
    });
  
  
  this.L1bullets.forEach(b => {
    b.mesh.position.z-=bullet_velocity;
  });
  }
  */
  //}


