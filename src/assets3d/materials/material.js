import * as THREE from 'three';
import './grid.jpg';
import './metal.jpg';
import './nature.jpg';
import './couro.jpg';
import './normal.png';
import './normalMetal.png';
import './normalnature.png';
import './normalcouro.png';
import './normalglass.png';
import '../cena/back.jpg';
import { GridHelper } from 'three';

const normal = new THREE.TextureLoader().load('normal.png');
const textura = new THREE.TextureLoader().load('grid.jpg');
const metal = new THREE.TextureLoader().load('metal.jpg');
const normalMetal = new THREE.TextureLoader().load('normalMetal.png');
const nature = new THREE.TextureLoader().load('nature.jpg');
const normalNature = new THREE.TextureLoader().load('normalnature.png');
const couro = new THREE.TextureLoader().load('couro.jpg');
const normalCouro = new THREE.TextureLoader().load('normalcouro.png');
const normalglass = new THREE.TextureLoader().load('normalglass.png');

		
const textureReflection = new THREE.TextureLoader().load('back.jpg');
textureReflection.encoding = THREE.sRGBEncoding;
textureReflection.mapping = THREE.EquirectangularReflectionMapping;

const textureRefraction = new THREE.TextureLoader().load('back.jpg');
textureRefraction.encoding = THREE.sRGBEncoding;
textureRefraction.mapping = THREE.EquirectangularRefractionMapping;

const material3d = {
    map: textura,
    bumpMap: normal,
    bumpScale: 0.003,
    envMap: textureReflection,
    roughness: 0.5,
    metalness: 0.5, 
    flatShading: false
}

const materialMetal = {
    map: metal,
    bumpMap: normalMetal,
    envMapIntensity: 10,
    bumpScale: 0.0001,
    envMap: textureReflection,
    roughness: 0,
    metalness: 0.8, 
    flatShading: false
}

const materialNature = {
    map: nature,
    bumpMap: normalNature,
    envMapIntensity: 10,
    bumpScale: 0.02,
    envMap: textureReflection,
    roughness: 0.5,
    metalness: 0.8, 
    flatShading: false
}

const materialCouro = {
    map: couro,
    bumpMap: normalCouro,
    envMapIntensity: 15,
    bumpScale: 0.001,
    envMap: textureReflection,
    roughness: 0.1,
    metalness: 0.2, 
    flatShading: false
}

const materialGlass = {
    transparent: true, 
    opacity:0.3,
    envMap: textureRefraction,
    envMapIntensity:11, 
    roughness: 0,
    metalness: 0.5, 
    flatShading: false
}
export {material3d, materialMetal, materialNature, materialCouro};

//link para geração de normalmaps:
// https://cpetry.github.io/NormalMap-Online/
