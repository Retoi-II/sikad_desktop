<template>
  <div id="app">
    <h1>Data dari Backend</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.nama }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchData } from '@/api/api'; // Sesuaikan dengan path sesuai struktur proyek Anda

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await fetchData();
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>
