import { defineStore } from "pinia";
import api from "@/axios/axios";

export const useBulletinStore = defineStore("bulletin", {
  state: () => ({
    bulletins: [],
    bulletin: null,
    loading: false,
    errors: {},
  }),

  getters: {
    getBulletins: (state) => state.bulletins,
    getBulletin: (state) => state.bulletin,
  },

  actions: {
    /**
     * Get All Bulletins
     */
    async fetchBulletins() {
      this.loading = true;

      try {
        const { data } = await api.get("/bulletin");

        this.bulletins = data;

        return data;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Get Single Bulletin
     */
    async fetchBulletin(id) {
      this.loading = true;

      try {
        const { data } = await api.get(`/bulletin/${id}`);

        this.bulletin = data;

        return data;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Reset State
     */
    clearBulletin() {
      this.bulletin = null;
      this.errors = {};
    },
  },
});
