<template>
  <div class="toggle-btn" @click="toggle">{{ is2D ? "3D" : "2D" }}</div>
  <LilGUI />
  <VueForceGraph3D
    v-if="!is2D"
    :graphData="graphData"
    :nodeColor="getNodeColor"
    nodeLabel="id"
    :nodeOpacity="1"
    :linkColor="getLinkColor"
    :linkWidth="5"
    :linkOpacity="0.2"
    linkLabel="id"
    :linkDirectionalArrowLength="3.5"
    :linkDirectionalArrowRelPos="1"
    :linkCurvature="0.25"
  ></VueForceGraph3D>

  <VueForceGraph2D v-if="is2D" :graphData="graphData"></VueForceGraph2D>

  <!-- <VueForceGraphAR :graphData="graphData"></VueForceGraphAR> -->
  <!-- <VueForceGraphVR :graphData="graphData"></VueForceGraphVR> -->
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
      })),
  };
}
export default defineComponent({
  setup() {
    const state = reactive({
      graphData: genRandomTree(5),
      is2D: false,     
    });
    const deleteItem = (data: any) => {
      console.log(data);
    };
    const menuChange = (data: any) => {
      console.log(data);
      const { activeData, menuItem } = data;
      switch (menuItem.id) {
        case "delete":
          const newNodes = state.graphData.nodes.filter(
            (node) => node.id !== activeData.id
          );
          const newEdges = state.graphData.links.filter(
            (link) =>
              !(
                (link.target as any).id === activeData.id ||
                (link.source as any).id === activeData.id
              )
          );
          console.log(state.graphData);
          state.graphData = {
            nodes: newNodes,
            links: newEdges,
          };
      }
    };
    const actionHandle = (data: any) => {
      console.log(data);
    };
    const getNodeColor = () => {
      return "rgb(178, 255, 221)";
    };
    const getLinkColor = () => {
      return "rgb(178, 255, 221)";
    };
    const toggle = () => {
      state.is2D = !state.is2D;
    };
    return {
      ...toRefs(state),
      deleteItem,
      menuChange,
      actionHandle,
      getNodeColor,
      getLinkColor,
      toggle,
    };
  },
});
</script>
<style>
#app,
body,
html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.toggle-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.3),
    -1px -1px 5px rgba(255, 255, 255, 0.3);
  z-index: 9;
  color: #fff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>