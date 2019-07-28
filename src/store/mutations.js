export default {
    remove(state, {array, index}) {
        state[array].splice(index, 1);
    },
    update(state, {array, newArray}) {
        state[array] = newArray;
    },
    add(state, {newHeader, newBody}) {
        state.newHeader = "";
        state.newBody = "";
        let maximum = 0;
        state.toDoArray.forEach(({id}) => {
            if (id > maximum) {
                maximum = id;
            }
        });
        state.toDoArray.splice(0,0, {header: newHeader, body: newBody, id: maximum+1});
    }
}