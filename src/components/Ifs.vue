<template>
  <div>
    <div class>
      <div class="col">
        <div class="d-flex align-items-center">
          <div class="form-group">
            <label for="ifsStartDate">Reported Date</label>
            <input
              class="form-control form-control-sm"
              type="date"
              name="ifsStartDate"
              id="ifsStartDate"
              onkeydown="return false"
            >
          </div>

          <div class="form-group margin-l-20">
            <label for="ifsSearchCategory">Source</label>
            <input
              class="form-control form-control-sm"
              type="text"
              name="ifsSearchCategory"
              id="ifsSearchCategory"
              placeholder="source"
            >
          </div>

          <div class="form-group margin-l-20 search-btn">
            <button type="button" class="btn btn-danger capsule-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
    <form name="form">
      <table class="table table-sm">
        <tr>
          <td>
            <div class="form-group">
              <label for="caseNo">Case</label>
              <span class="mandatory-field">*</span>
              <input
                class="form-control form-control-sm"
                type="number"
                placeholder="case"
                name="caseNo"
                id="caseNo"
                required
              >
              <!-- <div class="invalid-feedback">
            Case is required
              </div>-->
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="caseNumber">Case Number</label>
              <span class="mandatory-field">*</span>
              <input
                class="form-control form-control-sm"
                type="number"
                placeholder="Case Number"
                name="caseNumber"
                id="caseNumber"
                required
              >
              <!-- <div class="invalid-feedback">
            Case Number is required
              </div>-->
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="source">Source</label>
              <span class="mandatory-field">*</span>
              <input
                class="form-control form-control-sm"
                type="text"
                name="source"
                placeholder="Phone / WhatsApp"
                id="source"
                required
              >
              <!-- <div class="invalid-feedback">
            Source is required
              </div>-->
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="feedbackType">Feedback Type</label>
              <span class="mandatory-field">*</span>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Compliment"
                name="feedbackType"
                id="feedbackType"
                required
              >
              <!-- <div class="invalid-feedback">
            Feedback Type is required
              </div>-->
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="division">Division</label>
              <span class="mandatory-field">*</span>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="LRT-BP"
                name="division"
                id="division"
                required
              >
              <!-- <div class="invalid-feedback">
            Division is required
              </div>-->
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="incidentDate">Incident Date</label>
              <span class="mandatory-field">*</span>
              <input
                class="form-control form-control-sm"
                type="date"
                name="incidentDate"
                id="incidentDate"
                required
                onkeydown="return false"
              >
              <!-- <div class="invalid-feedback">
            Incident Date is required
              </div>-->
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div class="form-group">
              <label for="createdOn">Created On</label>
              <span class="mandatory-field">*</span>
              <input
                class="form-control form-control-sm"
                type="date"
                name="createdOn"
                id="createdOn"
                required
                onkeydown="return false"
              >
              <!-- <div class="invalid-feedback"
               *ngIf="f.submitted && createdOn.invalid">
            <div *ngIf="createdOn.errors.required">
              Created On is required
            </div>
              </div>-->
              <!-- <div *ngIf="reportedErrorMsg"
               style="width: 100%; margin-top: .25rem; font-size: 80%; color: #dc3545;">
            Created date should be lesser than reported date.
              </div>-->
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="reportedDate">Reported Date</label>
              <span class="mandatory-field">*</span>
              <input
                class="form-control form-control-sm"
                type="date"
                name="reportedDate"
                id="reportedDate"
                required
                onkeydown="return false"
              >
              <!-- <div class="invalid-feedback">
            Reported Date is required
              </div>-->
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="incidentTime">Incident Time</label>
              <input
                class="form-control form-control-sm"
                type="time"
                id="incidentTime"
                name="incidentTime"
              >
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="location">Location</label>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Location"
                name="location"
                id="location"
              >
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="stationFrom">Station From</label>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="From"
                name="stationFrom"
                id="stationFrom"
              >
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="stationTo">Station To</label>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Station To"
                name="stationTo"
                id="stationTo"
              >
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div class="form-group">
              <label for="alignPoint">Bus Align Point</label>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Align Point"
                name="alignPoint"
                id="alignPoint"
              >
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="boardingPoint">Bus Boarding Point</label>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Boarding Point"
                name="boardingPoint"
                id="boardingPoint"
              >
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="incidentAt">Bus Incident At</label>
              <input
                class="form-control form-control-sm"
                type="text"
                id="incidentAt"
                placeholder="Incident At"
                name="incidentAt"
              >
            </div>
          </td>
          <td>
            <div class="form-group no-wrap">
              <label for="registrationNo">Bus Registration Number</label>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Regsitration Number"
                name="registrationNo"
                id="registrationNo"
              >
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="serviveNumber">Bus Service Number</label>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Service Number"
                name="serviveNumber"
                id="serviveNumber"
              >
            </div>
          </td>
          <td>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
              >
            </div>
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control form-control-sm">Your Message Here...</textarea>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td class="d-flex justify-content-end">
            <div class="align-items-end justify-content-end">
              <button type="submit" class="btn btn-danger capsule-btn add-btn">Add</button>
            </div>
          </td>
        </tr>
      </table>
    </form>
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
    <form name="editForm">
      <table class="table table-sm">
        <tr>
          <th>Edit/Save</th>
          <th class="no-wrap">Case Number</th>
          <th>Feedback Type</th>
          <th>Source</th>
          <th>Division</th>
          <th>Reported Date</th>
          <th>Created On</th>
          <th>Engine Score</th>
          <th>Last Saved User</th>
        </tr>
        <tr v-for="(record, index) in dataToShow" :key="index">
          <td style="white-space:nowrap;">
                <font-awesome-icon icon="pencil-alt" @click="enableEdit(index)" />
      <font-awesome-icon style="margin-left: 6px;"
       icon="save" v-bind:class="{'save-disabled': index != selectedRow, 'save-enabled': index == selectedRow}" 
       @click="saveData(record)"/>
            <!-- <i class="fa fa-pencil fa-fw cursor-pointer" aria-hidden="true"></i>
            <i class="fa fa-save fa-fw cursor-pointer" aria-hidden="true"></i> -->
          </td>
          <td>{{ record.caseNumber }}</td>
           <td>
            <input :class="{'input-disabled': index != selectedRow}"
              type="text"
              name="item.caseNumber+'feedbackType'"
              v-model="record.feedbackType"
            >
          </td>
          
          <td>
            <input :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.source">
          </td>
          <td>
            <input :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.division">
          </td>
          <td>
            <input :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.reportedDate">
          </td>
          <td>
            <input :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.createdOn">
          </td>
          <td>
            <input :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.engineScore">
          </td>
          <td>
            <input :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.lastSaved">
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import ifsData from '../data/ifs.js';
// import ifs from '../data/ifs.js';
export default {
  name: "Ifs",
  props: {},
  data() {
      return {
          ifsData,
          ifsRecords: [],
          currentSort: 'sr',
          currentSortDir: 'asc',
          pageSize: 3,
          currentPage: 1,
          selectedRow: null,
      };
  },
  created() {
    this.ifsRecords = this.ifsData.data;
  },
  methods: {
    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },
    nextPage: function() {
      if (this.currentPage * this.pageSize < this.ifsRecords.length) {
        this.currentPage++;
      }
    },
    previousPage: function() {
      if (this.currentPage > 1) this.currentPage--;
    },
    enableEdit: function(index) {
      this.selectedRow = index;
    },
    saveData: function(formData) {
      this.selectedRow = null;
    }
  },
  computed: {
    dataToShow: function() {
      return this.ifsRecords.slice()
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === 'desc') modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        })
        .filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        })
    }
  }
};
</script>

<style>
.mandatory-field {
  color: red;
  font-weight: bold;
}
.input-disabled {
  border: none;
  pointer-events: none;
}
.save-enabled {
  cursor: pointer;
  color: black;
}
.save-disabled {
  pointer-events: none;
  color: grey;
}
.no-wrap {
  white-space: nowrap;
}
.capsule-btn {
    border-radius: 20px;
    background-color: coral;
    color: white;
    border: 1px solid coral;
    padding: 5px;
    font-size: inherit;
    min-width: 70px;
}
</style>

