function LAPTOP(TX,TY,TZ)
{
 mvPushMatrix();
		
		mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TX,transY +1.5+TY,transZ +10+TY]);
		
		  mat4.rotate(mvMatrix,degToRad(180), [0, 1, 0]);
		  mat4.rotate(mvMatrix,degToRad(270), [1, 0, 0]);

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, true);
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, -1, 2, -1);

        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.2, 0.2, 0.2);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.8, 0.8, 0.8);
        gl.uniform3f(shaderProgram.pointLightingSpecularColorUniform, 0.8, 0.8, 0.8);

        // The laptop body is quite shiny and has no texture.  It reflects lots of specular light
        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 1.5, 1.5, 1.5);
        gl.uniform1f(shaderProgram.materialShininessUniform, 5);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1i(shaderProgram.useTexturesUniform, false);

        if (laptopVertexPositionBuffer) {
            gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, laptopVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexTextureCoordBuffer);
            gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, laptopVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexNormalBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, laptopVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, laptopVertexIndexBuffer);
            setMatrixUniforms();
            gl.drawElements(gl.TRIANGLES, laptopVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        }

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 0.0, 0.0, 0.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 0.0, 0.0, 0.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.5, 0.5, 0.5);
        gl.uniform1f(shaderProgram.materialShininessUniform, 20);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 1.5, 1.5, 1.5);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, laptopScreenVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, laptopScreenVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, laptopScreenVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, rttTexture);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, laptopScreenVertexPositionBuffer.numItems);

        mvPopMatrix();

}