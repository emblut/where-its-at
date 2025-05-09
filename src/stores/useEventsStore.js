import { create } from 'zustand';

const useEventsStore = create((set) => ({
  events: null,
  setEvents: (data) => {
    set({
      events: data,
    });
  },
}));

export default useEventsStore;
