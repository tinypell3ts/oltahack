import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { applyProps, Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Model from "../models/model";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress}%</Html>;
}

function App() {
  return (
    <div className="h-screen">
      <Canvas>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enablePan={true}
        />
        <Suspense fallback={<Loader />}>
          <Model scale={[2, 2, 2]} />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight color="red" position={[8, 3, 3]} />
      </Canvas>
    </div>
  );
}

export default App;
