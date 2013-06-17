//######################################################################################################
// for object in laptop
    function handleLoadedTexture(texture) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);

        gl.bindTexture(gl.TEXTURE_2D, null);
    }
    function initTextures() {
        moonTexture = gl.createTexture();
        moonTexture.image = new Image();
        moonTexture.image.onload = function () {
            handleLoadedTexture(moonTexture)
        }
        moonTexture.image.src = "textures/moon.gif";

        crateTexture = gl.createTexture();
        crateTexture.image = new Image();
        crateTexture.image.onload = function () {
            handleLoadedTexture(crateTexture)
        }
        crateTexture.image.src = "textures/create.png";
    }
//######################################################################################################

//#################################################
    function handleLoadedTextureZID1(texture) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);

        gl.bindTexture(gl.TEXTURE_2D, null);
    }
    var TextureZID1,TextureProzor,Texturebaner1,TexturePOD1,TextureSTUB,zlatnaspirala,sky1,sky2,sky3,teapot1,floor;

    function initTextureZID1() {
//#################################################			
		 floor = gl.createTexture();
         floor.image = new Image();
         floor.image.onload = function () {
            handleLoadedTextureZID1(floor)
        }
         floor.image.src = "textures/Pod.gif";
//#################################################	
         greenglass = gl.createTexture();
         greenglass.image = new Image();
         greenglass.image.onload = function () {
            handleLoadedTextureZID1(greenglass)
        }
         greenglass.image.src = "textures/glass.gif";
//#################################################
		 barrier = gl.createTexture();
         barrier.image = new Image();
         barrier.image.onload = function () {
            handleLoadedTextureZID1(barrier)
        }
         barrier.image.src = "textures/zid.gif";
//#################################################		
		 greenmatrix1 = gl.createTexture();
         greenmatrix1.image = new Image();
         greenmatrix1.image.onload = function () {
            handleLoadedTextureZID1(greenmatrix1)
        }
         greenmatrix1.image.src = "textures/green1.gif";
//#################################################		  
      zlatnaspirala = gl.createTexture();
         zlatnaspirala.image = new Image();
         zlatnaspirala.image.onload = function () {
            handleLoadedTextureZID1(zlatnaspirala)
        }
         zlatnaspirala.image.src = "textures/zlatnaspirala.gif";
//#################################################		 
	 	 sky1 = gl.createTexture();
         sky1.image = new Image();
         sky1.image.onload = function () {
			handleLoadedTextureZID1(sky1)
        }
         sky1.image.src = "textures/sky1.gif"; 
//#################################################		 
		 sky2 = gl.createTexture();
         sky2.image = new Image();
         sky2.image.onload = function () {
            handleLoadedTextureZID1(sky2)
        }
         sky2.image.src = "textures/sky2.gif"; 
//#################################################		 	 
		 teapot1 = gl.createTexture();
         teapot1.image = new Image();
         teapot1.image.onload = function () {
            handleLoadedTextureZID1(teapot1)
        }
         teapot1.image.src = "textures/teapot.gif";
		
//#################################################		 
		sky3 = gl.createTexture();
        sky3.image = new Image();
        sky3.image.onload = function () {
            handleLoadedTextureZID1(sky3)
        }
		 sky3.image.src = "textures/sky3.gif"; /*
//#################################################		
		baner2zid = gl.createTexture();
        baner2zid.image = new Image();
        baner2zid.image.onload = function () {
            handleLoadedTextureZID1(baner2zid)
        }
    baner2zid.image.src = "baner3.png";
//#################################################
		baner3zid = gl.createTexture();
        baner3zid.image = new Image();
        baner3zid.image.onload = function () {
            handleLoadedTextureZID1(baner3zid)
        }
    baner3zid.image.src = "baner4.png";
//#################################################	
		baner4zid = gl.createTexture();
        baner4zid.image = new Image();
        baner4zid.image.onload = function () {
            handleLoadedTextureZID1(baner4zid)
        }
    baner4zid.image.src = "baner5.png";
//#################################################
		baner5zid = gl.createTexture();
        baner5zid.image = new Image();
        baner5zid.image.onload = function () {
            handleLoadedTextureZID1(baner5zid)
        }
    baner5zid.image.src = "baner6.png";
//#################################################
		baner6zid = gl.createTexture();
        baner6zid.image = new Image();
        baner6zid.image.onload = function () {
            handleLoadedTextureZID1(baner6zid)
        }
    baner6zid.image.src = "baner7.png";
//#################################################
		baner7zid = gl.createTexture();
        baner7zid.image = new Image();
        baner7zid.image.onload = function () {
            handleLoadedTextureZID1(baner7zid)
        }
    baner7zid.image.src = "baner8.png";
//#################################################
		baner8zid = gl.createTexture();
        baner8zid.image = new Image();
        baner8zid.image.onload = function () {
            handleLoadedTextureZID1(baner8zid)
        }
    baner8zid.image.src = "baner9.png";
//#################################################
		baner9zid = gl.createTexture();
        baner9zid.image = new Image();
        baner9zid.image.onload = function () {
            handleLoadedTextureZID1(baner9zid)
        }
    baner9zid.image.src = "baner10.png";
//#################################################
	baner10zid = gl.createTexture();
        baner10zid.image = new Image();
        baner10zid.image.onload = function () {
            handleLoadedTextureZID1(baner10zid)
        }
    baner10zid.image.src = "baner11.png";
//#################################################
		banerPocetakzid = gl.createTexture();
        banerPocetakzid.image = new Image();
        banerPocetakzid.image.onload = function () {
            handleLoadedTextureZID1(banerPocetakzid)
        }
    banerPocetakzid.image.src = "pocetak1.png";
//#################################################
	banerADDzid = gl.createTexture();
        banerADDzid.image = new Image();
        banerADDzid.image.onload = function () {
            handleLoadedTextureZID1(banerADDzid)
        }
    banerADDzid.image.src = "add.png";
//#################################################	
*/
    }