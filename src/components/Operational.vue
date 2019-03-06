<template>
  <div>
    <div>
      <div class="col">
        <div class="d-flex align-items-center">
          <div class="form-group">
            <label for="ODStartDate">Start Date</label>
            <input
              class="form-control form-control-sm"
              type="date"
              name="ODStartDate"
              id="ODStartDate"
              onkeydown="return false"
            >
          </div>

          <div class="form-group margin-l-20">
            <label for="ODSearch">Category</label>
            <input
              class="form-control form-control-sm"
              type="text"
              name="ODSearch"
              id="ODSearch"
              placeholder="Category"
            >
          </div>

          <div class="form-group margin-l-20 search-btn">
            <button type="button" class="btn btn-danger capsule-btn">Search</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="d-flex justify-content-end">
  <pagination-controls (pageChange)="p = $event"></pagination-controls>
    </div>-->
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <button @click="previousPage" class="btn btn-sm">&lt; Previous</button>
        <button @click="nextPage" class="btn btn-sm">Next &gt;</button>
      </div>
    </div>
    <div>
      <table class="table table-sm">
        <tr>
          <th @click="sort('sr')">Sr. No</th>
          <th>Date</th>
          <th>Time</th>
          <th>Category</th>
          <th>Message</th>
          <th>Impact</th>
        </tr>

        <tr v-for="(record, index) in dataToShow" :key="index">
          <td>{{ record.serial }}</td>
          <td>{{ record.date }}</td>
          <td>{{ record.time }}</td>
          <td>{{ record.category }}</td>
          <td>{{ record.message }}</td>
          <td>{{ record.impact }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import operational from "../data/operational.js";

export default {
  name: "Operational",
  props: {},
  data() {
    return {
      opRecords: [],
      operational,
      currentSort: "sr",
      currentSortDir: "asc",
      pageSize: 3,
      currentPage: 1,
      oData: [],
      filteredData: []
    };
  },
  created() {
    this.opRecords = this.operational.data;
  },
  methods: {
    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    nextPage: function() {
      if (this.currentPage * this.pageSize < this.opRecords.length) {
        this.currentPage++;
      }
    },
    previousPage: function() {
      if (this.currentPage > 1) this.currentPage--;
    }
  },
  computed: {
    dataToShow: function() {
      return this.opRecords.slice()
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        })
        .filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
    }
  }
};
</script>

<style>
.margin-l-20 {
  margin-left: 20px;
}

.search-btn {
  position: relative;
  top: 15px;
}
</style>
