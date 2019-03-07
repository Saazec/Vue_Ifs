<template>
    <div>
        <h4>
  Enterprise Search
</h4>
<hr>
<nav>
  <div class="nav"
       id="nav-tab"
       role="tablist">
    <a class="cursor-pointer"
       id="nav-ifs-tab"
       data-toggle="tab"
       role="tab"
       v-bind:class="{'active-tab': currentView == 'ifs', 'non-active-tab': currentView != 'ifs'}"
       @click="currentView = 'ifs'"
       aria-controls="nav-ifs"
       aria-selected="true"><h6>IFS Data</h6></a>
    <a class="cursor-pointer"
       id="nav-operational-tab"
       data-toggle="tab"
       role="tab"
       v-bind:class="{'active-tab': currentView == 'opr', 'non-active-tab': currentView != 'opr'}"
       @click="currentView = 'opr'"
       aria-controls="nav-operational"
       aria-selected="false"><h6>Operational Data</h6></a>
  </div>
</nav>

<!-- <div *ngIf="currentTemplate">
  <ifs-data></ifs-data>
</div>
<div *ngIf="!currentTemplate">
  <operational-data></operational-data>
</div> -->

<router-view />

<Ifs v-if="currentView == 'ifs'" />

<Operational v-if="currentView == 'opr'" />
    </div>
</template>

<script>
import Ifs from './Ifs.vue'
import Operational from './Operational.vue';

export default {
    name: 'Dashboard',
    props: {},
    data() {
      return {
        currentView: 'ifs',
      }
    },
    created() {
    },
    components: { Ifs, Operational }
}
</script>

<style>
.router-link-active {
  border-bottom: 2px solid coral;
}
.cursor-pointer {
  cursor: pointer;
}
.active-tab {
    border-bottom: 2px solid coral;
    margin: 5px;
    padding: 0px;
}
.non-active-tab {
  border-bottom: 2px solid white;
  margin: 5px;
  padding: 0px;
}
</style>


