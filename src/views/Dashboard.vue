<template>
  <div id="body">
    <h4 v-if="!allShows && error" class="text-danger">
      {{ error }}
    </h4>
    <div class="container">
      <!-- Thumbnails of TV Shows in a row -->
      <div class="container-fluid">
        <div class="row flex-nowrap overflow-auto">
          <div v-for="show in allShows" :key="show.id" class="mx-2">
            <router-link :to="{ name: 'Details', params: { id: `${show.id}` } }">
              <img :src="show.image.medium" alt="Poster" />
            </router-link>
          </div>
        </div>
      </div>
      <!-- Dropdown field for choosing genre (Default Genre: Anime) -->
      <h6 class="mt-4 mb-2 text-left">
        <span class="font-weight-bold">{{currentGenre}}</span>
        <select v-model="currentGenre" class="custom-select-sm float-right">
          <option class="custom-option" v-for="g in genre" :key="g.id">{{g}}</option>
        </select>
      </h6>
      <!-- Thumbnails of TV Shows of a particular genre in a row -->
      <div class="container-fluid mb-3 pb-5">
        <div class="row flex-nowrap overflow-auto">
          <div v-for="genre in genreFilter" :key="genre.id" class="mx-2">
            <router-link :to="{ name: 'Details', params: { id: `${genre.id}` } }">
              <img :src="genre.image.medium" alt="Poster" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllShows } from "@/services/api";
import { sortTvShow } from "@/utils/sortByRating";

export default {
  name: "Dashboard",
  data() {
    return {
      allShows: [],
      genre: [],
      error: "",
      currentGenre: "Anime"
    };
  },
  mounted() {
    this.loadAllShows();
  },
  methods: {
    async loadAllShows() {
      const result = await getAllShows().catch(err => {
        this.error = err;
      });

      if (result) {
        this.allShows = result;
        this.sortByRating();
        this.genreBasedShows();
      }
    },
    sortByRating() {
      return this.allShows.sort(sortTvShow);  
    },
    genreBasedShows() {
      this.allShows.map(show => {
        if (show.genres)
          show.genres.map(genre => {
            if(!this.genre.includes(genre))
              this.genre.push(genre)
          })
      })
    }
  },
  computed: {
    genreFilter() {
      return this.allShows.filter(x => x.genres.includes(this.currentGenre));
    }
  }
};
</script>

<style scoped>
#body {
  background-color: var(--main-bg-color);
}
.font-weight-bold {
  font-size: 155%;
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
