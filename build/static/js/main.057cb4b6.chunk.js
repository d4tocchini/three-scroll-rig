(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{28:function(e,t,o){e.exports=o(38)},37:function(e,t,o){},38:function(e,t,o){"use strict";o.r(t);var r=o(13),a=o.n(r),n=o(0),i=o.n(n),c=o(3),s=o(1),l=o(7),f=o.n(l),u=o(12),m=o(17),h=o.n(m),d={sections:9,pages:8,zoom:75,colors:{clear:[253,227,226]},stripes:[{offset:0,color:"#4ad7d7",height:13},{offset:6.3,color:"#574a97",height:20}],paragraphs:[{offset:1,factor:1.75,header:"District 4",image:"./photo-1515036551567-bf1198cccc35.jpeg",aspect:1.51,text:"Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."},{offset:2,factor:2,header:"Diamond Road",image:"./photo-1519608487953-e999c86e7455.jpeg",aspect:1.5,text:"The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."},{offset:3,factor:2.25,header:"Catalina",image:"./ph1.jpg",aspect:1.5037,text:"The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from \u2014 back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."},{offset:4,factor:2,header:"Building 21",image:"./ph3.jpg",aspect:.665,text:"We\u2019ve found that the people whose EEG doesn\u2019t show any alpha-wave activity when they\u2019re relaxed aren\u2019t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."},{offset:5,factor:1.75,header:"Sector 8",image:"./photo-1533577116850-9cc66cad8a9b.jpeg",aspect:1.55,text:"By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won\u2019t be compelled by one\u2019s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."},{offset:7,factor:1.05,header:"The Factory",image:"./photo-1548191265-cc70d3d45ba1.jpeg",aspect:1.77,text:"Education and enlightenment."}],diamonds:[{x:0,offset:.15,pos:new s.Vector3,scale:.6,factor:1.8},{x:2,offset:1.1,pos:new s.Vector3,scale:.8,factor:2.1},{x:-5,offset:2,pos:new s.Vector3,scale:.8,factor:2.5},{x:0,offset:3.2,pos:new s.Vector3,scale:.8,factor:1.75},{x:0,offset:4,pos:new s.Vector3,scale:.8,factor:2.5},{x:2,offset:5.5,pos:new s.Vector3,scale:1.25,factor:.85},{x:-5,offset:7,pos:new s.Vector3,scale:.8,factor:2},{x:0,offset:8,pos:new s.Vector3,scale:1.5,factor:6}],top:Object(n.createRef)()};function p(e){var t=e.children,o=e.size,r=void 0===o?1:o,a=e.left,l=e.right,m=e.top,p=e.bottom,v=e.color,g=void 0===v?"white":v,b=e.opacity,y=void 0===b?1:b,x=e.height,w=void 0===x?.01:x,j=(e.layers,e.font),O=void 0===j?"./MOONGET_Heavy.blob":j,E=Object(u.a)(e,["children","size","left","right","top","bottom","color","opacity","height","layers","font"]),M=Object(c.e)(s.FontLoader,O),k=h()((function(){return new Promise((function(e){return e(new s.TextBufferGeometry(t,{font:M,size:1,height:w,curveSegments:32}))}))}),[t]),z=Object(n.useCallback)((function(e){var t=new s.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=a?0:l?-t.x:-t.x/2,e.position.y=m?0:p?-t.y:-t.y/2}),[a,l,m,p]),N=Object(n.useRef)(),D=d.top.current;return Object(c.d)((function(){N.current.shift=f()(N.current.shift,(d.top.current-D)/100,.1),D=d.top.current})),i.a.createElement("group",Object.assign({},E,{scale:[r,r,.1]}),i.a.createElement("mesh",{geometry:k,onUpdate:z,frustumCulled:!1},i.a.createElement("customMaterial",{ref:N,attach:"material",color:g,transparent:!0,opacity:y})))}var v=function(e){var t=e.text,o=e.size,r=void 0===o?1:o,a=e.lineHeight,n=void 0===a?1:a,c=e.position,s=void 0===c?[0,0,0]:c,l=Object(u.a)(e,["text","size","lineHeight","position"]);return t.split("\n").map((function(e,t){return i.a.createElement(p,Object.assign({key:t,size:r},l,{position:[s[0],s[1]-t*n,s[2]],children:e}))}))},g=o(4),b=o(26),y=o(6),x=o(10),w=o(8),j=o(9),O=function(e){function t(){return Object(y.a)(this,t),Object(x.a)(this,Object(w.a)(t).call(this,{vertexShader:"\n      varying vec3 worldNormal;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"\n      varying vec3 worldNormal;\n      void main() {\n        gl_FragColor = vec4(worldNormal, 1.0);\n      }",side:s.BackSide}))}return Object(j.a)(t,e),t}(s.ShaderMaterial),E=function(e){function t(e){return Object(y.a)(this,t),Object(x.a)(this,Object(w.a)(t).call(this,{vertexShader:"varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"\n      uniform sampler2D envMap;\n      uniform sampler2D backfaceMap;\n      uniform vec2 resolution;\n      varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {\n        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);\n      }\n      void main() {\n        vec2 uv = gl_FragCoord.xy / resolution;\n        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;\n        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/1.5).xy);\n        //gl_FragColor = vec4(mix(color.rgb, vec3(0.15), fresnelFunc(viewDirection, normal)), 1.0);\n        gl_FragColor = vec4( mix(\n          color.rgb,\n          vec3(0.8), // edge color brightness\n          fresnelFunc(viewDirection, normal)), 1.0);\n      }",uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution}}}))}return Object(j.a)(t,e),t}(s.ShaderMaterial),M=Object(n.createContext)(0);function k(e){var t=e.children,o=e.offset,r=e.factor,a=Object(u.a)(e,["children","offset","factor"]),s=z(),l=s.offset,m=s.sectionHeight,h=Object(n.useRef)();return o=void 0!==o?o:l,Object(c.d)((function(){var e=h.current.position.y,t=d.top.current;h.current.position.y=f()(e,t/d.zoom*r,.1)})),i.a.createElement(M.Provider,{value:o},i.a.createElement("group",Object.assign({},a,{position:[0,-m*o*r,0]}),i.a.createElement("group",{ref:h},t)))}function z(){var e=d.sections,t=d.pages,o=d.zoom,r=Object(c.f)(),a=r.size,i=r.viewport,s=Object(n.useContext)(M),l=i.width,f=i.height,u=l/o,m=f/o,h=a.width<700;return{viewport:i,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:u,canvasHeight:m,mobile:h,margin:u*(h?.2:.1),contentMaxWidth:u*(h?.8:.6),sectionHeight:m*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var N=new s.Object3D;function D(){var e=Object(c.e)(b.a,"./piggy_bank/scene.gltf");Object(n.useMemo)((function(){e.scene.traverse((function(e){e.geometry&&e.geometry.center()}))}),[]);var t=Object(c.f)(),o=t.size,r=t.gl,a=t.scene,l=t.camera,u=t.clock,m=z(),h=m.contentMaxWidth,p=m.sectionHeight,v=m.mobile,y=Object(n.useRef)(),x=r.getPixelRatio(),w=Object(n.useMemo)((function(){var e=new s.WebGLRenderTarget(o.width*x,o.height*x),t=new s.WebGLRenderTarget(o.width*x,o.height*x);return[e,t,new O,new E({envMap:e.texture,backfaceMap:t.texture,resolution:[o.width*x,o.height*x]})]}),[o,x]),j=Object(g.a)(w,4),M=j[0],k=j[1],D=j[2],T=j[3];return Object(c.d)((function(){a.background=new s.Color("#fae0e1"),function(){var e=u.getElapsedTime()/2,t=0,o=d.diamonds.length;for(;t<o;){var r=d.diamonds[t],a=r.x,n=r.offset,i=r.scale,c=r.factor,s=h/35*i*8;r.pos.set(v?0:a,f()(r.pos.y,-p*n*c+d.top.current/d.zoom*c,.1),0),N.position.copy(r.pos);var l=e*(t===o-1^1),m=e;N.rotation.set(l,m,l),N.scale.set(s,s,s),N.updateMatrix(),y.current.setMatrixAt(t,N.matrix),y.current.instanceMatrix.needsUpdate=!0,++t}}(),r.autoClear=!1,l.layers.set(0),r.setRenderTarget(M),r.clearColor(),r.render(a,l),r.clearDepth(),l.layers.set(1),y.current.material=D,r.setRenderTarget(k),r.clearDepth(),r.render(a,l),l.layers.set(0),r.setRenderTarget(null),r.render(a,l),r.clearDepth(),a.background=null,l.layers.set(1),y.current.material=T,r.render(a,l)}),1),console.log(e),i.a.createElement("instancedMesh",{ref:y,layers:1,args:[null,null,d.diamonds.length],position:[0,0,50]},i.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[6].geometry)))}var T=o(27),C=function(e){function t(){return Object(y.a)(this,t),Object(x.a)(this,Object(w.a)(t).call(this,{vertexShader:"      \n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 1.5) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"\n      uniform sampler2D texture;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(texture, p + offset);\n        vec4 cga = texture2D(texture, p);\n        vec4 cb = texture2D(texture, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{texture:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new s.Color("white")}}}))}return Object(j.a)(t,e),Object(T.a)(t,[{key:"scale",set:function(e){this.uniforms.scale.value=e},get:function(){return this.uniforms.scale.value}},{key:"shift",set:function(e){this.uniforms.shift.value=e},get:function(){return this.uniforms.shift.value}},{key:"map",set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.texture.value=e},get:function(){return this.uniforms.texture.value}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),t}(s.ShaderMaterial);Object(c.c)({CustomMaterial:C});var S=Object(n.forwardRef)((function(e,t){var o=e.color,r=void 0===o?"white":o,a=e.shift,s=void 0===a?1:a,l=e.opacity,m=void 0===l?1:l,h=e.args,p=e.map,v=Object(u.a)(e,["color","shift","opacity","args","map"]),g=z(),b=g.viewportHeight,y=g.offsetFactor,x=Object(n.useRef)(),w=d.top.current;return Object(c.d)((function(){var e=d.pages,t=d.top;x.current.scale=f()(x.current.scale,y-t.current/((e-1)*b),.1),x.current.shift=f()(x.current.shift,(t.current-w)/s,.1),w=t.current})),i.a.createElement("mesh",Object.assign({ref:t},v),i.a.createElement("planeBufferGeometry",{attach:"geometry",args:h}),i.a.createElement("customMaterial",{ref:x,attach:"material",color:r,map:p,transparent:!0,opacity:m}))}));o(37);function F(){var e=Object(n.useRef)();return Object(c.d)((function(){e.current.material.opacity=f()(e.current.material.opacity,0,.025)})),i.a.createElement(S,{ref:e,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function R(e){var t=e.image,o=e.index,r=e.offset,a=e.factor,n=e.header,s=e.aspect,l=e.text,f=z(),u=f.contentMaxWidth,m=f.canvasWidth,h=f.margin,v=f.mobile,g=s<1&&!v?.65:1,b=m-u*g-h>>1,y=u*d.zoom*g,x=1&o,w=1^x,j=x?"#D40749":"#2FE8C3",O=u*g,E=O>>1;return i.a.createElement(k,{factor:a,offset:r},i.a.createElement("group",{position:[w?-b:b,0,0]},i.a.createElement(S,{map:t,args:[1,1,32,32],shift:75,size:g,aspect:s,scale:[O,O/s,1],frustumCulled:!1}),i.a.createElement(c.b,{style:{width:y/(v?1:2),textAlign:w?"left":"right"},position:[w||v?-E:0,-E/s-.4,1]},i.a.createElement("div",{tabIndex:o},l)),i.a.createElement(p,{left:w,right:!w,size:.04*u,color:j,top:!0,position:[w?-E:E,E/s+.5,-1]},n),i.a.createElement(k,{factor:.2},i.a.createElement(p,{opacity:.5,size:.1*u,color:"#1A1E2A",position:[((w?u:-u)>>1)*g,O/s/1.5,-10]},"0"+(o+1)))))}function P(){var e=function(e){for(var t=[],o=e.length,r=0;r<o;)t.push(e[r++].image);return t}(d.paragraphs),t=Object(c.e)(s.TextureLoader,e);Object(n.useMemo)((function(){for(var e=t.length,o=0;o<e;)t[o++].minFilter=s.LinearFilter}),[t]);var o=z(),r=o.contentMaxWidth,a=o.canvasWidth,l=o.canvasHeight,f=o.mobile;return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{factor:1,offset:0},i.a.createElement(k,{factor:1.2},i.a.createElement(p,{left:!0,size:.08*r,position:[-r/3.2,.5,-1],color:"#d40749"},"HELLO WORLD")),i.a.createElement(k,{factor:1},i.a.createElement(c.b,{position:[-r/3.2,.08*-r+.25,-1]},"It was the year 2076.",f?i.a.createElement("br",null):" ","The substance had arrived."))),i.a.createElement(k,{factor:1.2,offset:5.7},i.a.createElement(v,{top:!0,left:!0,size:.15*r,lineHeight:r/5,position:[-r/3.5,0,-1],color:"#2fe8c3",text:"four\nzero\nzero"})),d.paragraphs.map((function(e,o){return i.a.createElement(R,Object.assign({key:o,index:o},e,{image:t[o]}))})),d.stripes.map((function(e,t){var o=e.offset,r=e.color,a=e.height;return i.a.createElement(k,{key:t,factor:-1.5,offset:o},i.a.createElement(S,{args:[50,a,32,32],shift:-4,color:r,rotation:[0,0,Math.PI/8],position:[0,0,-10]}))})),i.a.createElement(k,{factor:1.25,offset:8},i.a.createElement(c.b,{className:"bottom-left",position:[-a/2,-l/2,0]},"Culture is not your friend.")))}var _={zoom:d.zoom,position:[0,0,500]};a.a.render(i.a.createElement((function(){console.log("App...");var e=Object(n.useRef)(),t=function(e){var t=e.target;requestAnimationFrame((function(){d.top.current=t.scrollTop}))};return Object(n.useEffect)((function(){t({target:e.current})}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{className:"canvas",concurrent:!0,pixelRatio:1,orthographic:!0,camera:_},i.a.createElement(n.Suspense,{fallback:i.a.createElement(c.b,{center:!0,className:"loading",children:"Loading..."})},i.a.createElement(D,null),i.a.createElement(P,null),i.a.createElement(F,null))),i.a.createElement("div",{className:"scrollArea",ref:e,onScroll:t},new Array(d.sections).fill().map((function(e,t){return i.a.createElement("div",{key:t,id:"0"+t,style:{height:"".concat(d.pages/d.sections*100,"vh")}})}))))}),null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.057cb4b6.chunk.js.map