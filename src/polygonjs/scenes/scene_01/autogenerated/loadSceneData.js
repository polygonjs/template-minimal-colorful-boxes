import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1664128735950",
  root: "1661020944189",
  nodes: {
    cameras: "1661020944189",
    "cameras/cameraControls1": "1661020944189",
    lights: "1661020944189",
    boxes: "1661020944189",
    "boxes/actor1": "1661020944189",
    "boxes/MAT": "1663712422684",
    "boxes/MAT/meshStandardBuilder1": "1663712422684",
  },
  shaders: {
    "/boxes/MAT/meshStandardBuilder1": {
      vertex: "1663712422684",
      fragment: "1663712422684",
      "customDepthMaterial.vertex": "1663712422684",
      "customDepthMaterial.fragment": "1663712422684",
      "customDistanceMaterial.vertex": "1663712422684",
      "customDistanceMaterial.fragment": "1663712422684",
      "customDepthDOFMaterial.vertex": "1663712422684",
      "customDepthDOFMaterial.fragment": "1663712422684",
    },
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
