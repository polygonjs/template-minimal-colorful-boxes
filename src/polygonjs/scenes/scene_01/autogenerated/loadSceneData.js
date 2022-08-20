import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1660955506405",
  root: "1660955506405",
  nodes: {
    cameras: "1660955506405",
    "cameras/cameraControls1": "1660955506405",
    lights: "1660955506405",
    boxes: "1660955506405",
    "boxes/actor1": "1660955506405",
    "boxes/MAT": "1660955506405",
    "boxes/MAT/meshStandardBuilder1": "1660955506405",
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
