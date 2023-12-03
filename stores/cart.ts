// cart.ts
import { defineStore } from 'pinia';
import { useAppConfig } from '~/config';
import { useFetch } from '~/utils/fetch';

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as any[], // Ganti dengan cartItems
    status: false,
    message: "",
  }),
  actions: {
    async addToCart(product: any) {
    try {
      // Simulasikan pengiriman permintaan ke server
      // Gantilah URL dan metode sesuai kebutuhan aplikasi Anda
      const { data, error } = await useFetch("/rest/v1/cart", {
        method: 'POST',
        body: { product },
      });

      if (error) {
        this.status = false;
        this.message = 'Failed to add product to cart';
      } else {
        this.cartItems.push(product);
        this.status = true;
        this.message = 'Product added to cart successfully';
      }
    } catch (error) {
      console.error(error);
      this.status = false;
      this.message = 'Failed to add product to cart';
    }
  },
    async getAllCart() {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/cart", {
        baseURL: baseUrl,
        method: "GET",
        headers: {
          apikey: apikey,
        },
      });

      if (error.value) {
        this.status = false;
        this.message = "Get Cart Failed !!!";
      } else if (data) {
        this.status = true;
        this.message = "Get Cart successfully";
        this.cartItems = data.value; // Ganti dengan cartItems
      }
    },
    // ... (tambahkan tindakan lain yang diperlukan untuk keranjang)
  },
});
