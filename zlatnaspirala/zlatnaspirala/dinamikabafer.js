	// saljak ubica ## move 
	var cubeVertexPositionBufferSILJAK;
    var cubeVertexNormalBufferSILJAK;
    var cubeVertexTextureCoordBufferSILJAK;
    var cubeVertexIndexBufferSILJAK;
	var cubeVertexPositionBufferSILJAK1;
    var cubeVertexNormalBufferSILJAK1;
    var cubeVertexTextureCoordBufferSILJAK1;
    var cubeVertexIndexBufferSILJAK1;
	var siljak1bool=0;var SILJAK1 = 1;
 function initBuffersDINAMIKA() {  
 
 
 
 
		 cubeVertexPositionBufferSILJAK = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSILJAK);
        verticesSILJAK = [
            // Front face
            -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             0.0,  SILJAK,  0.0,
             0.0,  SILJAK,  0.0,

            // Back face
            -1.0, -1.0, -1.0,
            0.0,  SILJAK, 0.0,
             0.0,  SILJAK, 0.0,
             1.0, -1.0, -1.0,

            // Top face
            0.0,  SILJAK, 0.0,
            0.0,  SILJAK,  0.0,
             0.0,  SILJAK,  0.0,
             0.0,  SILJAK, 0.0,

            // Bottom face
            -1.0, -1.0, -1.0,
             1.0, -1.0, -1.0,
             1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            // Right face
             1.0, -1.0, -1.0,
             0.0,  SILJAK, 0.0,
             0.0,  SILJAK,  0.0,
             1.0, -1.0,  1.0,

            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            0.0,  SILJAK,  0.0,
            0.0,  SILJAK, 0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesSILJAK), gl.STATIC_DRAW);
        cubeVertexPositionBufferSILJAK.itemSize = 3;
        cubeVertexPositionBufferSILJAK.numItems = 24;

        cubeVertexNormalBufferSILJAK = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSILJAK);
        var vertexNormalsSILJAK = [
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
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsSILJAK), gl.STATIC_DRAW);
        cubeVertexNormalBufferSILJAK.itemSize = 3;
        cubeVertexNormalBufferSILJAK.numItems = 24;

        cubeVertexTextureCoordBufferSILJAK = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSILJAK);
        var textureCoordsSILJAK = [
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
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsSILJAK), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferSILJAK.itemSize = 2;
        cubeVertexTextureCoordBufferSILJAK.numItems = 24;

        cubeVertexIndexBufferSILJAK = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSILJAK);
        var cubeVertexIndicesSILJAK = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesSILJAK), gl.STATIC_DRAW);
        cubeVertexIndexBufferSILJAK.itemSize = 1;
        cubeVertexIndexBufferSILJAK.numItems = 36;
		
		
		 cubeVertexPositionBufferSILJAK1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSILJAK1);
        verticesSILJAK1 = [
            // Front face
            -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             0.0,  SILJAK1,  0.0,
             0.0,  SILJAK1,  0.0,

            // Back face
            -1.0, -1.0, -1.0,
            0.0,  SILJAK1, 0.0,
             0.0,  SILJAK1, 0.0,
             1.0, -1.0, -1.0,

            // Top face
            0.0,  SILJAK1, 0.0,
            0.0,  SILJAK1,  0.0,
             0.0,  SILJAK1,  0.0,
             0.0,  SILJAK1, 0.0,

            // Bottom face
            -1.0, -1.0, -1.0,
             1.0, -1.0, -1.0,
             1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            // Right face
             1.0, -1.0, -1.0,
             0.0,  SILJAK1, 0.0,
             0.0,  SILJAK1,  0.0,
             1.0, -1.0,  1.0,

            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            0.0,  SILJAK1,  0.0,
            0.0,  SILJAK1, 0.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesSILJAK1), gl.STATIC_DRAW);
        cubeVertexPositionBufferSILJAK1.itemSize = 3;
        cubeVertexPositionBufferSILJAK1.numItems = 24;

        cubeVertexNormalBufferSILJAK1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSILJAK1);
        var vertexNormalsSILJAK1 = [
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
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsSILJAK1), gl.STATIC_DRAW);
        cubeVertexNormalBufferSILJAK1.itemSize = 3;
        cubeVertexNormalBufferSILJAK1.numItems = 24;

        cubeVertexTextureCoordBufferSILJAK1 = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSILJAK1);
        var textureCoordsSILJAK1 = [
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
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsSILJAK1), gl.STATIC_DRAW);
        cubeVertexTextureCoordBufferSILJAK1.itemSize = 2;
        cubeVertexTextureCoordBufferSILJAK1.numItems = 24;

        cubeVertexIndexBufferSILJAK1 = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSILJAK1);
        var cubeVertexIndicesSILJAK1 = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesSILJAK1), gl.STATIC_DRAW);
        cubeVertexIndexBufferSILJAK1.itemSize = 1;
        cubeVertexIndexBufferSILJAK1.numItems = 36;
		
		
		
		
		}