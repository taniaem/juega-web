// https://fontawesome.com/docs/web/use-with/vue/

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faTwitterSquare, faTwitch, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import {
    faBars,
    faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faBars,
    faCircleCheck,
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = true

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})