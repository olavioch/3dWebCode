import Plane from "./assets3d/utils/Plane";
import objeto from "./assets3d/utils/objeto";
import "./style.css";
import "./assets3d/objetos3d/bola.obj";
import "./assets3d/objetos3d/bolaB.obj";
import "./assets3d/objetos3d/bolaC.obj";
import "./assets3d/objetos3d/model.obj";
import luz from './assets3d/luz';
import {camera} from './assets3d/camera/camera';
import {cena, cenaColor, cenaBack} from './assets3d/cena/cena';
import {material3d, material3dA, material3dB, material3dC} from "./assets3d/materials/material";





objeto('hero', 'model.obj', material3d, luz, camera, cena, true);


objeto('3dA', 'bola.obj', material3dA, luz, camera, cenaBack, true);
objeto('3dB', 'bolaB.obj', material3dB, luz, camera, cenaColor, true);
objeto('3dC', 'bolaC.obj', material3dC, luz, camera, cenaBack, true);


//Plane('hero', material3d, luz, camera, cena, true);
