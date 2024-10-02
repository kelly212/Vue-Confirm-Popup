import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import money3 from 'v-money3'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import {createVuetify} from 'vuetify'

const vuetify = createVuetify({
   components,
   directives,
})

createApp(App)
  .use(router)
  .use(money3)
  .use(vuetify)
  .mount('#app')
