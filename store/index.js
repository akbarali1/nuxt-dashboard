export const state = () => ({
  sidebarActive: true,
});

export const mutations = {
  sidebarActions(state) {
    state.sidebarActive = !state.sidebarActive;
  },
};
