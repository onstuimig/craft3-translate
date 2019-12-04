import Vue from 'vue';
import { EventBus } from './EventBus.js';
import SaveTranslations from './components/SaveTranslations.vue';
import TranslationsList from './components/TranslationsList.vue';
import TranslationsMenu from './components/TranslationsMenu.vue';

Vue.prototype.$csrfTokenName = window.csrfTokenName;
Vue.prototype.$csrfTokenValue = window.csrfTokenValue;
Vue.prototype.$craft = window.Craft;

new Vue({
  el: '#main',
  components: {
    SaveTranslations,
    TranslationsList,
    TranslationsMenu
  },
  mounted () {
    EventBus.$on('translations-saved', () => {
      this.$craft.cp.displayNotice(this.$craft.t('translate', 'Translations saved'));
    });
    EventBus.$on('translations-saved-error', () => {
      this.$craft.cp.displayError(this.$craft.t('translate', 'Translations not saved'));
    });
    EventBus.$on('translation-added', () => {
      this.$craft.cp.displayNotice(this.$craft.t('translate', 'Translation added'));
    });
    EventBus.$on('translation-added-error', () => {
      this.$craft.cp.displayError(this.$craft.t('translate', 'Translation not added'));
    });
    EventBus.$on('translation-deleted', () => {
      this.$craft.cp.displayNotice(this.$craft.t('translate', 'Translation deleted'));
    });
    EventBus.$on('translation-deleted-error', () => {
      this.$craft.cp.displayError(this.$craft.t('translate', 'Translation not deleted'));
    });
  }
});
