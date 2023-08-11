import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueForceGraph2D, VueForceGraph3D, /*VueForceGraphVR, VueForceGraphAR,*/ GraphContextMenu } from 'vue-force-graph';

const app = createApp(App)
app
    .use(GraphContextMenu)
    .use(VueForceGraph3D)
    .use(VueForceGraph2D)
// .use(VueForceGraphAR)
// .use(VueForceGraphVR)

app.mount('#app')
