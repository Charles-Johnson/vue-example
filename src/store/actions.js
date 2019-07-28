export default {
    remove({commit}, {array, index}) {
        commit('remove', {array, index})
    }
};
