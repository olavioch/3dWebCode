import * as THREE from 'three';
import './bola.jpg';
import './bolaNormal.png';
import '../cena/back.jpg';
import { GridHelper } from 'three';

const normal = new THREE.TextureLoader().load('bolaNormal.png');
const textura = new THREE.TextureLoader().load('bola.jpg');

		
const textureReflection = new THREE.TextureLoader().load('back.jpg');
textureReflection.encoding = THREE.sRGBEncoding;
textureReflection.mapping = THREE.EquirectangularReflectionMapping;

const textureRefraction = new THREE.TextureLoader().load('back.jpg');
textureRefraction.encoding = THREE.sRGBEncoding;
textureRefraction.mapping = THREE.EquirectangularRefractionMapping;

const material3d = {
    color: new THREE.Color(0xffffff),
    map: textura,
    bumpMap: normal,
    bumpScale: 0.07,
    envMap: textureReflection,
    envMapIntensity: 2,
    roughness: 0.38,
    metalness: 0.44, 
    flatShading: false
}

export {material3d};

//link para geração de normalmaps:
// https://cpetry.github.io/NormalMap-Online/
