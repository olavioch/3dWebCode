import objeto from "./assets3d/utils/objeto";
import "./style.css";
import "./assets3d/objetos3d/bola.obj";
import luz from './assets3d/luz';
import {camera} from './assets3d/camera/camera';
import {cena} from './assets3d/cena/cena';
import {material3d} from "./assets3d/materials/material";



//nao pode usar o mesmo objeto em cenas diferentes
//caso precisar duplique o objeto
//Plane('hero', material3d, luz, camera, cena, true);
objeto('hero', 'bola.obj', material3d, luz, camera, cena, true);



