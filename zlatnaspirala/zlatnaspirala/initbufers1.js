
	
	var cubeVertexPositionBufferZID1;
    var cubeVertexNormalBufferZID1;
    var cubeVertexTextureCoordBufferZID1;
    var cubeVertexIndexBufferZID1;
	var cubeVertexPositionBufferPOD1;
    var cubeVertexNormalBufferPOD1;
    var cubeVertexTextureCoordBufferPOD1;
    var cubeVertexIndexBufferPOD1;
	var cubeVertexPositionBufferPLAFON1;
    var cubeVertexNormalBufferPLAFON1;
    var cubeVertexTextureCoordBufferPLAFON1;
    var cubeVertexIndexBufferPLAFON1;
	var cubeVertexPositionBufferBOCNI1;
    var cubeVertexNormalBufferBOCNI1;
    var cubeVertexTextureCoordBufferBOCNI1;
    var cubeVertexIndexBufferBOCNI1;
	/*var moonVertexPositionBuffer;
    var moonVertexNormalBuffer;
    var moonVertexTextureCoordBuffer;
    var moonVertexIndexBuffer;
    var pyramidVertexPositionBuffer;
    var pyramidVertexColorBuffer;*/

    var cubeVertexPositionBuffer;
    var cubeVertexNormalBuffer;
    var cubeVertexTextureCoordBuffer;
    var cubeVertexIndexBuffer;
    var cubeVertexPositionBufferSKY;
    var cubeVertexNormalBufferSKY;
    var cubeVertexTextureCoordBufferSKY;
    var cubeVertexIndexBufferSKY;

    var cubeVertexPositionBufferPENJ;
    var cubeVertexNormalBufferPENJ;
    var cubeVertexTextureCoordBufferPENJ;
    var cubeVertexIndexBufferPENJ;
	var cubeVertexPositionBufferPENJLEVI;
    var cubeVertexNormalBufferPENJLEVI;
    var cubeVertexTextureCoordBufferPENJLEVI;
    var cubeVertexIndexBufferPENJLEVI;

    var cubeVertexPositionBufferKLASIK;
    var cubeVertexTextureCoordBufferKLASIK;
    var cubeVertexIndexBufferKLASIK;
    var cubeVertexNormalBufferKLASIK;
	
	var cubeVertexPositionBufferNEBODESNO;
    var cubeVertexNormalBufferNEBODESNO;
    var cubeVertexTextureCoordBufferNEBODESNO;
    var cubeVertexIndexBufferNEBODESNO;
    var cubeVertexPositionBufferBT;
    var cubeVertexNormalBufferBT;
    var cubeVertexTextureCoordBufferBT;
    var cubeVertexIndexBufferBT;
    var cubeVertexPositionBufferREKLAMA;
    var cubeVertexNormalBufferREKLAMA;
    var cubeVertexTextureCoordBufferREKLAMA;
    var cubeVertexIndexBufferREKLAMA;

//laptop komponente
    var moonVertexPositionBuffer;
    var moonVertexNormalBuffer;
    var moonVertexTextureCoordBuffer;
    var moonVertexIndexBuffer;

    var laptopScreenVertexPositionBuffer;
    var laptopScreenVertexNormalBuffer;
    var laptopScreenVertexTextureCoordBuffer;
	
    var SILJAKMVertexPositionBuffer;
    var SILJAKMVertexNormalBuffer;
    var SILJAKMVertexTextureCoordBuffer;
    var SILJAKMVertexIndexBuffer; 
		//###
	function initBuffers() {
	
	//
	
		    cubeVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
        vertices = [
            // Front face
            -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             0.0,  20.0,  0.0,
             0.0,  20.0,  0.0,

            // Back face
            -1.0, -1.0, -1.0,
            0.0,  20.0, 0.0,
             0.0,  20.0, 0.0,
             1.0, -1.0, -1.0,

            // Top face
            0.0,  20.0, 0.0,
            0.0,  20.0,  0.0,
             0.0,  20.0,  0.0,
             0.0,  20.0, 0.0,

            // Bottom face
            -1.0, -1.0, -1.0,
             1.0, -1.0, -1.0,
             1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            // Right face
             1.0, -1.0, -1.0,
             0.0,  20.0, 0.0,
             0.0,  20.0,  0.0,
             1.0, -1.0,  1.0,

            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            0.0,  20.0,  0.0,
            0.0,  20.0, 0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        cubeVertexPositionBuffer.itemSize = 3;
        cubeVertexPositionBuffer.numItems = 24;

        cubeVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBuffer);
        var vertexNormals = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
        cubeVertexNormalBuffer.itemSize = 3;
        cubeVertexNormalBuffer.numItems = 24;

        cubeVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
        var textureCoords = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
        cubeVertexTextureCoordBuffer.itemSize = 2;
        cubeVertexTextureCoordBuffer.numItems = 24;

        cubeVertexIndexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
        var cubeVertexIndices = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
        cubeVertexIndexBuffer.itemSize = 1;
        cubeVertexIndexBuffer.numItems = 36;
   //###
   
   // KOCKA sky

		
		//###############3
	
	
		    cubeVertexPositionBufferSKY = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSKY);
       var verticesSKY = [
            // Front face
            -250.0, -1.0,  250.0,
             250.0, -1.0,  250.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Back face
            -250.0, -1.0, -250.0,
            0.0,  1.0, 0.0,
             0.0,  1.0, 0.0,
             250.0, -1.0, -250.0,

            // Top face
            0.0,  1.0, 0.0,
            0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0, 0.0,

            // Bottom face
            -250.0, -1.0, -250.0,
             250.0, -1.0, -250.0,
             250.0, -1.0,  250.0,
            -250.0, -1.0,  250.0,

            // Right face
             250.0, -1.0, -250.0,
             0.0,  1.0, 0.0,
             0.0,  1.0,  0.0,
             250.0, -1.0,  250.0,

            // Left face
            -250.0, -1.0, -250.0,
            -250.0, -1.0,  250.0,
            0.0,  1.0,  0.0,
            0.0,  1.0, 0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesSKY), gl.STATIC_DRAW);
        cubeVertexPositionBufferSKY.itemSize = 3;
        cubeVertexPositionBufferSKY.numItems = 24;

        cubeVertexNormalBufferSKY = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSKY);
        var vertexNormalsSKY = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsSKY), gl.STATIC_DRAW);
        cubeVertexNormalBufferSKY.itemSize = 3;
        cubeVertexNormalBufferSKY.numItems = 24;

        cubeVertexTextureCoordBufferSKY = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSKY);
        var textureCoordsSKY = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsSKY), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferSKY.itemSize = 2;
        cubeVertexTextureCoordBufferSKY.numItems = 24;

        cubeVertexIndexBufferSKY = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSKY);
        var cubeVertexIndicesSKY = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesSKY), gl.STATIC_DRAW);
        cubeVertexIndexBufferSKY.itemSize = 1;
        cubeVertexIndexBufferSKY.numItems = 36;
   
   
   //####
    		    SILJAKMVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, SILJAKMVertexPositionBuffer);
        verticesS = [
            // Front face
            -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             0.0,  15.0,  0.0,
             0.0,  25.0,  0.0,

            // Back face
            -1.0, -1.0, -1.0,
            0.0,  15.0, 0.0,
             0.0,  15.0, 0.0,
             1.0, -1.0, -1.0,

            // Top face
            0.0,  15.0, 0.0,
            0.0,  15.0,  0.0,
             0.0,  15.0,  0.0,
             0.0,  15.0, 0.0,

            // Bottom face
            -1.0, -1.0, -1.0,
             1.0, -1.0, -1.0,
             1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            // Right face
             1.0, -1.0, -1.0,
             0.0,  15.0, 0.0,
             0.0,  15.0,  0.0,
             1.0, -1.0,  1.0,

            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            0.0,  15.0,  0.0,
            0.0,  15.0, 0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesS), gl.STATIC_DRAW);
        SILJAKMVertexPositionBuffer.itemSize = 3;
        SILJAKMVertexPositionBuffer.numItems = 24;

        SILJAKMVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, SILJAKMVertexNormalBuffer);
        var vertexNormalsS = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsS), gl.STATIC_DRAW);
        SILJAKMVertexNormalBuffer.itemSize = 3;
        SILJAKMVertexNormalBuffer.numItems = 24;

        SILJAKMVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, SILJAKMVertexTextureCoordBuffer);
        var textureCoordsS = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsS), gl.STATIC_DRAW);
        SILJAKMVertexTextureCoordBuffer.itemSize = 2;
        SILJAKMVertexTextureCoordBuffer.numItems = 24;

        SILJAKMVertexIndexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, SILJAKMVertexIndexBuffer);
        var SILJAKMVertexIndices = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(SILJAKMVertexIndices), gl.STATIC_DRAW);
        SILJAKMVertexIndexBuffer.itemSize = 1;
        SILJAKMVertexIndexBuffer.numItems = 36;
   



        var latitudeBands = 30;
        var longitudeBands = 30;
        var radius = 1;

        var vertexPositionData = [];
        var normalData = [];
        var textureCoordData = [];
        for (var latNumber=0; latNumber <= latitudeBands; latNumber++) {
            var theta = latNumber * Math.PI / latitudeBands;
            var sinTheta = Math.sin(theta);
            var cosTheta = Math.cos(theta);

            for (var longNumber=0; longNumber <= longitudeBands; longNumber++) {
                var phi = longNumber * 2 * Math.PI / longitudeBands;
                var sinPhi = Math.sin(phi);
                var cosPhi = Math.cos(phi);

                var x = cosPhi * sinTheta;
                var y = cosTheta;
                var z = sinPhi * sinTheta;
                var u = 1 - (longNumber / longitudeBands);
                var v = 1 - (latNumber / latitudeBands);

                normalData.push(x);
                normalData.push(y);
                normalData.push(z);
                textureCoordData.push(u);
                textureCoordData.push(v);
                vertexPositionData.push(radius * x);
                vertexPositionData.push(radius * y);
                vertexPositionData.push(radius * z);
            }
        }

        var indexData = [];
        for (var latNumber=0; latNumber < latitudeBands; latNumber++) {
            for (var longNumber=0; longNumber < longitudeBands; longNumber++) {
                var first = (latNumber * (longitudeBands + 1)) + longNumber;
                var second = first + longitudeBands + 1;
                indexData.push(first);
                indexData.push(second);
                indexData.push(first + 1);

                indexData.push(second);
                indexData.push(second + 1);
                indexData.push(first + 1);
            }
        }

        moonVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalData), gl.STATIC_DRAW);
        moonVertexNormalBuffer.itemSize = 3;
        moonVertexNormalBuffer.numItems = normalData.length / 3;

        moonVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexTextureCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordData), gl.STATIC_DRAW);
        moonVertexTextureCoordBuffer.itemSize = 2;
        moonVertexTextureCoordBuffer.numItems = textureCoordData.length / 2;

        moonVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositionData), gl.STATIC_DRAW);
        moonVertexPositionBuffer.itemSize = 3;
        moonVertexPositionBuffer.numItems = vertexPositionData.length / 3;

        moonVertexIndexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, moonVertexIndexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STREAM_DRAW);
        moonVertexIndexBuffer.itemSize = 1;
        moonVertexIndexBuffer.numItems = indexData.length;


        laptopScreenVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexPositionBuffer);
        vertices = [
             0.580687, 0.659, 0.813106,
            -0.580687, 0.659, 0.813107,
             0.580687, 0.472, 0.113121,
            -0.580687, 0.472, 0.113121,
            ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        laptopScreenVertexPositionBuffer.itemSize = 3;
        laptopScreenVertexPositionBuffer.numItems = 4;

        laptopScreenVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexNormalBuffer);
        var vertexNormals = [
             0.000000, -0.965926, 0.258819,
             0.000000, -0.965926, 0.258819,
             0.000000, -0.965926, 0.258819,
             0.000000, -0.965926, 0.258819,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
        laptopScreenVertexNormalBuffer.itemSize = 3;
        laptopScreenVertexNormalBuffer.numItems = 4;

        laptopScreenVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexTextureCoordBuffer);
        var textureCoords = [
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            0.0, 0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
        laptopScreenVertexTextureCoordBuffer.itemSize = 2;
        laptopScreenVertexTextureCoordBuffer.numItems = 4;
    }


	
	
 function initBuffers1() {  
  cubeVertexPositionBufferZID1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferZID1);
        verticesZID1 = [
            // Front face
            -15.0, -1.5,  1.0,
             15.0, -1.5,  1.0,
             15.0,  9.7,  1.0,
            -15.0,  9.7,  1.0,

            // Back face
            -15.0, -1.5, 0.80,
            -15.0,  9.7, 0.80,
             15.0,  9.7, 0.80,
             15.0, -1.5, 0.80,

            // Top face
            -15.0,  9.7, 0.80,
            -15.0,  9.7,  1.0,
             15.0,  9.7,  1.0,
             15.0,  9.7, 0.80,

            // Bottom face
            -15.0, -1.5, 0.80,
             15.0, -1.5, 0.80,
             15.0, -1.5,  1.0,
            -15.0, -1.5,  1.0,

            // Right face
             15.0, -1.5, 0.80,
             15.0,  9.7, 0.80,
             15.0,  9.7,  1.0,
             15.0, -1.5,  1.0,

            // Left face
            -15.0, -1.5, 0.80,
            -15.0, -1.5,  1.0,
            -15.0,  9.7,  1.0,
            -15.0,  9.7, 0.80,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesZID1), gl.STATIC_DRAW);
        cubeVertexPositionBufferZID1.itemSize = 3;
        cubeVertexPositionBufferZID1.numItems = 24;

        cubeVertexNormalBufferZID1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferZID1);
        var vertexNormalsZID1 = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsZID1), gl.STATIC_DRAW);
        cubeVertexNormalBufferZID1.itemSize = 3;
        cubeVertexNormalBufferZID1.numItems = 24;

        cubeVertexTextureCoordBufferZID1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferZID1);
        var textureCoordsZID1 = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsZID1), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferZID1.itemSize = 2;
        cubeVertexTextureCoordBufferZID1.numItems = 24;

        cubeVertexIndexBufferZID1 = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferZID1);
        var cubeVertexIndicesZID1 = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesZID1), gl.STATIC_DRAW);
        cubeVertexIndexBufferZID1.itemSize = 1;
        cubeVertexIndexBufferZID1.numItems = 36;
// zid 1 kraj		
// POD1pocetak
cubeVertexPositionBufferPOD1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferPOD1);
        verticesPOD1 = [
            // Front face
            -15.0, -1.0,  15.0,
             15.0, -1.0,  15.0,
             15.0,  -0.8,  15.0,
            -15.0,  -0.8,  15.0,

            // Back face
            -15.0, -1.0, -15.0,
            -15.0,  -0.8, -15.0,
             15.0,  -0.8, -15.0,
             15.0, -1.0, -15.0,

            // Top face
            -15.0,  -0.8, -15.0,
            -15.0,  -0.8,  15.0,
             15.0,  -0.8,  15.0,
             15.0,  -0.8, -15.0,

            // Bottom face
            -15.0, -1.0, -15.0,
             15.0, -1.0, -15.0,
             15.0, -1.0,  15.0,
            -15.0, -1.0,  15.0,

            // Right face
             15.0, -1.0, -15.0,
             15.0,  -0.8, -15.0,
             15.0,  -0.8,  15.0,
             15.0, -1.0,  15.0,

            // Left face
            -15.0, -1.0, -15.0,
            -15.0, -1.0,  15.0,
            -15.0,  -0.8,  15.0,
            -15.0,  -0.8, -15.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesPOD1), gl.STATIC_DRAW);
        cubeVertexPositionBufferPOD1.itemSize = 3;
        cubeVertexPositionBufferPOD1.numItems = 24;

        cubeVertexNormalBufferPOD1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferPOD1);
        var vertexNormalsPOD1 = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsPOD1), gl.STATIC_DRAW);
        cubeVertexNormalBufferPOD1.itemSize = 3;
        cubeVertexNormalBufferPOD1.numItems = 24;

        cubeVertexTextureCoordBufferPOD1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferPOD1);
        var textureCoordsPOD1 = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
  
            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsPOD1), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferPOD1.itemSize = 2;
        cubeVertexTextureCoordBufferPOD1.numItems = 24;

        cubeVertexIndexBufferPOD1 = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferPOD1);
        var cubeVertexIndicesPOD1 = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesPOD1), gl.STATIC_DRAW);
        cubeVertexIndexBufferPOD1.itemSize = 1;
        cubeVertexIndexBufferPOD1.numItems = 36;
		
// POD1 KRAJ

// Plafon1pocetak
cubeVertexPositionBufferPLAFON1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferPLAFON1);
        verticesPLAFON1 = [
            // Front face
            -15.0, 10.0,  15.0,
             15.0, 10.0,  15.0,
             15.0,  9.8,  15.0,
            -15.0,  9.8,  15.0,

            // Back face
            -15.0, 10.0, -15.0,
            -15.0,  9.8, -15.0,
             15.0,  9.8, -15.0,
             15.0, 10.0, -15.0,

            // Top face
            -15.0,  9.8, -15.0,
            -15.0,  9.8,  15.0,
             15.0,  9.8,  15.0,
             15.0,  9.8, -15.0,

            // Bottom face
            -15.0, 10.0, -15.0,
             15.0, 10.0, -15.0,
             15.0, 10.0,  15.0,
            -15.0, 10.0,  15.0,

            // Right face
             15.0, 10.0, -15.0,
             15.0,  9.8, -15.0,
             15.0,  9.8,  15.0,
             15.0, 10.0,  15.0,

            // Left face
            -15.0, 10.0, -15.0,
            -15.0, 10.0,  15.0,
            -15.0,  9.8,  15.0,
            -15.0,  9.8, -15.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesPLAFON1), gl.STATIC_DRAW);
        cubeVertexPositionBufferPLAFON1.itemSize = 3;
        cubeVertexPositionBufferPLAFON1.numItems = 24;

        cubeVertexNormalBufferPLAFON1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferPLAFON1);
        var vertexNormalsPLAFON1 = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsPLAFON1), gl.STATIC_DRAW);
        cubeVertexNormalBufferPLAFON1.itemSize = 3;
        cubeVertexNormalBufferPLAFON1.numItems = 24;

        cubeVertexTextureCoordBufferPLAFON1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferPLAFON1);
        var textureCoordsPLAFON1 = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsPLAFON1), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferPLAFON1.itemSize = 2;
        cubeVertexTextureCoordBufferPLAFON1.numItems = 24;

        cubeVertexIndexBufferPLAFON1 = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferPLAFON1);
        var cubeVertexIndicesPLAFON1 = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesPLAFON1), gl.STATIC_DRAW);
        cubeVertexIndexBufferPLAFON1.itemSize = 1;
        cubeVertexIndexBufferPLAFON1.numItems = 36;		
		//PLAFON kraj
		
// ZID BOCNI1 pocetak
    cubeVertexPositionBufferBOCNI1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferBOCNI1);
        verticesBOCNI1 = [
            // Front face
            0.80, -1.0,  15.0,
             1.0, -1.0,  15.0,
             1.0,  10.0,  15.0,
            0.80,  10.0,  15.0,

            // Back face
            0.80, -1.0, -15.0,
            0.80,  10.0, -15.0,
             1.0,  10.0, -15.0,
             1.0, -1.0, -15.0,

            // Top face
            0.80,  10.0, -15.0,
            0.80,  10.0,  15.0,
             1.0,  10.0,  15.0,
             1.0,  10.0, -15.0,

            // Bottom face
            0.80, -1.0, -15.0,
             1.0, -1.0, -15.0,
             1.0, -1.0,  15.0,
            0.80, -1.0,  15.0,

            // Right face
             1.0, -1.0, -15.0,
             1.0,  10.0, -15.0,
             1.0,  10.0,  15.0,
             1.0, -1.0,  15.0,

            // Left face
            0.80, -1.0, -15.0,
            0.80, -1.0,  15.0,
            0.80,  10.0,  15.0,
            0.80,  10.0, -15.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesBOCNI1), gl.STATIC_DRAW);
        cubeVertexPositionBufferBOCNI1.itemSize = 3;
        cubeVertexPositionBufferBOCNI1.numItems = 24;

        cubeVertexNormalBufferBOCNI1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferBOCNI1);
        var vertexNormalsBOCNI1 = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsBOCNI1), gl.STATIC_DRAW);
        cubeVertexNormalBufferBOCNI1.itemSize = 3;
        cubeVertexNormalBufferBOCNI1.numItems = 24;

        cubeVertexTextureCoordBufferBOCNI1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferBOCNI1);
        var textureCoordsBOCNI1 = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsBOCNI1), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferBOCNI1.itemSize = 2;
        cubeVertexTextureCoordBufferBOCNI1.numItems = 24;

        cubeVertexIndexBufferBOCNI1 = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferBOCNI1);
        var cubeVertexIndicesBOCNI1 = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesBOCNI1), gl.STATIC_DRAW);
        cubeVertexIndexBufferBOCNI1.itemSize = 1;
        cubeVertexIndexBufferBOCNI1.numItems = 36;
		//LOPTA
	
  /*
        var latitudeBands = 30;
        var longitudeBands = 30;
        var radius = 1;

        var vertexPositionData = [];
        var normalData = [];
        var textureCoordData = [];
        for (var latNumber=0; latNumber <= latitudeBands; latNumber++) {
            var theta = latNumber * Math.PI / latitudeBands;
            var sinTheta = Math.sin(theta);
            var cosTheta = Math.cos(theta);

            for (var longNumber=0; longNumber <= longitudeBands; longNumber++) {
                var phi = longNumber * 2 * Math.PI / longitudeBands;
                var sinPhi = Math.sin(phi);
                var cosPhi = Math.cos(phi);

                var x = cosPhi * sinTheta;
                var y = cosTheta;
                var z = sinPhi * sinTheta;
                var u = 1 - (longNumber / longitudeBands);
                var v = 1 - (latNumber / latitudeBands);

                normalData.push(x);
                normalData.push(y);
                normalData.push(z);
                textureCoordData.push(u);
                textureCoordData.push(v);
                vertexPositionData.push(radius * x);
                vertexPositionData.push(radius * y);
                vertexPositionData.push(radius * z);
            }
        }

        var indexData = [];
        for (var latNumber=0; latNumber < latitudeBands; latNumber++) {
            for (var longNumber=0; longNumber < longitudeBands; longNumber++) {
                var first = (latNumber * (longitudeBands + 1)) + longNumber;
                var second = first + longitudeBands + 1;
                indexData.push(first);
                indexData.push(second);
                indexData.push(first + 1);

                indexData.push(second);
                indexData.push(second + 1);
                indexData.push(first + 1);
            }
        }

        moonVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalData), gl.STATIC_DRAW);
        moonVertexNormalBuffer.itemSize = 3;
        moonVertexNormalBuffer.numItems = normalData.length / 3;

        moonVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexTextureCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordData), gl.STATIC_DRAW);
        moonVertexTextureCoordBuffer.itemSize = 2;
        moonVertexTextureCoordBuffer.numItems = textureCoordData.length / 2;

        moonVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositionData), gl.STATIC_DRAW);
        moonVertexPositionBuffer.itemSize = 3;
        moonVertexPositionBuffer.numItems = vertexPositionData.length / 3;

        moonVertexIndexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, moonVertexIndexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STATIC_DRAW);
        moonVertexIndexBuffer.itemSize = 1;
        moonVertexIndexBuffer.numItems = indexData.length;*/
		// PODPENJLEVI
		
		cubeVertexPositionBufferPENJLEVI = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferPENJLEVI);
        verticesPENJLEVI = [
             // Front face
            -15.0, -1.0,  15.0,
             15.0, 5.0,  14.7,
             15.0,  5.2,  14.7,
            -15.0,  -0.8,  15.0,

            // Back face
            -15.0, -1.0, -15.0,
            -15.0,  -0.8, -15.0,
             15.0,  5.2, -15.0,
             15.0, 5.0, -15.0,

            // Top face
            -15.0,  -0.8, -15.0,
            -15.0,  -0.8,  14.7,
             15.0,  5.2,  14.7,
             15.0,  5.2, -15.0,

            // Bottom face
            -15.0, -1.0, -15.0,
             15.0, 5.0, -15.0,
             15.0, 5.0,  14.7,
            -15.0, -1.0,  14.7,

            // Right face
             15.0, 5.0, -15.0,
             15.0,  5.2, -15.0,
             15.0,  5.2,  14.7,
             15.0, 5.0,  14.7,

            // Left face
            -15.0, -1.0, -15.0,
            -15.0, -1.0,  14.7,
            -15.0,  -0.8,  14.7,
            -15.0, -0.8, -15.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesPENJLEVI), gl.STATIC_DRAW);
        cubeVertexPositionBufferPENJLEVI.itemSize = 3;
        cubeVertexPositionBufferPENJLEVI.numItems = 24;

        cubeVertexNormalBufferPENJLEVI = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferPENJLEVI);
        var vertexNormalsPENJLEVI = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsPENJLEVI), gl.STATIC_DRAW);
        cubeVertexNormalBufferPENJLEVI.itemSize = 3;
        cubeVertexNormalBufferPENJLEVI.numItems = 24;

        cubeVertexTextureCoordBufferPENJLEVI = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferPENJLEVI);
        var textureCoordsPENJLEVI = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
  
            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsPENJLEVI), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferPENJLEVI.itemSize = 2;
        cubeVertexTextureCoordBufferPENJLEVI.numItems = 24;

        cubeVertexIndexBufferPENJLEVI = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferPENJLEVI);
        var cubeVertexIndicesPENJLEVI = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesPENJLEVI), gl.STATIC_DRAW);
        cubeVertexIndexBufferPENJLEVI.itemSize = 1;
        cubeVertexIndexBufferPENJLEVI.numItems = 36;
		
		
		// PODPENJ
		
		cubeVertexPositionBufferPENJ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferPENJ);
        verticesPENJ = [
             // Front face
            -15.0, 5.0,  15.0,
             15.0, -1.0,  15.0,
             15.0,  -0.8,  15.0,
            -15.0,  5.2,  15.0,

            // Back face
            -15.0, 5.0, -15.0,
            -15.0,  5.2, -15.0,
             15.0,  -0.8, -15.0,
             15.0, -1.0, -15.0,

            // Top face
            -15.0,  5.2, -15.0,
            -15.0,  5.2,  15.0,
             15.0,  -0.8,  15.0,
             15.0,  -0.8, -15.0,

            // Bottom face
            -15.0, 5.0, -15.0,
             15.0, -1.0, -15.0,
             15.0, -1.0,  15.0,
            -15.0, 5.0,  15.0,

            // Right face
             15.0, -1.0, -15.0,
             15.0,  -0.8, -15.0,
             15.0,  -0.8,  15.0,
             15.0, -1.0,  15.0,

            // Left face
            -15.0, 5.0, -15.0,
            -15.0, 5.0,  15.0,
            -15.0,  5.2,  15.0,
            -15.0,  5.2, -15.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesPENJ), gl.STATIC_DRAW);
        cubeVertexPositionBufferPENJ.itemSize = 3;
        cubeVertexPositionBufferPENJ.numItems = 24;

        cubeVertexNormalBufferPENJ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferPENJ);
        var vertexNormalsPENJ = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsPENJ), gl.STATIC_DRAW);
        cubeVertexNormalBufferPENJ.itemSize = 3;
        cubeVertexNormalBufferPENJ.numItems = 24;

        cubeVertexTextureCoordBufferPENJ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferPENJ);
        var textureCoordsPENJ = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
  
            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsPENJ), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferPENJ.itemSize = 2;
        cubeVertexTextureCoordBufferPENJ.numItems = 24;

        cubeVertexIndexBufferPENJ = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferPENJ);
        var cubeVertexIndicesPENJ = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesPENJ), gl.STATIC_DRAW);
        cubeVertexIndexBufferPENJ.itemSize = 1;
        cubeVertexIndexBufferPENJ.numItems = 36;
		
		
		// KOCKA KLASIKA ### CUBE ###

        cubeVertexPositionBufferKLASIK = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferKLASIK);
        verticesKLASIK = [
            // Front face
            -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             1.0,  1.0,  1.0,
            -1.0,  1.0,  1.0,

            // Back face
            -1.0, -1.0, -1.0,
            -1.0,  1.0, -1.0,
             1.0,  1.0, -1.0,
             1.0, -1.0, -1.0,

            // Top face
            -1.0,  1.0, -1.0,
            -1.0,  1.0,  1.0,
             1.0,  1.0,  1.0,
             1.0,  1.0, -1.0,

            // Bottom face
            -1.0, -1.0, -1.0,
             1.0, -1.0, -1.0,
             1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            // Right face
             1.0, -1.0, -1.0,
             1.0,  1.0, -1.0,
             1.0,  1.0,  1.0,
             1.0, -1.0,  1.0,

            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            -1.0,  1.0,  1.0,
            -1.0,  1.0, -1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesKLASIK), gl.STATIC_DRAW);
        cubeVertexPositionBufferKLASIK.itemSize = 3;
        cubeVertexPositionBufferKLASIK.numItems = 24;
		
		  cubeVertexNormalBufferKLASIK = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferKLASIK);
        var vertexNormalsKLASIK = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsKLASIK), gl.STATIC_DRAW);
        cubeVertexNormalBufferKLASIK.itemSize = 3;
        cubeVertexNormalBufferKLASIK.numItems = 24;

        cubeVertexTextureCoordBufferKLASIK = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferKLASIK);
        var textureCoordsKLASIK = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsKLASIK), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferKLASIK.itemSize = 2;
        cubeVertexTextureCoordBufferKLASIK.numItems = 24;

        cubeVertexIndexBufferKLASIK = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferKLASIK);
        var cubeVertexIndicesKLASIK = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ]
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesKLASIK), gl.STATIC_DRAW);
        cubeVertexIndexBufferKLASIK.itemSize = 1;
        cubeVertexIndexBufferKLASIK.numItems = 36;
			// nebodesno
		
		cubeVertexPositionBufferNEBODESNO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferNEBODESNO);
        verticesNEBODESNO = [
             // Front face
            -15.0, -10.0,  150.0,
             15.0, 10.0,  150,
             15.0,  10.2,  150,
            -15.0,  -9.8,  150.0,

            // Back face
            -15.0, -10.0, -150.0,
            -15.0,  -9.8, -150.0,
             15.0,  10.2, -150.0,
             15.0, 10.0, -150.0,

            // Top face
            -15.0,  -9.8, -150.0,
            -15.0,  -9.8,  150,
             15.0,  10.2,  150,
             15.0,  10.2, -150.0,

            // Bottom face
            -15.0, -10.0, -150.0,
             15.0, 10.0, -150.0,
             15.0, 10.0,  150,
            -15.0, -10.0,  150,

            // Right face
             15.0, 10.0, -150.0,
             15.0,  10.2, -150.0,
             15.0,  10.2,  150,
             15.0, 10.0,  150,

            // Left face
            -15.0, -1.0, -150.0,
            -15.0, -1.0,  150,
            -15.0,  -9.8,  150,
            -15.0, -9.8, -150.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesNEBODESNO), gl.STATIC_DRAW);
        cubeVertexPositionBufferNEBODESNO.itemSize = 3;
        cubeVertexPositionBufferNEBODESNO.numItems = 24;

        cubeVertexNormalBufferNEBODESNO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferNEBODESNO);
        var vertexNormalsNEBODESNO = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsNEBODESNO), gl.STATIC_DRAW);
        cubeVertexNormalBufferNEBODESNO.itemSize = 3;
        cubeVertexNormalBufferNEBODESNO.numItems = 24;

        cubeVertexTextureCoordBufferNEBODESNO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferNEBODESNO);
        var textureCoordsNEBODESNO = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
  
            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsNEBODESNO), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferNEBODESNO.itemSize = 2;
        cubeVertexTextureCoordBufferNEBODESNO.numItems = 24;

        cubeVertexIndexBufferNEBODESNO = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferNEBODESNO);
        var cubeVertexIndicesNEBODESNO = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesNEBODESNO), gl.STATIC_DRAW);
        cubeVertexIndexBufferNEBODESNO.itemSize = 1;
        cubeVertexIndexBufferNEBODESNO.numItems = 36;
		
		
		//stub
		cubeVertexPositionBufferSTUBB = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSTUBB);
        verticesSTUBB = [
            // Front face
            -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             1.0,  15.0,  1.0,
            -1.0,  15.0,  1.0,

            // Back face
            -1.0, -1.0, -1.0,
            -1.0,  15.0, -1.0,
             1.0,  15.0, -1.0,
             1.0, -1.0, -1.0,

            // Top face
            -1.0,  15.0, -1.0,
            -1.0,  15.0,  1.0,
             1.0,  15.0,  1.0,
             1.0,  15.0, -1.0,

            // Bottom face
            -1.0, -1.0, -1.0,
             1.0, -1.0, -1.0,
             1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            // Right face
             1.0, -1.0, -1.0,
             1.0,  15.0, -1.0,
             1.0,  15.0,  1.0,
             1.0, -1.0,  1.0,

            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            -1.0,  15.0,  1.0,
            -1.0,  15.0, -1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesSTUBB), gl.STATIC_DRAW);
        cubeVertexPositionBufferSTUBB.itemSize = 3;
        cubeVertexPositionBufferSTUBB.numItems = 24;

        cubeVertexNormalBufferSTUBB = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSTUBB);
        var vertexNormalsSTUBB = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsSTUBB), gl.STATIC_DRAW);
        cubeVertexNormalBufferSTUBB.itemSize = 3;
        cubeVertexNormalBufferSTUBB.numItems = 24;

        cubeVertexTextureCoordBufferSTUBB = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSTUBB);
        var textureCoordsSTUBB = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsSTUBB), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferSTUBB.itemSize = 2;
        cubeVertexTextureCoordBufferSTUBB.numItems = 24;

        cubeVertexIndexBufferSTUBB = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSTUBB);
        var cubeVertexIndicesSTUBB = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesSTUBB), gl.STATIC_DRAW);
        cubeVertexIndexBufferSTUBB.itemSize = 1;
        cubeVertexIndexBufferSTUBB.numItems = 36;

		//KOCKABENER
				//TABLA
		cubeVertexPositionBufferADD = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferADD);
        verticesADD = [
            // Front face
            -5.0, -5.0,  5.0,
             5.0, -5.0,  5.0,
             5.0,  5.0,  5.0,
            -5.0,  5.0,  5.0,

            // Back face
            -5.0, -5.0, 4.90,
            -5.0,  5.0, 4.90,
             5.0,  5.0, 4.90,
             5.0, -5.0, 4.90,

            // Top face
            -5.0,  5.0, 4.90,
            -5.0,  5.0,  5.0,
             5.0,  5.0,  5.0,
             5.0,  5.0, 4.90,

            // Bottom face
            -5.0, -5.0, 4.90,
             5.0, -5.0, 4.90,
             5.0, -5.0,  5.0,
            -5.0, -5.0,  5.0,

            // Right face
             5.0, -5.0, 4.90,
             5.0,  5.0, 4.90,
             5.0,  5.0,  5.0,
             5.0, -5.0,  5.0,

            // Left face
            -5.0, -5.0, 4.90,
            -5.0, -5.0,  5.0,
            -5.0,  5.0,  5.0,
            -5.0,  5.0, 4.90,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesADD), gl.STATIC_DRAW);
        cubeVertexPositionBufferADD.itemSize = 3;
        cubeVertexPositionBufferADD.numItems = 24;

        cubeVertexNormalBufferADD = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferADD);
        var vertexNormalsADD = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsADD), gl.STATIC_DRAW);
        cubeVertexNormalBufferADD.itemSize = 3;
        cubeVertexNormalBufferADD.numItems = 24;

        cubeVertexTextureCoordBufferADD = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferADD);
        var textureCoordsADD = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsADD), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferADD.itemSize = 2;
        cubeVertexTextureCoordBufferADD.numItems = 24;

        cubeVertexIndexBufferADD = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferADD);
        var cubeVertexIndicesADD = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesADD), gl.STATIC_DRAW);
        cubeVertexIndexBufferADD.itemSize = 1;
        cubeVertexIndexBufferADD.numItems = 36;
		
		
		
		//TABLA
		cubeVertexPositionBufferBT = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferBT);
        verticesBT = [
            // Front face
            4.9, -5.0,  5.0,
             5.0, -5.0,  5.0,
             5.0,  5.0,  5.0,
            4.9,  5.0,  5.0,

            // Back face
            4.9, -5.0, -5.0,
            4.9,  5.0, -5.0,
             5.0,  5.0, -5.0,
             5.0, -5.0, -5.0,

            // Top face
            4.9,  5.0, -5.0,
            4.9,  5.0,  5.0,
             5.0,  5.0,  5.0,
             5.0,  5.0, -5.0,

            // Bottom face
            4.9, -5.0, -5.0,
             5.0, -5.0, -5.0,
             5.0, -5.0,  5.0,
            4.9, -5.0,  5.0,

            // Right face
             5.0, -5.0, -5.0,
             5.0,  5.0, -5.0,
             5.0,  5.0,  5.0,
             5.0, -5.0,  5.0,

            // Left face
            4.9, -5.0, -5.0,
            4.9, -5.0,  5.0,
            4.9,  5.0,  5.0,
            4.9,  5.0, -5.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesBT), gl.STATIC_DRAW);
        cubeVertexPositionBufferBT.itemSize = 3;
        cubeVertexPositionBufferBT.numItems = 24;

        cubeVertexNormalBufferBT = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferBT);
        var vertexNormalsBT = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsBT), gl.STATIC_DRAW);
        cubeVertexNormalBufferBT.itemSize = 3;
        cubeVertexNormalBufferBT.numItems = 24;

        cubeVertexTextureCoordBufferBT = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferBT);
        var textureCoordsBT = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsBT), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferBT.itemSize = 2;
        cubeVertexTextureCoordBufferBT.numItems = 24;

        cubeVertexIndexBufferBT = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferBT);
        var cubeVertexIndicesBT = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesBT), gl.STATIC_DRAW);
        cubeVertexIndexBufferBT.itemSize = 1;
        cubeVertexIndexBufferBT.numItems = 36;
// REKLAMA
	//  

  cubeVertexPositionBufferREKLAMA = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferREKLAMA);
        verticesREKLAMA = [
             // Front face
             -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             2.50,  1.50,  2.50,
            -2.50,  1.50,  2.50,

            // Back face
            -1.0, -1.0, -1.0,
            -2.50,  1.50, -2.50,
             2.50,  1.50, -2.50,
             1.0, -1.0, -1.0,

            // Top face
            -2.50,  1.50, -2.50,
            -2.50,  1.50,  2.50,
             2.50,  1.50,  2.50,
             2.50,  1.50, -2.50,

            // Bottom face
            -1.0, -1.0, -1.0,
             1.0, -1.0, -1.0,
             1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            // Right face
             1.0, -1.0, -1.0,
             2.50,  1.50, -2.50,
             2.50,  1.50,  2.50,
             1.0, -1.0,  1.0,

            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            -2.50,  1.50,  2.50,
            -2.50,  1.50, -2.50,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesREKLAMA), gl.STATIC_DRAW);
        cubeVertexPositionBufferREKLAMA.itemSize = 3;
        cubeVertexPositionBufferREKLAMA.numItems = 24;

        cubeVertexTextureCoordBufferREKLAMA = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferREKLAMA);
        var textureCoordsREKLAMA = [
          // Front face
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,

          // Back face
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
          0.0, 0.0,

          // Top face
          0.0, 1.0,
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,

          // Bottom face
          1.0, 1.0,
          0.0, 1.0,
          0.0, 0.0,
          1.0, 0.0,

          // Right face
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
          0.0, 0.0,

          // Left face
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsREKLAMA), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferREKLAMA.itemSize = 2;
        cubeVertexTextureCoordBufferREKLAMA.numItems = 24;

        cubeVertexIndexBufferREKLAMA = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferREKLAMA);
        var cubeVertexIndicesREKLAMA = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesREKLAMA), gl.STATIC_DRAW);
        cubeVertexIndexBufferREKLAMA.itemSize = 1;
        cubeVertexIndexBufferREKLAMA.numItems = 36;
		
		}