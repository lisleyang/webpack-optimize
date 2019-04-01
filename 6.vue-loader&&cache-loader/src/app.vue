<template>
    <div>
        he's name is {{name}}
        <Age></Age>
    </div>
</template>
<script>
import Age from './component.vue'

export default {
    data(){
        return {
            name : 'tal'
        }
    },
    components : {Age}
}
</script>

