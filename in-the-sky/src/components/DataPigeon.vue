<template>
  <div class="album py-5">
    <div class="container">
      <div
        id="album-row"
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
      >
        <div
          class="col"
          v-for="dataPigeon in filterPigeon"
          :key="dataPigeon._id"
        >
          <div class="card shadow-sm">
            <div class="card text-center shadow-sm">
              <img
                :src="require(`../assets/imgs/${dataPigeon.image}`)"
                alt=""
              />
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h3>
                  {{ dataPigeon.name }}
                </h3>
                <span>{{ dataPigeon.sex }}</span>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-around align-items-center">
                  <router-link :to="'/pedigree/' + dataPigeon._id"
                    ><button type="button" class="btn me-2">
                      View
                    </button></router-link
                  >
                  <router-link :to="'/update/' + dataPigeon._id"
                    ><button type="button" class="btn me-2">
                      Edit
                    </button></router-link
                  >

                  <button
                    type="button"
                    class="btn"
                    @click="deleteData(dataPigeon._id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import "../scss/_homePage.scss";
import { defineComponent } from "vue";
export default defineComponent({
  props: ["searchWord"],
  data() {
    return {
      dataPigeons: [] as any,
    };
  },

  methods: {
    async deleteData(id: any) {
      await axios.delete(
        "https://intheskyserver.onrender.com/dataPigeon/" + id
      );
      this.loadData();
    },
    async loadData() {
      const result = await axios.get(
        "https://intheskyserver.onrender.com/dataPigeon"
      );
      this.dataPigeons = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
  computed: {
    filterPigeon() {
      return this.dataPigeons.filter((dataPigeon: { name: string | any[] }) =>
        dataPigeon.name.includes(this.searchWord.toUpperCase())
      );
    },
  },
});
</script>
