<template>
  <div class="lang-selector">
      <select @change="change" name="lang-select" id="lang-select" v-model="selected">
          <option v-for="lang in langs" :value="lang.id" :key="lang.id">{{lang.label}}</option>
      </select>
  </div>
</template>

<script>
export default {
    name: 'LanguageSelector',
    data() {
        return {
            langs: [
                {
                    id: 'en_US',
                    label: 'English (US)'
                },
                {
                    id: 'es_MX',
                    label: 'Español (MX)'
                }
            ],
            selected: "en_US"
        }
    },
    methods: {
        change() {
            this.$emit('languageChanged',this.selected);
        }
    }
}
</script>
