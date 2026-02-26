import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Clock() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current!;
    const width = 300;
    const height = 300;

    // 场景
    const scene = new THREE.Scene();

    // 相机
    /* PerspectiveCamera( fov, aspect, near, far ) 视角，纵横比，近裁剪面，远裁剪面 */
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 3000);
    camera.position.set(100, 100, 100);
    camera.lookAt(0, 0, 0);

    // 渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    renderer.setClearAlpha(0.0)

    // 创建原点标记
    const pointGeometry = new THREE.SphereGeometry(3, 3, 3);
    const pointMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });

    // 创建 3D 对象
    const geometry = new THREE.SphereGeometry(50, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x32ecfc,
    });
    const point = new THREE.Mesh(pointGeometry, pointMaterial);
    const mesh = new THREE.Mesh(geometry, material);
    point.position.set(0, 0, 0);
    mesh.position.set(0, 0, 0);
    scene.add(point);
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(150);
    scene.add(axesHelper);

    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(-50, 100, 100);
    pointLight.intensity = 1.0;

    function animation() {
      renderer.render(scene, camera);
      mesh.rotateX(0.01);
      mesh.rotateY(0.01);
      mesh.rotateZ(0.01);
      requestAnimationFrame(animation);
    }

    animation();

    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
      ref={mountRef}
    />
  );
}
