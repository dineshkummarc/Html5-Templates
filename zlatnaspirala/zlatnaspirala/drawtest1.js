function drawScene() {
// Dont touch//
if (tempX <= 40){alfa = alfa - 2;}
if (tempX >= 700){alfa = alfa + 2;}

gl.bindFramebuffer(gl.FRAMEBUFFER, rttFramebuffer);
drawSceneOnLaptopScreen();
gl.bindFramebuffer(gl.FRAMEBUFFER, null);
gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 500.0, pMatrix);
mat4.identity(mvMatrix);
// dont touch
//#######################################
//#glmatrix plugin zlatnaspira###########
//#######################################
//#put your functions here###############
//#######################################

LAPTOP(0,0,0);
TEAPOT(-90,13,35,teapot1);
SURIKEN(0,3,0,floor);

SKY(0,22.5,70,sky1);

DEADFLOOR(10,0,0,sky1);
DEADFLOOR(10,0,2,sky1);
DEADFLOOR(10,0,4,sky1);
DEADFLOOR(10,0,6,sky1);
DEADFLOOR(10,0,8,sky1);
DEADFLOOR(10,0,10,sky1);
DEADFLOOR(10,0,12,sky1);


DEADFLOOR(-10,0,0,sky1);
DEADFLOOR(-10,0,2,sky1);
DEADFLOOR(-10,0,4,sky1);
DEADFLOOR(-10,0,6,sky1);
DEADFLOOR(-10,0,8,sky1);
DEADFLOOR(-10,0,10,sky1);
DEADFLOOR(-10,0,12,sky1);



DEADBLADE(10,2,0,sky1);

CUBE(2,5,10,zlatnaspirala);
BLADEROTATE(2,6,10,greenmatrix1,2);
BLADEROTATEDEGX(2,4,10,greenmatrix1,180);


CUBE(-2,5,10,zlatnaspirala);
BLADEROTATE(-2,6,10,greenmatrix1,2);
BLADEROTATEDEGX(-2,4,10,greenmatrix1,180);



CUBE(0,-1,15,floor);
CUBE(10,-1,15,floor);
CUBE(20,-1,15,floor);
CUBE(30,-1,15,floor);
CUBE(40,-1,15,floor);
CUBE(50,-1,15,floor);
CUBE(60,-1,15,floor);
CUBE(70,-1,15,floor);

CUBE(-10,-1,15,floor);
CUBE(-20,-1,15,floor);
CUBE(-30,-1,15,floor);
CUBE(-40,-1,15,floor);
CUBE(-50,-1,15,floor);
CUBE(-60,-1,15,floor);
CUBE(-70,-1,15,floor);


CUBE(10,-1,45,floor);
CUBE(20,-1,45,floor);
CUBE(30,-1,45,floor);
CUBE(40,-1,45,floor);
CUBE(50,-1,45,floor);
CUBE(60,-1,45,floor);
CUBE(70,-1,45,floor);

CUBE(-10,-1,45,floor);
CUBE(-20,-1,45,floor);
CUBE(-30,-1,45,floor);
CUBE(-40,-1,45,floor);
CUBE(-50,-1,45,floor);
CUBE(-60,-1,45,floor);
CUBE(-70,-1,45,floor);

CUBE(-75,-1,40,floor);
CUBE(-75,-1,30,floor);
CUBE(-75,-1,20,floor);


CUBE(75,-1,40,floor);
CUBE(75,-1,30,floor);
CUBE(75,-1,20,floor);


BLOCK(0,0,0,floor);
BLOCK(30,0,0,floor);
BLOCK(60,0,0,floor);
BLOCK(90,0,0,floor);
BLOCK(90,0,30,floor);
BLOCK(90,0,60,floor);
BLOCK(90,0,90,floor);
BLOCK(90,0,120,floor);

BLOCK(60,0,60,floor);
BLOCK(30,0,60,floor);
BLOCK(0,0,60,floor);
BLOCK(-30,0,60,floor);
BLOCK(-60,0,60,floor);


BLOCK(-30,0,0,floor);
BLOCK(-60,0,0,floor);
BLOCK(-90,0,0,floor);
BLOCK(-90,0,30,floor);
BLOCK(-90,0,60,floor);
BLOCK(-90,0,90,floor);
BLOCK(-90,0,120,floor);



BLADEGREEN(-15,0,-15,greenglass);
BLADEGREEN(15,0,-15,greenglass);
BLADEGREEN(-15,0,15,greenglass);
BLADEGREEN(15,0,15,greenglass);

XWALL(0,0.7,-15.7,barrier);
XWALL(30,0.7,-15.7,barrier);
XWALL(60,0.7,-15.7,barrier);
XWALL(90,0.7,-15.7,barrier);
XWALL(-30,0.7,-15.7,barrier);
XWALL(-60,0.7,-15.7,barrier);
XWALL(-90,0.7,-15.7,barrier);

XWALL(0,0.7,134.2,barrier);
XWALL(30,0.7,134.2,barrier);
XWALL(60,0.7,134.2,barrier);
XWALL(90,0.7,134.2,barrier);
XWALL(-30,0.7,134.2,barrier);
XWALL(-60,0.7,134.2,barrier);
XWALL(-90,0.7,134.2,barrier);

ZWALL(-105.7,0.7,0,barrier);
ZWALL(-105.7,0.7,30,barrier);
ZWALL(-105.7,0.7,60,barrier);
ZWALL(-105.7,0.7,90,barrier);
ZWALL(-105.7,0.7,120,barrier);

ZWALL(104,0.7,0,barrier);
ZWALL(104,0.7,30,barrier);
ZWALL(104,0.7,60,barrier);
ZWALL(104,0.7,90,barrier);
ZWALL(104,0.7,120,barrier);

PILEY(76,0,45,barrier);
PILEY(80,0,45,barrier);
PILEY(84,0,45,barrier);
PILEY(88,0,45,barrier);
PILEY(92,0,45,barrier);
PILEY(96,0,45,barrier);
PILEY(100,0,45,barrier);
PILEY(104,0,45,barrier);

red();

HOLDERX(90,0.7,2,barrier);
MOON(90,3,2);

PILEX(0,-2,76,greenglass);
PILEX(0,-2,79,greenglass);
PILEX(0,-2,82,greenglass);
PILEX(0,-2,85,greenglass);
PILEX(0,-2,88,greenglass);

red();

HOLDERX(6.0,8,13,barrier);
PILEY(6,2.69,13.01,barrier);
HOLDERY(6.0,18,13,barrier);
HOLDERX(6.0,0.7,13,barrier);
HOLDERY(6.0,12,13,barrier);

HOLDERX(-6.0,8,13,barrier);
PILEY(-6,2.69,13.01,barrier);
HOLDERY(-6.0,18,13,barrier);
HOLDERX(-6.0,0.7,13,barrier);
HOLDERY(-6.0,12,13,barrier);


green();

HOLDERLEFT(-13.0,4,36,barrier);
HOLDERRIGHT(-16.0,4,36,barrier);

CANAL(0,0,100,sky2);


//############################################################################
//############################################################################
//############################################################################
}
