import * as THREE from 'three';
import './normalnature.png';
import './nature.jpg';
import '../cena/back.jpg';

const normal = new THREE.TextureLoader().load('normalnature.png');
const textura = new THREE.TextureLoader().load('nature.jpg');

		
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
    bumpScale: 0.003,
    envMap: textureReflection,
    envMapIntensity: 2,
    roughness: 0.2,
    metalness: 1, 
    flatShading: false
}

export {material3d};

//link para geração de normalmaps:
// https://cpetry.github.io/NormalMap-Online/
