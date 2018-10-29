<template>
  <section class="pa4">
    <div class="bg-white-90 pa4">
      <div class="f1">Nuxt TypeScript Starter</div>
      <p>rootHoge: {{ $store.state.hoge }}</p>
      <p>rootFuga: {{ $store.state.fuga }}</p>
      <p>hoge: {{ $store.state.modules.main.hoge }}</p>
      <p>fuga: {{ $store.state.modules.main.fuga }}</p>
      <button v-on:click="save({ hoge: 'save', fuga: 1 })">save</button>
      <button v-on:click="mdSave({ hoge: 'mdSave', fuga: 2 })">mdSave</button>
      <button v-on:click="mdSaveRoot({ hoge: 'mdSaveRoot', fuga: 3 })">mdSaveRoot</button>
    </div>
    <div class="flex flex-wrap ph2 justify-between bg-white-80">
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['save']),
    ...mapActions('modules/main', [
      'mdSave',
      'mdSaveRoot'
    ])
  },
}
</script>

