import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { VueForceGraph2D, VueForceGraph3D, /*VueForceGraphVR, VueForceGraphAR,*/} from 'vue-force-graph';
import LilGUI from './components/LilGUI.vue'

const app = createApp(App)


app.component('LilGUI', LilGUI)
app
    .use(VueForceGraph3D)
    .use(VueForceGraph2D)
// .use(VueForceGraphAR)
// .use(VueForceGraphVR)

app.mount('#app')
