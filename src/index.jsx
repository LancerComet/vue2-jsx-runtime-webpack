import Vue from 'vue'
import VueCompositionApi, { defineComponent, ref } from '@vue/composition-api'

Vue.use(VueCompositionApi)

const MyTinyForm = defineComponent({
  setup () {
    const nameRef = ref('John Smith')
    const ageRef = ref(100)

    return () => (
      <div style='margin: 20px 0'>
        <div>
          <input type='text' v-model={nameRef} placeholder='Name' />
          <input type='number' v-model={[ageRef, 'number']} placeholder='Age' />
        </div>
        <div>
          <p>Name: {nameRef.value}, age: {ageRef.value}</p>
        </div>
      </div>
    )
  }
})

const AppLayout = defineComponent({
  setup () {
    return () => (
      <div>
        <h1>Hello, world</h1>
        <div>This is a quick starter with Webpack + JSX + Vue 2 + Vue 2 JSX Runtime.</div>
        <MyTinyForm />
      </div>
    )
  }
})

const app = new Vue({
  render: () => <AppLayout />
})

app.$mount('#app')
