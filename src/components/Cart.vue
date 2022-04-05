<template>
  <ul class="cartList">
    <div class="cartList__header">Корзина:</div>
    <br>
    <li class="cartList__cartItem" v-for="item in cart">
      {{ item.title }}: {{ item.amount }} кг. – {{ item.amount * item.price }} {{currency}}.
    </li>
    <br>
    <div>Товаров в корзине на: {{ cartPrice }} {{currency}}</div>
  </ul>
</template>

<script>
export default {
  props: {
    cart: Array,
    currency: String,
  },
  computed: {
    cartPrice() {
      let cartPrice = 0
      for (let item of this.cart) {
        cartPrice += item.price * item.amount
      }
      return cartPrice
    }
  },
};
</script>

<style>
.cartList {
  margin-left: 10px;
}
.cartList__header {
  font-size: 20px;
  font-weight: 500;
}
</style>
