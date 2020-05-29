import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import modelStyle from './ModelRenderer.module.scss';
import { handleIO } from '../customfunctions/handleIO';

const ModelRender = (props) => {
	let modelerRef = useRef();

	const modelRef = useRef();

	const [initial, addToScene] = useState({
		scene: {},
		camera: {},
		model: {},
		renderer: {},
		controls: {},
	});

	const { scene, camera, model, renderer, controls } = initial;

	const sceneSetup = () => {
		if (modelerRef) {
			const width = modelerRef.clientWidth;
			const height = modelerRef.clientHeight;

			let newScene = new THREE.Scene();

			let newCamera = new THREE.PerspectiveCamera(
				75, //Field of view
				width / height,
				0.01,
				1000
			);

			let newControls = new OrbitControls(newCamera, modelerRef);
			newCamera.position.z = 1;
			newCamera.position.y = 0;
			newCamera.position.x = 0;

			let newRenderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true,
			});
			newRenderer.setSize(width, height);
			modelerRef.appendChild(newRenderer.domElement);

			addToScene((prev) => ({
				...prev,
				scene: newScene,
				camera: newCamera,
				renderer: newRenderer,
				controls: newControls,
			}));
		}
	};

	const addCustomSceneObject = () => {
		const geometry = new THREE.BoxGeometry(2, 2, 2);
		const material = new THREE.MeshPhongMaterial({
			color: 0x156289,
			emissive: 0x072534,
			side: THREE.DoubleSide,
			flatShading: true,
		});
		const loader = new GLTFLoader();
		loader.load(
			'models/gun-prototype.glb',
			function (gltf) {
				addToScene((prev) => ({
					...prev,
					model: gltf.scene,
					scene: prev.scene.add(gltf.scene),
				}));
			},
			undefined,
			function (error) {
				console.error(error);
			}
		);

		let newCube = new THREE.Mesh(geometry, material);

		const lights = [];
		lights[0] = new THREE.PointLight(0x41057e, 5);
		lights[1] = new THREE.PointLight(0x4169e1, 10);
		lights[2] = new THREE.PointLight(0x4169e1, 10);

		lights[0].position.set(0, 10, 0);
		lights[1].position.set(10, 10, 10);
		lights[2].position.set(-10, -10, -10);

		addToScene((prev) => ({
			...prev,
			model: newCube,
			scene: prev.scene.add(...lights),
		}));
	};

	useEffect(() => {
		const startAnimationLoop = () => {
			if (renderer.render) {
				model.rotation.x -= 0.001;
				model.rotation.y += 0.001;
				renderer.render(scene, camera);
			}
			window.requestAnimationFrame(startAnimationLoop);
		};
		startAnimationLoop();
	}, [renderer, camera, scene, model]);

	useEffect(() => {
		sceneSetup();
		addCustomSceneObject();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (modelerRef) {
				const width = modelerRef.clientWidth;
				const height = modelerRef.clientHeight;

				renderer.setSize(width, height);
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
				console.log(modelerRef);
			}
		};
		window.addEventListener('resize', handleResize);
		window.addEventListener('onload', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [modelerRef, camera, renderer]);

	const [intersecting, setIntersecting] = useState(false);

	useEffect(() => {
		handleIO(modelRef, 0, 0, setIntersecting);
	}, [modelRef, setIntersecting]);

	return (
		<section
			className={intersecting ? modelStyle.canvas : `${modelStyle.canvas} ${modelStyle.out_of_view}`}
			ref={modelRef}
		>
			<div className={intersecting ? modelStyle.heading : modelStyle.out_of_view}>
				<h2>3D Modeling</h2>
				<p>Scifi gun game asset prototype.</p>
				<p>Use your cursor or fingers to move the scene around!</p>
			</div>
			<div className={modelStyle.model_container} ref={(ref) => (modelerRef = ref)}></div>
		</section>
	);
};

ModelRender.propTypes = {};

export default ModelRender;
