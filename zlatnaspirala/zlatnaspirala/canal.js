   function handleLoadedTeapotH(hexData) {
        teapotVertexNormalBufferQ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexNormalBufferQ);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hexData.vertexNormals), gl.STATIC_DRAW);
        teapotVertexNormalBufferQ.itemSize = 3;
        teapotVertexNormalBufferQ.numItems = hexData.vertexNormals.length / 3;

        teapotVertexTextureCoordBufferQ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexTextureCoordBufferQ);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hexData.vertexTextureCoords), gl.STATIC_DRAW);
        teapotVertexTextureCoordBufferQ.itemSize = 2;
        teapotVertexTextureCoordBufferQ.numItems = hexData.vertexTextureCoords.length / 2;

        teapotVertexPositionBufferQ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexPositionBufferQ);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hexData.vertexPositions), gl.STATIC_DRAW);
        teapotVertexPositionBufferQ.itemSize = 3;
        teapotVertexPositionBufferQ.numItems = hexData.vertexPositions.length / 3;

        teapotVertexIndexBufferQ = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, teapotVertexIndexBufferQ);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(hexData.indices), gl.STATIC_DRAW);
        teapotVertexIndexBufferQ.itemSize = 1;
        teapotVertexIndexBufferQ.numItems = hexData.indices.length;

    
    }


    function loadTeapot1() {
        var request = new XMLHttpRequest();
        request.open("GET", "json/b.json");
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                handleLoadedTeapotH(JSON.parse(request.responseText));
            }
        }
        request.send();
    }



function CANAL(TX,TY,TZ,tekstura){


 mvPushMatrix();
	  mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		// NIK=NIK+speedrot;
	// if(NIK>360){NIK=0;}
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TX,transY + TY,transZ +TZ]);
	//	mat4.rotate(mvMatrix,  degToRad(NIK), [0, 1, 0]);
			gl.disable(gl.DEPTH_TEST);
		gl.enable(gl.BLEND);	
			gl.blendFunc(gl.ONE, gl.ONE);
        
		
		
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
       
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.uniform1f(shaderProgram.materialShininessUniform,1);
if(teapotVertexPositionBufferQ){
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexPositionBufferQ);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, teapotVertexPositionBufferQ.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexTextureCoordBufferQ);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, teapotVertexTextureCoordBufferQ.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexNormalBufferQ);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, teapotVertexNormalBufferQ.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, teapotVertexIndexBufferQ);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, teapotVertexIndexBufferQ.numItems, gl.UNSIGNED_SHORT, 0);
}
        mvPopMatrix();
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
}