<template>
  <div class="product-list">
    <list-item v-for="product in products"
               :product="product"
               :currency="currency">
    </list-item>
  </div>
</template>

<script>

import listItem from "./listItem"; // Создадим отдельный компонент для карточки товара, это позволит переиспользовать и реактивно рендерить каждую из них

export default {
  components: {listItem},
  props: {
    currency: String,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
  },
  methods: {
    async getList() {
      this.products = await this.$store.dispatch('getProductsList');
    },
  },
  created() {
    this.getList() // Первичная загрузка списка
    setInterval(this.getList, 5000); // Обновление каждые две секунды
  },
};
</script>

<style>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
</style>