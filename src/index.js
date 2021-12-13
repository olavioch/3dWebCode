import Plane from "./assets3d/utils/Plane";
import objeto from "./assets3d/utils/objeto";
import "./style.css";
import "./assets3d/objetos3d/model.obj";
import luz from './assets3d/luz';
import {camera} from './assets3d/camera';
import {cena} from './assets3d/cena';
import {material3d} from "./assets3d/materials";


objeto('hero', 'model.obj', material3d, luz, camera, cena, true);

//Plane('hero', material3d, luz, camera, cena, true);
