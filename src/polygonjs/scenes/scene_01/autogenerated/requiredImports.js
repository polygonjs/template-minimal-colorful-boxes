// actor
import { FloatToVec3ActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/FloatToVec3";
import { OnObjectHoverActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnObjectHover";
import { OnTickActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick";
import { SetObjectMaterialColorActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectMaterialColor";
import { SetObjectScaleActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectScale";
import { TwoWaySwitchActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/TwoWaySwitch";
import { Vec3ToColorActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Vec3ToColor";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
import { MeshStandardBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { AreaLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AreaLight";
import { AttribPromoteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribPromote";
import { AttribRenameSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribRename";
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PaletteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Palette";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PlaneSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";

export const requiredImports_scene_01 = {
  nodes: [
    FloatToVec3ActorNode,
    OnObjectHoverActorNode,
    OnTickActorNode,
    SetObjectMaterialColorActorNode,
    SetObjectScaleActorNode,
    TwoWaySwitchActorNode,
    Vec3ToColorActorNode,
    CameraOrbitControlsEventNode,
    MeshStandardMatNode,
    MeshStandardBuilderMatNode,
    GeoObjNode,
    ActorSopNode,
    AreaLightSopNode,
    AttribPromoteSopNode,
    AttribRenameSopNode,
    BoxSopNode,
    CameraControlsSopNode,
    CopySopNode,
    HemisphereLightSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PaletteSopNode,
    PerspectiveCameraSopNode,
    PlaneSopNode,
    PolarTransformSopNode,
  ],
  operations: [],
};
