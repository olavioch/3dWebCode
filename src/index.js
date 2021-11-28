import objeto from "./assets3d/utils/objeto";
import "./style.css";
import luz from './assets3d/luz';
import {camera, camerab} from './assets3d/camera/camera';
import {cena, cenaColor} from './assets3d/cena/cena';
import './assets3d/objetos3d/monkey.obj';
import Plane from './assets3d/utils/Plane';
import {material3d ,materialMetal, materialNature, materialCouro, materialGlass } from "./assets3d/materials/material";



//nao pode usar o mesmo objeto em cenas diferentes
//caso precisar duplique o objeto
//Plane('hero', material3d, luz, camera, cena, true);
//objeto('herob', 'objeto.obj', material3d, luz, camera, true);



