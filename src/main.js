import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import App from './App.vue'

Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'contactms-2663d',
  databaseURL: 'https://contactms-2663d.firebaseio.com'
})
export const dbInstance = firebase.firestore();
export const db = firebase.firestore;
export const settings = {timestampsInSnapshots: true};
dbInstance.settings(settings);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
