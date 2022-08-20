import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1661020944189",
  root: "1661020944189",
  nodes: {
    cameras: "1661020944189",
    "cameras/cameraControls1": "1661020944189",
    lights: "1661020944189",
    boxes: "1661020944189",
    "boxes/actor1": "1661020944189",
    "boxes/MAT": "1661020944189",
    "boxes/MAT/meshStandardBuilder1": "1661020944189",
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
