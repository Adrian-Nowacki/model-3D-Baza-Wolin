
var scene, camera, renderer;

      

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);

        camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
       camera.position.set(0,100,1000);
        /* camera.rotation.y = 45/180*Math.PI;
        camera.position.x = 800;
        camera.position.y = 100;
        camera.position.z = 1000;*/

      
/*
        hlight = new THREE.AmbientLight (0x404040,100);
        scene.add(hlight);

        directionalLight = new THREE.DirectionalLight(0xffffff,100);
        directionalLight.position.set(0,1,0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        light = new THREE.PointLight(0xc4c4c4,10);
        light.position.set(0,300,500);
        scene.add(light);
        light2 = new THREE.PointLight(0xc4c4c4,10);
        light2.position.set(500,100,0);
        scene.add(light2);
        light3 = new THREE.PointLight(0xc4c4c4,10);
        light3.position.set(0,100,-500);
        scene.add(light3);
        light4 = new THREE.PointLight(0xc4c4c4,10);
        light4.position.set(-500,300,500);
        scene.add(light4);({antialias:true});}
*/
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

        
        /*
        window.addEventListener('resize',function(){
          renderer.setSize(window.innerWidth,window.innerHeight);
          camera.aspect=window.innerWidth/window.innerHeight;
        })*/
        
        var controls = new THREE.OrbitControls(camera, renderer);
        controls.update();

        var abint = new THREE.AmbientLight(0x555500)
        scene.add(abint)

        let loader = new THREE.GLTFLoader();
        loader.load('scene.gltf', function(gltf){
          scene.add(gltf.scene);
        });
      
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
        
      }
      animate();