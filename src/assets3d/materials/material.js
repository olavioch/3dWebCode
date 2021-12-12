import * as THREE from 'three';
import './modelnormal.jpg';
import './model.jpg';
import './bolaNormal.png';
import './bola.jpg';
import '../cena/back.jpg';

const normal = new THREE.TextureLoader().load('modelnormal.jpg');
const textura = new THREE.TextureLoader().load('model.jpg');
const bolaNormal = new THREE.TextureLoader().load('bolaNormal.png');
const bola = new THREE.TextureLoader().load('bola.jpg');
		
const textureReflection = new THREE.TextureLoader().load('back.jpg');
textureReflection.encoding = THREE.sRGBEncoding;
textureReflection.mapping = THREE.EquirectangularReflectionMapping;

const textureRefraction = new THREE.TextureLoader().load('back.jpg');
textureRefraction.encoding = THREE.sRGBEncoding;
textureRefraction.mapping = THREE.EquirectangularRefractionMapping;

const material3d = {
    transparent: false,
    mat:{
        color: new THREE.Color(0xffffff),
        map: textura,
        bumpMap: normal,
        bumpScale: 0.003,
        envMap: textureReflection,
        envMapIntensity: 2,
        roughness: 0.4,
        metalness: 0, 
        flatShading: false
    }
}
const material3dA = {
    transparent: false,
    mat:{
        color: new THREE.Color(0xffffff),
        map: bola,
        bumpMap: bolaNormal,
        bumpScale: 0.03,
        envMap: textureReflection,
        envMapIntensity: 2,
        roughness: 0,
        metalness: 0, 
        flatShading: false
    }
}
const material3dB = {
    transparent: false,
    mat:{
        color: new THREE.Color(0xffffff),
        map: bola,
        bumpMap: bolaNormal,
        bumpScale: 0.03,
        envMap: textureReflection,
        envMapIntensity: 2,
        roughness: 0,
        metalness: 1, 
        flatShading: false 
    }
}
const material3dC = {
    transparent: true, 
    opacity: 0.74,
    mat:{
        color: new THREE.Color(0x000000),
        envMap: textureReflection,
        envMapIntensity: 2,
        roughness: 0.1,
        metalness: 1, 
        flatShading: false
    }
}

export {material3d, material3dA, material3dB, material3dC};

//link para geração de normalmaps:
// https://cpetry.github.io/NormalMap-Online/
