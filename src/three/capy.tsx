import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useWindowSize } from "usehooks-ts";

const Model = () => {
	const gltf = useLoader(
		GLTFLoader,
		"../../capybara_low_poly/scene.gltf",
	);
	const model = gltf.scene;
	const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
	groundGeometry.rotateX(-Math.PI / 2);
	const groundMaterial = new THREE.MeshStandardMaterial({
		color: "black",
		side: THREE.DoubleSide,
	});
	const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
	groundMesh.receiveShadow = true;
	model.add(groundMesh);

	model.traverse(function (node) {
		if (node instanceof THREE.Mesh) {
			node.castShadow = true;
		}
	});

	model.position.set(0, -1, 0);
	return <primitive object={gltf.scene} scale={3.5} />;
};

export default function Capybara() {
	const { width = 0 } = useWindowSize();
	const spotLight = new THREE.SpotLight(0xffffff, 500, 100, 0.5, 0.4);
	spotLight.position.set(0, 5, 0);
	spotLight.castShadow = true;

	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	const camera = new THREE.PerspectiveCamera(
		50,
		window.innerWidth / window.innerHeight,
		0.2,
		30,
	);
	camera.position.set(9, 2, 0);
	scene.add(spotLight);

	return (
		<div className="xl:h-100dvh h-[500px] w-screen xl:fixed">
			<Canvas camera={camera} scene={scene}>
				<Model />
				<OrbitControls
					enableZoom={width >= 1280}
					autoRotate
					minDistance={width < 1280 ? 6 : 0}
					maxDistance={width < 1280 ? 6 : 25}
					maxPolarAngle={Math.PI / 2}
				/>
			</Canvas>
		</div>
	);
}
