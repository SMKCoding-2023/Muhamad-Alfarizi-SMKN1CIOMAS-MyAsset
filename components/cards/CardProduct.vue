<script lang="ts" setup>
import { defineProps } from 'vue';
import type { Product } from '~/types';

 // Import the type definition for Product

const props = defineProps({
    product: {
        type: Object as () => Product, // Set the type of the prop to Product
        default: {},
    },
});

const { baseStorageUrl } = useAppConfig();
</script>

<template>
    <section class="bg-white shadow-xl rounded-xl overflow-hidden">
        <div :class="`w-full h-[200px] p-3 md:p-5 bg-gray-300`">
            <img :src="baseStorageUrl + props.product.image" class="w-full h-full object-contain" />
        </div>
        <div class="px-3 md:px-5 pb-5 pt-9 relative">

            <NuxtLink :to="`/product/${props.product.id}`">
                <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-4 text-limit limit-2">{{ props.product.name }}</h3>
            </NuxtLink>

            <div class="flex justify-between items-center flex-wrap">
                <span class="text-xs md:text-sm font-normal mb-2">{{ props.product.category }}</span>
                <span class="text-xs md:text-sm font-normal">${{ props.product.price }}</span>
            </div>
            <div
        class="cursor-pointer absolute -top-3 md:-top-5 right-3 md:right-7 w-[40px] h-[40px] md:w-[50px] md:h-[50px] 
    ${props.product.isCart ? 'bg-blue-600 text-white' : 'bg-white'} 
    shadow-xl rounded-full flex justify-center items-center 
    hover:bg-blue-600 hover:text-white transition duration-300"
        @click="addToCart"
      >
        <i class="ri-shopping-cart-2-line"></i>
      </div>
        </div>
    </section>
</template>

<style scoped>
/* Penyesuaian responsif */
@media screen and (max-width: 768px) {
    .bg-white {
        padding: 5px;
        /* Menyesuaikan padding */
    }

    .text-lg,
    .text-xl {
        font-size: 1.2rem;
        /* Menyesuaikan ukuran font */
    }

    .flex-wrap {
        flex-direction: column;
        /* Mengubah orientasi flexbox menjadi kolom */
        align-items: flex-start;
        /* Mengatur item agar dimulai dari kiri */
    }

    .text-xs,
    .text-sm {
        margin-right: 5px;
        /* Memberikan jarak antar elemen pada layar kecil */
    }

    .top-3 {
        top: -3px;
        /* Menyesuaikan posisi elemen */
    }
}</style>
