// export const state = () => {
//   return {
//     items: []
//   }
// }
// below is a simpler way of exporting the above if there is only one item in object

export const state = () => ({
  items: []
})

export const actions = {
  fetchCourses({commit}) {
    return this.$axios.$get('/api/v1/products')
      .then(courses => {
        commit('setItems', {resource: 'course', items: courses}, {root: true})
        return state.items
      })
  }
}