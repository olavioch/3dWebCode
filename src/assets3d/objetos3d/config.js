import "./bola.obj";
import "./bolaB.obj";
import "./bolaC.obj";
import "./model.obj";
import "./cube.obj";

const configModel = {
    isEnabled: true,
    name: "model.obj",
    position : [0.2,-0.6,2],
    rotation: [0,-0.6,0],
    scale: [1,1,1]
}
const configCube = {
    isEnabled: false,
    name: "cube.obj",
    position : [0.2,-2.2, 2],
    rotation: [0,0,0],
    scale: [0.5,0.5,0.5]
}
const configBola = {
    isEnabled: true,
    name: "bola.obj",
    position : [0,0,0],
    rotation: [0,0,0],
    scale: [1,1,1]
}
const configBolaB = {
    isEnabled: true,
    name: "bolaB.obj",
    position : [0,0,0],
    rotation: [0,0,0],
    scale: [1,1,1]
}
const configBolaC = {
    isEnabled: true,
    name: "bolaC.obj",
    position : [0,0,0],
    rotation: [0,0,0], 
    scale: [1,1,1]
}

export {configModel, configBola, configBolaB, configBolaC, configCube};