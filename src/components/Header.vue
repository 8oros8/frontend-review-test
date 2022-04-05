<script>
export default {
  name: 'Header',
  props: {
    cart: Array,
    required: true,
    default: {},
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
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>

<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ Math.round(cartPrice) }} {{ currency }}</h3>
  </div>
</template>
