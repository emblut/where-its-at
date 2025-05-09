import { create } from 'zustand';

const useExistingIdsStore = create((set) => ({
  existingIds: [],
  addId: (id) => {
    set((state) => {
      state.existingIds.push(id);
      return {
        existingIds: state.existingIds,
      };
    });
  },
}));

export default useExistingIdsStore;
