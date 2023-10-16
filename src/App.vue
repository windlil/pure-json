<script setup lang="ts">
import { jsonToElement } from '@/utils/jsonToElement'
import { onMounted } from 'vue';

onMounted(() => {
  jsonToElement(
{
    "string": "街角小林",
    "number": 123,
    "boolean": true,
    "null": null,
    "empty": "",
    "emptyArray": [],
    "emptyObject": {},
    "array": [
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
})
</script>

<template>
  <div class="app">
    <div class="container">
     
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>