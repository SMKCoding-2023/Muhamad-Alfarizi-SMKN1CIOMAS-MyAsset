<script lang="ts" setup>
import { useCategoryStore } from '~/stores/category';
import { useProductsStore } from '~/stores/products';
import { ref, onMounted } from 'vue';

definePageMeta({
    middleware: ["user-access"]
});

const categoryStore = useCategoryStore();
const productStore = useProductsStore();
const allProducts = ref([]);
const selectedCategory = ref("");

// Fetch categories and products when the component is mounted
onMounted(async () => {
    await categoryStore.getAllCategory();
    await productStore.getAllProducts();
    allProducts.value = productStore.products;
});

// Watch for changes in the selectedCategory and update the displayed products accordingly
watch(selectedCategory, (newCategory) => {
    if (newCategory) {
        allProducts.value = productStore.products.filter(product => product.category === newCategory);
    } else {
        allProducts.value = productStore.products;
    }
});

</script>

<template>
    <section>
        <div class="container">
            <div class="py-10">
                <div class="mb-6 flex justify-end gap-6">
                    <NuxtLink to="/category/create"
                        class="bg-orange-500 text-white flex justify-center items-center px-3 rounded-lg">
                        Create Category
                    </NuxtLink>
                    <NuxtLink to="/product/create"
                        class="bg-green-500 text-white flex justify-center items-center px-3 rounded-lg">
                        Create Products
                    </NuxtLink>
                    <!-- Dropdown now uses categories from the categoryStore -->
                    <Dropdown :categories="categoryStore.categories" @selected-category="selectedCategory = $event" />
                </div>
                <div class="flex gap-6 flex-wrap mx-auto">
                    <template v-for="(item, index) in allProducts" :key="index">
                        <CardsCardProduct :product="item" class="w-[calc(100%/4-18px)]" />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
