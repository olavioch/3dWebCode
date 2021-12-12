import * as THREE from 'three';
import { OBJLoader } from './OBJLoader';
import { ArcballControls } from '../controle/ArcballControls';
import '../cena/back.jpg';
import '../materials/material.mtl'
import { Mesh, Scene } from 'three';

function objeto(id, objeto, material3d, luz, camera, cena, enable){	
	let cam, scene, renderer;
	var object, controls, rotacao, sky;
	var canvasWidth = cena.width;
	var canvasheight = cena.height;
	
	init();
	animate()
	function init() {
		
		//Criando uma camera para exibir o conteudo 3d
		cam = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
		cam.position.x = camera.posicao[0];
		cam.position.y = camera.posicao[1];
		cam.position.z = camera.posicao[2];
		
		//Criando uma cena para exibir o conteudo 3d
		scene = new THREE.Scene();
		if(cena.cor[0] == 'color'){
			scene.background = new THREE.Color(cena.cor[1]);
		}

		//Criando uma luz para iluminar o objeto 3d
		const pointLight = new THREE.DirectionalLight( new THREE.Color(luz.cor), luz.intensidade );
		pointLight.translateX(luz.posicao[0]);
		pointLight.translateY(luz.posicao[1]);
		pointLight.translateZ(luz.posicao[2]);
		
		//Unindo todos os itemns
		cam.add( pointLight );
		scene.add( cam );
		if(cena.cor[0] == 'texture'){
			const geometrySky = new THREE.SphereGeometry( 500, 60, 40 );
			// invert the geometry on the x-axis so that all of the faces point inward
			geometrySky.scale( - 1, 1, 1 );
			const textureSky = new THREE.TextureLoader().load( cena.cor[1] );
			const matSky = new THREE.MeshBasicMaterial( { map: textureSky } );
			const sky = new THREE.Mesh( geometrySky, matSky);
			sky.name = 'sky';
			scene.environment = textureSky;
			scene.add( sky );
			
		}

		if(enable == true){	
			// manager
			const manager = new THREE.LoadingManager( loadModel );
			function loadModel() {
				object.traverse( function ( child ) {
					if ( child.isMesh ) child.material = material;
				} );
				scene.add( object );
			}

			// material
				const material = new THREE.MeshStandardMaterial(material3d.mat);
				if(material3d.transparent == true){
					material.transparent = material3d.transparent;
					material.opacity = material3d.opacity;
				}
			// model
			function onProgress( xhr ) {

				if ( xhr.lengthComputable ) {
					const percentComplete = xhr.loaded / xhr.total * 100;
					console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
				}
			}
			function onError() {}
			const loader = new OBJLoader( manager );
			loader.load( objeto, function ( obj ) {
				object = obj;

			}, onProgress, onError );
		}


		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( canvasWidth, canvasheight);
		document.getElementById(id).appendChild( renderer.domElement );
		controls = new ArcballControls( cam, renderer.domElement, scene );
		controls.setGizmosVisible(false);
		controls.addEventListener( 'change', render );
	}

	function animate(time) {

		requestAnimationFrame( animate );
		render();
	}

	function render() {
		
		renderer.render( scene, cam );

	}
}
export default objeto;