import objeto from "./assets3d/utils/objeto";
import "./style.css";
import luz from './assets3d/luz';
import {camera} from './assets3d/camera/camera';
import {cena, cenaColor, cenaBack} from './assets3d/cena/cena';
import {material3d, material3dA, material3dB, material3dC, materialConcreto} from "./assets3d/materials/material";
import {configModel, configBolaB, configBolaC, configBola, configCube} from "./assets3d/objetos3d/config";


objeto('hero', configModel, material3d, luz, camera, cena);



//Plane('hero', material3d, luz, camera, cena, true);
