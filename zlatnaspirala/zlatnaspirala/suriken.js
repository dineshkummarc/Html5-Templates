   function handleLoadedTeapotHH(surikenData) {
        teapotVertexNormalBufferQQ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexNormalBufferQQ);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(surikenData.vertexNormals), gl.STATIC_DRAW);
        teapotVertexNormalBufferQQ.itemSize = 3;
        teapotVertexNormalBufferQQ.numItems = surikenData.vertexNormals.length / 3;

        teapotVertexTextureCoordBufferQQ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexTextureCoordBufferQQ);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(surikenData.vertexTextureCoords), gl.STATIC_DRAW);
        teapotVertexTextureCoordBufferQQ.itemSize = 2;
        teapotVertexTextureCoordBufferQQ.numItems = surikenData.vertexTextureCoords.length / 2;

        teapotVertexPositionBufferQQ = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexPositionBufferQQ);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(surikenData.vertexPositions), gl.STATIC_DRAW);
        teapotVertexPositionBufferQQ.itemSize = 3;
        teapotVertexPositionBufferQQ.numItems = surikenData.vertexPositions.length / 3;

        teapotVertexIndexBufferQQ = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, teapotVertexIndexBufferQQ);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(surikenData.indices), gl.STATIC_DRAW);
        teapotVertexIndexBufferQQ.itemSize = 1;
        teapotVertexIndexBufferQQ.numItems = surikenData.indices.length;

    
    }


    function loadTeapot1() {
        var request = new XMLHttpRequest();
        request.open("GET", "json/suriken.json");
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                handleLoadedTeapotHH(JSON.parse(request.responseText));
            }
        }
        request.send();
    }



function SURIKEN(TX,TY,TZ,tekstura){


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
//	gl.disable(gl.DEPTH_TEST);
	//	gl.enable(gl.BLEND);	
		//gl.disable(gl.BLEND);
        //gl.enable(gl.DEPTH_TEST);
		gl.blendFunc(gl.ONE, gl.ONE);
        
		
		
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
       
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.uniform1f(shaderProgram.materialShininessUniform,1);
if(teapotVertexPositionBufferQQ){
        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexPositionBufferQQ);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, teapotVertexPositionBufferQQ.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexTextureCoordBufferQQ);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, teapotVertexTextureCoordBufferQQ.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, teapotVertexNormalBufferQQ);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, teapotVertexNormalBufferQQ.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, teapotVertexIndexBufferQQ);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, teapotVertexIndexBufferQQ.numItems, gl.UNSIGNED_SHORT, 0);
}
        mvPopMatrix();
		
}