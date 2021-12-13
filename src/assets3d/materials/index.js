import * as THREE from 'three';
import './modelnormal.jpg';
import './model.jpg';
import '../cena/back.jpg';

const normal = new THREE.TextureLoader().load('modelnormal.jpg');
const textura = new THREE.TextureLoader().load('model.jpg');
		
const textureReflection = new THREE.TextureLoader().load('back.jpg');
textureReflection.encoding = THREE.sRGBEncoding;
textureReflection.mapping = THREE.EquirectangularReflectionMapping;

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

export {material3d};

//link para geração de normalmaps:
// https://cpetry.github.io/NormalMap-Online/
