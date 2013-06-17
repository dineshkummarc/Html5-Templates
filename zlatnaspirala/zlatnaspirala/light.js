 function red() {
    //    gl.viewport(0, 0, rttFramebuffer.width, rttFramebuffer.height);
    //    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //    mat4.perspective(45, shaderProgram1ScreenAspectRatio, 0.1, 100.0, pMatrix);

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.9, 0.2, 0.2);//
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, 0, 0, -5);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.8, 0.8, 0.8);//

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1f(shaderProgram.materialShininessUniform, 0);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);

     //   mat4.identity(mvMatrix);
		
		}
		 function drunk() {
        gl.viewport(0, 0, rttFramebuffer.width, rttFramebuffer.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        mat4.perspective(45, shaderProgram1ScreenAspectRatio, 0.1, 100.0, pMatrix);

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.9, 0.2, 0.2);//
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, 0, 0, -5);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.8, 0.8, 0.8);//

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1f(shaderProgram.materialShininessUniform, 0);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);

     //   mat4.identity(mvMatrix);
		
		}
		 function green() {
    //    gl.viewport(0, 0, rttFramebuffer.width, rttFramebuffer.height);
    //    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //    mat4.perspective(45, shaderProgram1ScreenAspectRatio, 0.1, 100.0, pMatrix);

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.0, 1.0, 0.2);//
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, 0, 0, -5);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.0, 0.8, 0.0);//

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1f(shaderProgram.materialShininessUniform, 0);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);

     //   mat4.identity(mvMatrix);
		
		}
		
				 function blue() {
    //    gl.viewport(0, 0, rttFramebuffer.width, rttFramebuffer.height);
    //    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //    mat4.perspective(45, shaderProgram1ScreenAspectRatio, 0.1, 100.0, pMatrix);

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.0, 0.0, 0.9);//
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, 0, 0, -5);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.0, 0.0, 0.8);//

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1f(shaderProgram.materialShininessUniform, 0);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);

     //   mat4.identity(mvMatrix);
		
		}
		
		function neutral(){
     gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.2, 0.2, 0.2);//
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, 0, 0, -5);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.8, 0.8, 0.8);//

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1f(shaderProgram.materialShininessUniform, 0);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);
		}
		
		
		
		