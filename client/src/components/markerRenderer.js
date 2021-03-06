import * as TWEEN from "es6-tween";
import * as THREE from "three";

let scene = new THREE.Scene()
      let camera = new THREE.PerspectiveCamera(
          35, 
          window.innerWidth / window.innerHeight, 
          0.1, 
          4000
          );
          camera.position.z = 25
      
      let renderer = new THREE.WebGLRenderer({
          antialias: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setClearColor(0x000000, 1)

function random(scaleFactor) {
  return Math.random() > 0.5
    ? scaleFactor * Math.random()
    : -scaleFactor * Math.random();
}
const MARKER_COMPANION_COLOR = "#fff9e6";

export default function markerRenderer(marker) {
  const size = Math.max(marker.value / 20, 1);
  const geometry = new THREE.SphereGeometry(size, 10, 10);
  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(marker.color),
  });

  const mesh = new THREE.Mesh(geometry, material);
  const light = new THREE.PointLight(marker.color, 1, 0, 0);
  mesh.children = [];
  mesh.add(light);
  const companions = [];
  for (let i = 0; i < 10; i++) {
    const companionGeometry = new THREE.SphereGeometry(
      Math.min((size * Math.random()) / 2, 1),
      10,
      10
    );
    const companionMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(MARKER_COMPANION_COLOR),
    });
    const companion = new THREE.Mesh(companionGeometry, companionMaterial);
    companion.lookAt(new THREE.Vector3(0, 0, 0));
    companions.push(companion);
    mesh.add(companion);
  }
  companions.forEach((companion, i) => {
    function animate() {
      const from = {
        opacity: 0.1,
        position: companion.position.clone().toArray(),
        scale: Math.max(0.5, Math.random()),
      };
      const to = {
        opacity: 0.5,
        position: [random(size * 3), random(size * 3), random(size)],
        scale: 0.01,
      };
      const tween = new TWEEN.Tween(from)
        .to(to, 4000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .delay(i * 200);
      tween
        .on("update", () => {
          const [x, y, z] = from.position;
          const companionMaterial = companion.material;
          const intensityChange = random(0.05);
          if (
            light.intensity + intensityChange > 0 &&
            light.intensity + intensityChange < 1.5
          ) {
            light.intensity += intensityChange;
          }
          companionMaterial.opacity = from.opacity;
          companion.scale.x = from.scale;
          companion.scale.y = from.scale;
          companion.scale.z = from.scale;
          companion.position.set(x, y, z);
        })
        .on("complete", animate)
        .start();
    }
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    function onMouseMove( event ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, camera );
    const intersects = raycaster.intersectObjects( scene.children );
    for(let i = 0; i < intersects.length; i ++ ) {
        intersects[i].object.material.color.set( "https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg" );
    }
    renderer.render( scene, camera );
    }
    window.addEventListener( 'click', onMouseMove, false )
    animate();
  });
  return mesh;
}
