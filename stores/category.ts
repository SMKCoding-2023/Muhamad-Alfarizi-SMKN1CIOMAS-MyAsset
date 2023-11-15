export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: {} as any,
    status: false,
    message: "",
  }),
  actions: {
    async createCategory(payload: any) {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/categories", {
        baseURL: baseUrl,
        method: "POST",
        headers: {
          apikey: apikey,
        },
        body: payload,
      });

      if (error.value) {
        this.status = false;
        this.message = "Get Categories Failed !!!";
      } else if (data) {
        this.status = true;
        this.message = "Get Categories successfully";
      }
    },
    async getAllCategory() {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/categories", {
        baseURL: baseUrl,
        method: "GET",
        headers: {
          apikey: apikey,
        },
      });

      if (error.value) {
        this.status = false;
        this.message = "Get Categories Failed !!!";
      } else if (data) {
        this.status = true;
        this.message = "Get Categories successfully";
        this.categories = data.value;
      }
    },
  },
});
