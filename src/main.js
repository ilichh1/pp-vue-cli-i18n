// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'

Vue.use(VueI18n);

Vue.config.productionTip = false;

const appStrings = {
  en_US: {
    labels: {
      welcome_landing_page: "Welcome to Plus Protocol Exchange!",
      useful_links: "Essential Links",
      core_docs: "Core Docs",
      forum: "Forum",
      community_chat: "Community Chat",
      twitter: "Twitter",
      docs_for_this: "Docs for this Template", 
      ecosystem: "Ecosystem"
    }
  },
  es_MX: {
    labels: {
      welcome_landing_page: "Bienvenido al exchange Plus Protocol",
      useful_links: "Links Esenciales",
      core_docs: "Documentación Clave",
      forum: "Foro",
      community_chat: "Chat comunitario",
      twitter: "Twitter",
      docs_for_this: "Docs para esta plantilla", 
      ecosystem: "Ecosistema"
    }
  }
};
const pp_i18n = new VueI18n({
  locale: 'en_US',
  messages: appStrings
});

/* eslint-disable no-new */
var ppApp = new Vue({
  el: '#app',
  i18n: pp_i18n,
  components: { App },
  template: '<App/>'
});
