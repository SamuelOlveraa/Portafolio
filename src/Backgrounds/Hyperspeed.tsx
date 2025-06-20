import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  BloomEffect,
  SMAAEffect,
} from "postprocessing";

const Hyperspeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationId = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new EffectPass(camera, new BloomEffect({ intensity: 1.6 })));
    composer.addPass(new EffectPass(camera, new SMAAEffect()));

    scene.add(new THREE.AmbientLight(0xffffff, 1));

    // Símbolos y colores neón
    const codeSymbols = ["[", "]", "{", "}", "(", ")", "=", "/", "<", ">", ";"];
    const neonColors = [
      "#00ffff", // neon-blue
      "#39ff14", // neon-green
      "#ff00c8", // neon-pink
      "#9d00ff", // neon-purple
      "#38bdf8", // terminal-glow
    ];

    const group = new THREE.Group();
    scene.add(group);

    const createTextTexture = (text: string, color: string) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 25;
      ctx.font = "bold 140px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      return new THREE.CanvasTexture(canvas);
    };

    const total = 200;
    for (let i = 0; i < total; i++) {
      const symbol = codeSymbols[i % codeSymbols.length];
      const color = neonColors[i % neonColors.length];
      const texture = createTextTexture(symbol, color);

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
      });

      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.5), material);
      mesh.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      mesh.lookAt(camera.position); // Siempre visible
      group.add(mesh);
    }

    const animate = () => {
      animationId.current = requestAnimationFrame(animate);
      group.rotation.y += 0.0008;
      group.rotation.x += 0.0005;
      composer.render();
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const h = containerRef.current.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId.current!);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default Hyperspeed;
