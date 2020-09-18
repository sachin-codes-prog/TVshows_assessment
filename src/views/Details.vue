<template>
  <div id="body">
    <h4 v-if="!showDetails && error" class="text-danger">{{ error }}</h4>
    <div class="container" v-if="Object.keys(showDetails).length">
      <div class="row">
        <!-- TV Show Poster -->
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 my-2">
          <img v-if="showDetails.image" :src="showDetails.image.original" alt="Poster" width="100%" />
          <img v-else src="https://via.placeholder.com/200x265.jpg?text=Image+NA" />
        </div> 
        <!-- TV Show Info -->
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <span>
            <h4 class="heading">
              <span id="name">{{showDetails.name}}</span>
              <span
                v-if="showDetails.premiered"
              >({{showDetails.premiered.substring(0, 4)}})</span>
              <span class="lead padding" v-if="showDetails.rating.average  > 0">
                <b>{{ showDetails.rating.average }}</b>
                <span class="secondary">/10</span> 
              </span>
            </h4>
          </span>
          <span>
            <span v-for="genre in showDetails.genres" :key="genre.id">
              <span class="badge badge-pill badge-light mr-1">{{ genre }}</span>
            </span>
            <span class="badge badge-light ml-2">{{ showDetails.language }}</span>
          </span>
          <hr class="my-4 bg-light" />
          <div v-if="showDetails.summary.length">
            <h4>Plot</h4>
            <p v-html="showDetails.summary"></p>
          </div>
          <!-- If show summary is not available -->
          <div v-else class="text-warning">Oops, summary is not available...</div>
          <router-link to="/">
            <button class="my-3 btn">Back to Home</button>
          </router-link>
        </div>
      </div>

      <!-- Cast Information -->
      <h4 class="pt-4 pb-2">Cast</h4>
      <div class="container-fluid pb-3">
        <div v-if="showDetails._embedded.cast.length">
          <div class="row flex-nowrap overflow-auto">
            <span v-for="cast in showDetails._embedded.cast" :key="cast.id" class="mx-2">
              <div class="card" >
                <img v-if="cast.person.image" :src="cast.person.image.medium" class="card-img-top" alt="cast" />
                <img v-else src="https://via.placeholder.com/150x265.jpg?text=Image+NA" />
                <div class="card-body">
                  <p class="card-title">{{cast.person.name.substring(0, 16)}}</p>
                </div>
              </div>
            </span>
          </div>
        </div>
        <!-- If cast details are not available -->
        <div v-else class="text-warning mb-5">Oops, Cast information is not available...</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getShowDetailsById } from "@/services/api";
export default {
  name: "Details",
  data() {
    return {
      currentId: "",
      error: "",
      showDetails: {}
    };
  },
  mounted() {
    this.currentId = this.$route.params.id;
    this.loadShowDetails();
  },
  methods: {
    async loadShowDetails() {
      const result = await getShowDetailsById(this.currentId).catch(err => {
        this.error = err;
      });
      if (result) {
        this.showDetails = result;
      }
    }
  },
  watch: {
    $route(to) {
      this.currentId = to.params.id;
      this.loadShowDetails();
    }
  }
};
</script>

<style scoped>
#body {
  text-align: left;
  padding-bottom: 5%;
  background-color: var(--main-bg-color);
  text-align: justify;
}
.card {
  background-color: var(--secondary-bg-color);
  width: 12rem;
  text-align: center;
}
.padding {
  padding: 5%;
  color: var(--main-text-color);
}
b {
  font-size: 150%;
  color: var(--main-text-color);
}
div {
  color: white;
}
.badge {
  background-color: var(--tertiary-bg-color);
  color: var(--secondary-bg-color);
}
.secondary {
  color: var(--tertiary-bg-color);
}
.heading {
  text-align: left;
}
#name {
  font-size: 150%;
}
button {
  background-color: var(--main-text-color);
  color: var(--main-bg-color);
  float: right;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--tertiary-bg-color);
}

::-webkit-scrollbar-thumb {
  background: var(--main-bg-color);
  border: 1px solid var(--tertiary-bg-color);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-bg-color);
}

::-webkit-scrollbar-button:single-button {
  background-color: var(--secondary-bg-color);
  display: block;
  border-style: solid;
  height: 13px;
  width: 16px;
}
</style>
