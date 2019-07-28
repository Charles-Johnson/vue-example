export default {
    remove(state, {array, index}) {
        state[array].splice(index, 1);
    }
}