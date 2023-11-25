<script setup lang="ts">
import { ref } from 'vue';
import { useCategoryStore } from '~/stores/category';

const categoryStore = useCategoryStore();
const form = ref({
    name: '',
});
const isShowAlert = ref(false);

const submitCategory = async () => {
    try {
        await categoryStore.createCategory({ name: form.value.name });

        if (categoryStore.status) {
            isShowAlert.value = true;
        } else {
            isShowAlert.value = true;
        }
    } catch (error) {
        console.error('Error creating category:', error);
        isShowAlert.value = true;
    } finally {
        form.value.name = '';
    }
};
</script>
<template>
    <section class="flex justify-center py-10">
        <div class="w-[500px]">
            <h1 class="text-2xl mb-7 font-medium">Create Category</h1>
            <div v-if="isShowAlert" class="p-4 mb-4 text-sm rounded-lg bg-green-100 text-green-800">
                {{ 'BERHASIL' }}
            </div>
            <form @submit.prevent="submitCategory">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" id="name" v-model="form.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter Category Name" required />
                </div>
                <button type="submit"
                    class="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    Submit
                </button>
            </form>
        </div>
    </section>
</template>

