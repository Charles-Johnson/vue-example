<template>
    <draggable v-model="computedArray" group="tasks" @start="drag=true" @end="drag=false" class="draggable" handle=".handle">
        <div v-for="(element, index) in computedArray" :key="element.id">
            <Card class="card">
                <i-button icon="md-move" class="handle"/>
                <i-button icon="md-close" @click="remove(index)"/>
                <h3 class="el-header">{{element.header}}</h3>
                <p class="el-body">{{element.body}}</p>
            </Card>
        </div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: 'column-of-draggables',
    props: {'array': String},
    components: {draggable},
    methods: {
        remove: function (index) {
            this.$store.dispatch('remove', {array: this.array, index});
        }
    },
    computed: {
        computedArray: function() {
            return this.$store.state[this.array];
        }
    }
}
</script>