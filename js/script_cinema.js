// إعداد هلال ثلاثي الأبعاد باستخدام Three.js
const container = document.getElementById("three-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.pointerEvents = 'none';
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.zIndex = '0';
container.appendChild(renderer.domElement);

// الهلال
const geometry = new THREE.SphereGeometry(0.6, 32, 32);
const material = new THREE.MeshBasicMaterial({color:0xffd700});
const moon = new THREE.Mesh(geometry, material);
scene.add(moon);

camera.position.z = 2.5;
moon.position.set(-3, 2, 0);

function animate(){
    requestAnimationFrame(animate);
    moon.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// ظهور صورة العائلة والرسالة تدريجيًا
window.addEventListener('load', function(){
    setTimeout(()=>{
        const family = document.querySelector(".family");
        const message = document.querySelector(".message");
        if(family) {
            family.style.opacity = 1;
            family.style.transform = "scale(1)";
        }
        if(message) {
            message.style.opacity = 1;
        }
    }, 2000);
});