<template>
  <div class="flex items-center justify-center flex-col">
    <div>
      <review-form v-if="showReviewForm" :productId="productId" :reviews="reviews" @addReview="addReview"
        @close="showReviewForm = false"></review-form>

      <button class="rounded-full py-3 px-8 bg-gradient-to-r from-green-500 to-green-700 text-white focus:outline-none"
        @click="showReviewForm = true">Deja una Reseña</button>
    </div>

    <div class="user-ratings mt-8">
      <div v-for="review in productReviews" :key="review.id" class="user-comment p-6 rounded-lg shadow-md">
        <b>{{ review.userName }}</b>
        <p class="mt-2">{{ review.comment }}</p>
        <div class="rating-stars mt-4 flex items-center">
          <i v-for="star in Math.floor(review.rating)" :key="star" class="fas fa-star text-yellow-500"></i>
          <i v-for="emptyStar in 5 - Math.floor(review.rating)" :key="'empty' + emptyStar" class="far fa-star text-yellow-500"></i>
        </div>
        <span class="rating-value text-gray-600">{{ review.rating }}/5</span>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewForm from "../components/reviewForm.vue";

export default {
  components: {
    ReviewForm
  },
  props: ['productId', 'userLoggedIn'],
  data() {
    return {
      reviews: reviewsData.reviews,
      showReviewForm: false,
    };
  },
  methods: {
    addReview(newReview) {
      this.reviews.push(newReview);
    }
  },
  computed: {
    productReviews() {
      return this.reviews.filter(review => review.productId === this.productId);
    }
  }
};
</script>

<style scoped>
.user-ratings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  margin: 20px;
}

.rating-stars {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.rating-value {
  font-size: 1rem;
}

.user-comment {
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
