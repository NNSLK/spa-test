<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>
          <!-- head -->
          <thead>
            <tr>
              <th @click="sort('name')">Name &#8595;</th>
              <th @click="sort('age')">Age &#8595;</th>
              <th @click="sort('gender')">Gender &#8595;</th>
              <th @click="sort('id')">ID &#8595;</th>
            </tr>
          </thead>

          <!-- body -->
          <tbody>
            <tr v-for="user in usersSort" :key="user.id">
              <td>
                <img :src="user.img" />
                <span>{{user.name}}</span>
              </td>
              <td>{{user.age}}</td>
              <td>{{user.gender}}</td>
              <td>{{user.id}}</td>
            </tr>
          </tbody>
        </table>
        <p style="text-align:center;">
          <span>debug: sort: {{currentSort}}, dir: {{currentSortDir}}</span>
          <span>page: {{this.page.current}}, length: {{this.page.length}}</span>
        </p>
      </div>
    </section>
    <!-- buttons -->
    <section>
      <div class="container">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage">&#8592;</div>
          <div class="btn btnPrimary" @click="nextPage">&#8594;</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      currentSort: "name",
      currentSortDir: "asc",
      page: {
        current: 1,
        length: 3
      }
    };
  },
  created() {
    this.users = [
      {
        id: 1,
        name: "Jack",
        age: 22,
        img: "https://tocode.ru/static/c/vue-pro/assets/userCRM/1.jpg",
        gender: "male"
      },
      {
        id: 2,
        name: "Alex",
        age: 45,
        img: "https://tocode.ru/static/c/vue-pro/assets/userCRM/2.jpg",
        gender: "male"
      },
      {
        id: 3,
        name: "Maxx",
        age: 24,
        img: "https://tocode.ru/static/c/vue-pro/assets/userCRM/3.jpg",
        gender: "female"
      },
      {
        id: 4,
        name: "Jake",
        age: 67,
        img: "https://tocode.ru/static/c/vue-pro/assets/userCRM/4.jpg",
        gender: "male"
      },
      {
        id: 5,
        name: "Peter",
        age: 12,
        img: "https://tocode.ru/static/c/vue-pro/assets/userCRM/5.jpg",
        gender: "female"
      },
      {
        id: 6,
        name: "Vlog",
        age: 33,
        img: "https://tocode.ru/static/c/vue-pro/assets/userCRM/6.jpg",
        gender: "female"
      }
    ];
  },
  computed: {
    usersSort() {
      return this.users
        .sort((a, b) => {
          let mod = 1;
          if (this.currentSortDir === "desc") mod = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * mod;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * mod;
          return 0;
        })
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length;
          let end = this.page.current * this.page.length;
          if (index >= start && index < end) return true;
        });
    }
  },
  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = e;
    },
    // Pagination
    prevPage() {
      if (this.page.current > 1) this.page.current -= 1;
    },
    nextPage() {
      if (this.page.current * this.page.length < this.users.length)
        this.page.current += 1;
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 60px;
  height: auto;
  border-radius: 50%;
  margin-right: 16px;
}
.button-list {
  width: 100%;
  text-align: center;
}
.btn {
  border-radius: 60px;
  margin: 0 20px;
}
</style>