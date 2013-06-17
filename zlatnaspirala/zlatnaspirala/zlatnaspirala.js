
function BLOCK(TX,TY,TZ,tekstura){
mvPushMatrix();// POD
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TX,transY + TY,transZ +TZ]);
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferPOD1);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferPOD1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferPOD1);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferPOD1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferPOD1);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferPOD1.itemSize, gl.FLOAT, false, 0, 0);


	
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferPOD1);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferPOD1.numItems, gl.UNSIGNED_SHORT, 0);
		
mvPopMatrix();}
function PENJLEVI(TXL,TYL,TZL){
mvPushMatrix();// POD5  
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX + TXL, transY +TYL,transZ +TZL]);
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferPENJLEVI);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferPENJLEVI.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferPENJLEVI);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferPENJLEVI.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferPENJLEVI);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferPENJLEVI.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, TexturePOD1);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferPENJLEVI);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferPENJLEVI.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();
}
function XWALL(TXL,TYL,TZL,tekstura){
mvPushMatrix();// ZID1 POCETAK
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX + TXL,transY+ TYL,transZ+ TZL]);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferZID1);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferZID1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferZID1);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferZID1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferZID1);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferZID1.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferZID1);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferZID1.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}
function ZWALL(TXL,TYL,TZL,tekstura){
mvPushMatrix();// ZID1 POCETAK
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX + TXL,transY+ TYL,transZ+ TZL]);
		
		mat4.rotate(mvMatrix,  degToRad(90), [0, 1, 0]);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferZID1);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferZID1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferZID1);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferZID1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferZID1);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferZID1.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferZID1);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferZID1.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}
function PILEY(TXL,TYL,TZL,tekstura){
mvPushMatrix();// STUBB POCETAK
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX + TXL,transY+ TYL,transZ+ TZL]);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSTUBB);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSTUBB.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}

function PILEX(TXL,TYL,TZL,tekstura){
mvPushMatrix();// STUBB POCETAK
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX + TXL,transY+ TYL,transZ+ TZL]);
		
		mat4.rotate(mvMatrix, degToRad(90), [0, 0, 1]);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSTUBB);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSTUBB.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}

function PILEZ(TXL,TYL,TZL,tekstura){
mvPushMatrix();// STUBB POCETAK
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX + TXL,transY+ TYL,transZ+ TZL]);
		
		 mat4.rotate(mvMatrix, degToRad(90), [1, 0, 0]);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSTUBB);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSTUBB.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSTUBB);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSTUBB.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}

function BLADEGREEN(TXL,TYL,TZL,tekstura){
mvPushMatrix();
     mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TXL, transY +TYL,transZ+TZL]);
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();
}
/*function BLADEMID(TXL,TYL,TZL,tekstura){
mvPushMatrix();
     mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TXL, transY +TYL,transZ+TZL]);
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, SILJAKMVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, SILJAKMVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, SILJAKMVertexNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, SILJAKMVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, SILJAKMVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, SILJAKMVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, SILJAKMVertexIndexBuffer);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, SILJAKMVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();
}*/

function BLADEROTATE(TXL,TYL,TZL,tekstura,speedrot){//auto rotate blade
mvPushMatrix();
     mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
	 NIK=NIK+speedrot;
	 if(NIK>360){NIK=0;}
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL , transY +TYL ,transZ+TZL]);
		mat4.rotate(mvMatrix,  degToRad(NIK), [0, 1, 0]);
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSILJAK);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSILJAK.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();
}
function DEADFLOOR(TXL,TYL,TZL,tekstura){//auto rotate blade
mvPushMatrix();
     mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
	// NIK=NIK+1;
	// if(NIK>30){NIK=0;}
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL , transY +TYL ,transZ+TZL]);
		
		
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSILJAK1);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSILJAK1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSILJAK1);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferSILJAK1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSILJAK1);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSILJAK1.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSILJAK1);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSILJAK1.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();
}

function DEADBLADE(TXL,TYL,TZL,tekstura){//auto rotate blade
mvPushMatrix();
     mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
	 if(nik001==0){NIK=NIK+0.002;if(NIK>1){nik001=1;}}else{NIK=NIK-0.002;if(NIK<0){nik001=0;}}
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL , transY +TYL+NIK ,transZ+TZL]);
		
		
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSILJAK);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSILJAK.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();
}
function BLADEROTATEDEGX(TXL,TYL,TZL,tekstura,DEGG){//auto rotate blade
mvPushMatrix();
     mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
	 NIK=NIK+1;
	 if(NIK>360){NIK=0;}
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL , transY +TYL ,transZ+TZL]);
		mat4.rotate(mvMatrix,  degToRad(NIK), [0, 1, 0]);
		mat4.rotate(mvMatrix,  degToRad(DEGG), [1, 0, 0]);
		
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSILJAK);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSILJAK.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSILJAK);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSILJAK.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();
}

function MOON(TXL,TYL,TZL){mvPushMatrix();///LOPTA
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX + TXL ,transY + TYL,transZ +TZL]);

		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		
		gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, moonTexture);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, moonVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, moonVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, moonVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, moonVertexIndexBuffer);
        setMatrixUniforms();
		
        gl.drawElements(gl.TRIANGLES, moonVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
	
mvPopMatrix();}

function SKY(TXL,TYL,TZL,tekstura){
mvPushMatrix();//
    mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL,transY +TYL  ,transZ +TZL]);
		 
	 	gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSKY);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSKY.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSKY);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSKY.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSKY);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSKY.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}
function BANERPOZ(TXL,TYL,TZL,tekstura){
mvPushMatrix();// Bocni1 POCETAK
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX+TXL,transY +TYL,transZ +TZL ]);
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferBOCNI1);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferBOCNI1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferBOCNI1);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferBOCNI1.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferBOCNI1);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferBOCNI1.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D,tekstura );
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferBOCNI1);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferBOCNI1.numItems, gl.UNSIGNED_SHORT, 0);
		
mvPopMatrix();
}

function NEBODESNO(TXL,TYL,TZL,tekstura){
mvPushMatrix();//
    mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL,transY +TYL  ,transZ +TZL]);
		 
	 	gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferNEBODESNO);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferNEBODESNO.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferNEBODESNO);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferNEBODESNO.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferNEBODESNO);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferNEBODESNO.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}

function banertabla(TX,TY,TZ,tekstura){
mvPushMatrix();// PODPENJ2
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TX,transY + TY,transZ +TZ]);
		
		gl.disable(gl.BLEND);
      gl.enable(gl.DEPTH_TEST);
        
		//gl.disable(gl.DEPTH_TEST);
      //  gl.enable(gl.BLEND);
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferBT);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferBT.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferBT);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferBT.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferBT);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferBT.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferBT);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferBT.numItems, gl.UNSIGNED_SHORT, 0);
		
mvPopMatrix();}

function SKY(TX,TY,TZ,tekstura){
mvPushMatrix();// PODPENJ2
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TX,transY + TY,transZ +TZ]);
		
		gl.disable(gl.BLEND);
      gl.enable(gl.DEPTH_TEST);
        
		//gl.disable(gl.DEPTH_TEST);
      //  gl.enable(gl.BLEND);
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferSKY);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferSKY.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferSKY);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferSKY.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferSKY);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferSKY.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferSKY);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferSKY.numItems, gl.UNSIGNED_SHORT, 0);
		
mvPopMatrix();}

function HOLDERY(TXL,TYL,TZL,tekstura){
mvPushMatrix();//
    mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL,transY +TYL  ,transZ +TZL]);
		 
	 	gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferREKLAMA);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferREKLAMA.itemSize, gl.FLOAT, false, 0, 0);

		
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferREKLAMA);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferREKLAMA.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferREKLAMA);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferREKLAMA.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}





function CUBE(TXL,TYL,TZL,tekstura){
mvPushMatrix();//
    mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL,transY +TYL  ,transZ +TZL]);
		 
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		//gl.disable(gl.DEPTH_TEST);
        //gl.enable(gl.BLEND);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferKLASIK);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferKLASIK.itemSize, gl.FLOAT, false, 0, 0);

		
		
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferKLASIK);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferKLASIK.itemSize, gl.FLOAT, false, 0, 0);

		
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferKLASIK);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferKLASIK.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferKLASIK);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferKLASIK.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}


function HOLDERX(TXL,TYL,TZL,tekstura){
mvPushMatrix();//
    mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL,transY +TYL  ,transZ +TZL]);
	
			mat4.rotate(mvMatrix, degToRad(180), [1, 0, 0]);
	
	 	gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferREKLAMA);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferREKLAMA.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferREKLAMA);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferREKLAMA.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferREKLAMA);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferREKLAMA.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}


function HOLDERLEFT(TXL,TYL,TZL,tekstura){
mvPushMatrix();//
    mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL,transY +TYL  ,transZ +TZL]);
	
			mat4.rotate(mvMatrix, degToRad(90), [0, 0, 1]);
	
	 	gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferREKLAMA);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferREKLAMA.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferREKLAMA);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferREKLAMA.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferREKLAMA);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferREKLAMA.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}


function HOLDERRIGHT(TXL,TYL,TZL,tekstura){
mvPushMatrix();//
    mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		
		mat4.translate(mvMatrix, [transX +TXL,transY +TYL  ,transZ +TZL]);
	
			mat4.rotate(mvMatrix, degToRad(270), [0, 0, 1]);
			mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
			
	 	gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferREKLAMA);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferREKLAMA.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferREKLAMA);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferREKLAMA.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tekstura);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferREKLAMA);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferREKLAMA.numItems, gl.UNSIGNED_SHORT, 0);
mvPopMatrix();}


