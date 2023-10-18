<script setup lang="ts">
import { jsonToElement } from '@/utils/jsonToElement'
import { onMounted, ref } from 'vue'

function addHandler() {
  let elementMap = new Map()
  const controls = document.querySelectorAll('#controls')
  for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener('click', () => {

    const parent = controls[i].parentElement
    if (controls[i].getAttribute('data-id') === 'un') {
      const child = parent!.children
      const backChild: any[] = []
      elementMap.set(parent, backChild)
      for (let i = child.length - 2; i  >= 2; i--) {
        backChild.push(child[i])
        child[i].classList.add('none')
      }
      controls[i].setAttribute('data-id', 'ep')
      } else {
        const child: any[] = elementMap.get(parent)
        for (let i = 0; i < child.length; i++) {
          child[i].classList.remove('none')
        }
        controls[i].setAttribute('data-id', 'un')
      }
  })
}
}

const value = ref()

function change() {
  console.log(value.value)
  jsonToElement({
    "string": "街角小林",
    "number": 123,
    "boolean": true,
    "null": null,
    "empty": "",
    "emptyArray": [],
    "emptyObject": {},
    "array": [
        "街角小林",
        123,
        true,
        null,
        "",
        [
            {
                "string": "街角小林",
                "number": 123,
                "boolean": true,
                "null": null,
                "empty": "",
                "emptyArray": [],
                "emptyObject": {}
            }
        ],
        {

            "string": "街角小林",
            "number": 123,
            "boolean": true,
            "null": null,
            "empty": "",
            "emptyArray": [],
            "emptyObject": {}
        },
        [],
        {}
    ],
    "object": {
        "string": "街角小林",
        "number": 123,
        "boolean": true,
        "null": null,
        "empty": "",
        "array": [
            "街角小林",
            123,
            true,
            null,
            "",
            [
                {
                    "string": "街角小林",
                    "number": 123,
                    "boolean": true,
                    "null": null,
                    "empty": "",
                    "emptyArray": [],
                    "emptyObject": {}
                }
            ],
            {
    
                "string": "街角小林",
                "number": 123,
                "boolean": true,
                "null": null,
                "empty": "",
                "emptyArray": [],
                "emptyObject": {}
            }
        ]
    }
}, '.container')
}



onMounted(() => {
  addHandler()
})
</script>

<template>
  <div class="app">
    <input @change="change" v-model="value" />
    <div class="container">
     
    </div>
  </div>

</template>

<style>
.app {
  width: 100%;
  height: 100%;
  background-color: var(--container-background-color);

  .container {
    font-size: 20px;
  }
}
</style>