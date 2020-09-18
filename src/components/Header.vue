<template>
  <div>
    <div class="row mlr-0">
      <div class="col-lg-8 col-md-7 col-sm-6 col-xs-6">
        <router-link to="/">
          <img :src="image_src" alt="logo" width="5%" class="mx-2 my-0.5" />
          <p>Home</p>
        </router-link>
      </div>
      <!-- Search input field  -->
      <div class="col-lg-4 col-md-5 col-sm-6 col-xs-6">
        <span class="search dropdown">
          <input
            type="text"
            v-model="queryShow"
            class="form-control-sm"
            placeholder="Your query goes here..."
            v-on:change="fetchSearchResult()"
          />
          <button v-on:click="fetchSearchResult()" class="btn btn-sm ml-1">Submit</button>

          <div class="dropdown-content">
            <a type="button" v-for="res of showResult" :key="res.show.id">
              <router-link
                :to="{ name: 'Details', params: {id: `${res.show.id}`}}"
              >{{res.show.name}}</router-link>
            </a>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchResult } from "@/services/api";
export default {
  name: "Header",
  data() {
    return {
      image_src: "/TVshow.ico",
      queryShow: "",
      showResult: []
    };
  },
  methods: {
    async fetchSearchResult() {
      const result = await getSearchResult(this.queryShow).catch(err => {
        this.error = err;
      });

      if (result) {
        this.showResult = result;
      }
    }
  }
};
</script>

<style scoped>
div {
  text-align: left;
}
p {
  display: inline-block;
  color: var(--main-text-color);
  text-align: center;
  padding: 14px;
  text-decoration: none;
}
p:hover {
  background-color: var(--main-text-color);
  color: var(--secondary-bg-color);
}
.dropdown:hover {
  color: var(--tertiary-bg-color);
}
.search {
  float: right;
  padding: 14px;
}
.mlr-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
button {
  background-color: var(--main-text-color);
  color: var(--main-bg-color);
}
input,
input:active {
  border: 1px solid var(--main-text-color);
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--tertiary-bg-color);
  min-width: inherit;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: var(--secondary-bg-color);
  padding: 5px 12px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
