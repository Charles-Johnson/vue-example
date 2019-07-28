export default {
    remove(state, {array, index}) {
        state[array].splice(index, 1);
    },
    update(state, {array, newArray}) {
        state[array] = newArray;
    }
}