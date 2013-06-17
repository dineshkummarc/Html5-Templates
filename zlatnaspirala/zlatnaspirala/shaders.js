
    var shaderProgram1;

    function initShaders1() {
        var fragmentShader1 = getShader(gl, "per-fragment-lighting-fs");
        var vertexShader1 = getShader(gl, "per-fragment-lighting-vs");

        shaderProgram1 = gl.createProgram();
        gl.attachShader(shaderProgram1, vertexShader1);
        gl.attachShader(shaderProgram1, fragmentShader1);
        gl.linkProgram(shaderProgram1);

        if (!gl.getProgramParameter(shaderProgram1, gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }

        gl.useProgram(shaderProgram1);

        shaderProgram1.vertexPositionAttribute = gl.getAttribLocation(shaderProgram1, "aVertexPosition");
        gl.enableVertexAttribArray(shaderProgram1.vertexPositionAttribute);

        shaderProgram1.vertexNormalAttribute = gl.getAttribLocation(shaderProgram1, "aVertexNormal");
        gl.enableVertexAttribArray(shaderProgram1.vertexNormalAttribute);

        shaderProgram1.textureCoordAttribute = gl.getAttribLocation(shaderProgram1, "aTextureCoord");
        gl.enableVertexAttribArray(shaderProgram1.textureCoordAttribute);

        shaderProgram1.pMatrixUniform = gl.getUniformLocation(shaderProgram1, "uPMatrix");
        shaderProgram1.mvMatrixUniform = gl.getUniformLocation(shaderProgram1, "uMVMatrix");
        shaderProgram1.nMatrixUniform = gl.getUniformLocation(shaderProgram1, "uNMatrix");
        shaderProgram1.samplerUniform = gl.getUniformLocation(shaderProgram1, "uSampler");

        shaderProgram1.materialAmbientColorUniform = gl.getUniformLocation(shaderProgram1, "uMaterialAmbientColor");
        shaderProgram1.materialDiffuseColorUniform = gl.getUniformLocation(shaderProgram1, "uMaterialDiffuseColor");
        shaderProgram1.materialSpecularColorUniform = gl.getUniformLocation(shaderProgram1, "uMaterialSpecularColor");
        shaderProgram1.materialShininessUniform = gl.getUniformLocation(shaderProgram1, "uMaterialShininess");
        shaderProgram1.materialEmissiveColorUniform = gl.getUniformLocation(shaderProgram1, "uMaterialEmissiveColor");
        shaderProgram1.showSpecularHighlightsUniform = gl.getUniformLocation(shaderProgram1, "uShowSpecularHighlights");
        shaderProgram1.useTexturesUniform = gl.getUniformLocation(shaderProgram1, "uUseTextures");
        shaderProgram1.ambientLightingColorUniform = gl.getUniformLocation(shaderProgram1, "uAmbientLightingColor");
        shaderProgram1.pointLightingLocationUniform = gl.getUniformLocation(shaderProgram1, "uPointLightingLocation");
        shaderProgram1.pointLightingSpecularColorUniform = gl.getUniformLocation(shaderProgram1, "uPointLightingSpecularColor");
        shaderProgram1.pointLightingDiffuseColorUniform = gl.getUniformLocation(shaderProgram1, "uPointLightingDiffuseColor");
    }
