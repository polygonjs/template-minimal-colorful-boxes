import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1660603946702",
  root: "1660603946702",
  nodes: {
    cameras: "1660603946702",
    "cameras/cameraControls1": "1660603946702",
    lights: "1660603946702",
    boxes: "1660603946702",
    "boxes/actor1": "1660603946702",
    "boxes/MAT": "1660603946702",
    "boxes/MAT/meshStandardBuilder1": "1660603946702",
  },
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
