export default {
    remove({commit}, {array, index}) {
        commit('remove', {array, index})
    },
    update({commit}, {array, newArray}) {
        commit('update', {array, newArray});
    }
};
