<template>
    <draggable v-model="array" group="tasks" @start="drag=true" @end="drag=false" class="draggable" handle=".handle">
        <div v-for="element in array" :key="element.id">
            <Card class="card">
                <Button icon="ios-move" class="handle"/>
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
    props: {'array': Array},
    components: {draggable},
}
</script>