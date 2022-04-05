<template>
  <div class="product-list__card">
    <p class="product-list__card__card-title">{{ product.title }}</p>
    <img class="product-list__card__card-image" :src="product.image" alt="">
    <p class="product-list__card__card-price">Цена: {{ product.price }} {{ currency }}</p>
    <div>
      <input class="product-list__card__input"
             type="number"
             v-model="amount">
      <span> кг</span>
    </div>
    <button class="product-list__card__addToCart"
            @click="addToCart(product)">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "listItem",
  data() {
    return {
      amount: '',
    }
  },
  props: {
    currency: String,
    product: Object, // все данные о товаре храним в этом объекте
  },
  methods: {
    addToCart(product) {
      let amount = this.amount;
      if (!/^\d+$/gm.test(amount)) { // Проверяем, введено ли числовое значение
        return
      }
      let data = {
        amount,
        price: product.price,
        title: product.title,
      };
      this.$store.commit('add', data); // Данные о добавленных в корзину товарах будет хранить в Vuex
      this.amount = '' // очищаем инпут с количеством
    },
  }
}
</script>

<style scoped>

.product-list__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
.product-list__card__card-image {
  width: 100%;
  height: 40vh;
}
.product-list__card__addToCart {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 5px;
  width: 60%;
  height: 48px;
  background-color: #33A0FF;
  color: #FFFFFF;
  border-radius: 4px;
  border-width: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
.product-list__card__addToCart:hover {
  cursor: pointer;
  background-color: #1E96FF;
}
.product-list__card__addToCart:active {
  cursor: pointer;
  background-color: #1985E3;
}
@media (min-width: 840px) {
  .product-list__card {
    width: 33%;
  }
}
@media (min-width: 420px) and (max-width: 840px) {
  .product-list__card {
    width: 50%;
  }
  .product-list__card__card-image {
    height: 30vh;
  }
}
@media (max-width: 420px) {
  .product-list__card__card-image {
    height: inherit;
  }
}
</style> // Для адаптивности здесь проще использовать медиавыражения
