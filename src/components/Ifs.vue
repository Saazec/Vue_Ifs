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
              v-model="dateToSearch"
              onkeydown="return false"
              @change="searchByDate(dateToSearch)"
            >
          </div>

          <div class="form-group margin-l-20">
            <label for="ifsSearchCategory">Source</label>
            <input
              class="form-control form-control-sm"
              type="text"
              v-model="sourceToSearch"
              name="ifsSearchCategory"
              id="ifsSearchCategory"
              placeholder="source"
            >
          </div>

          <div class="form-group margin-l-20 search-btn">
            <button
              type="button"
              @click="searchBySource(sourceToSearch)"
              class="btn btn-danger capsule-btn"
            >Search</button>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="handleSubmit">
      <table class="table table-sm">
        <tr>
          <td>
            <div class="form-group">
              <label for="caseNo">Case</label>
              <span class="mandatory-field">*</span>
              <input
                v-model="ifsForm.caseNo"
                v-validate="'required'"
                class="form-control form-control-sm"
                type="number"
                placeholder="case"
                name="caseNo"
                :class="{ 'is-invalid': submitted && errors.has('caseNo') }"
                id="caseNo"
              >
              <div
                v-if="submitted && errors.has('caseNo')"
                class="invalid-feedback"
              >{{ errors.first('caseNo') }}</div>
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
                v-model="ifsForm.caseNumber"
                v-validate="'required'"
                class="form-control form-control-sm"
                :class="{ 'is-invalid': submitted && errors.has('caseNumber') }"
                type="number"
                placeholder="Case Number"
                name="caseNumber"
                id="caseNumber"
              >
              <div
                v-if="submitted && errors.has('caseNumber')"
                class="invalid-feedback"
              >{{ errors.first('caseNumber') }}</div>
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
                v-model="ifsForm.source"
                v-validate="'required'"
                class="form-control form-control-sm"
                type="text"
                name="source"
                :class="{ 'is-invalid': submitted && errors.has('source') }"
                placeholder="Phone/WhatsApp"
                id="source"
              >
              <div
                v-if="submitted && errors.has('source')"
                class="invalid-feedback"
              >{{ errors.first('source') }}</div>
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
                v-model="ifsForm.feedbackType"
                v-validate="'required'"
                class="form-control form-control-sm"
                type="text"
                :class="{ 'is-invalid': submitted && errors.has('feedbackType') }"
                placeholder="Compliment"
                name="feedbackType"
                id="feedbackType"
              >
              <div
                v-if="submitted && errors.has('feedbackType')"
                class="invalid-feedback"
              >{{ errors.first('feedbackType') }}</div>
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
                v-model="ifsForm.division"
                v-validate="'required'"
                class="form-control form-control-sm"
                type="text"
                placeholder="LRT-BP"
                :class="{ 'is-invalid': submitted && errors.has('division') }"
                name="division"
                id="division"
              >
              <div
                v-if="submitted && errors.has('division')"
                class="invalid-feedback"
              >{{ errors.first('division') }}</div>
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
                v-model="ifsForm.incidentDate"
                v-validate="'required'"
                class="form-control form-control-sm"
                type="date"
                :class="{ 'is-invalid': submitted && errors.has('incidentDate') }"
                name="incidentDate"
                id="incidentDate"
                onkeydown="return false"
              >
              <div
                v-if="submitted && errors.has('incidentDate')"
                class="invalid-feedback"
              >{{ errors.first('incidentDate') }}</div>
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
                v-model="ifsForm.createdOn"
                v-validate="'required'"
                class="form-control form-control-sm"
                type="date"
                :class="{ 'is-invalid': submitted && errors.has('createdOn') }"
                name="createdOn"
                id="createdOn"
                @change="validateDate()"
                onkeydown="return false"
              >
              <div
                v-if="submitted && errors.has('createdOn')"
                class="invalid-feedback"
              >{{ errors.first('createdOn') }}</div>
              <div
                v-if="errorInDate"
                class="error-message"
              >created date should be lesser than reported date</div>
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
                v-model="ifsForm.reportedDate"
                v-validate="'required'"
                class="form-control form-control-sm"
                type="date"
                name="reportedDate"
                :class="{ 'is-invalid': submitted && errors.has('reportedDate') }"
                id="reportedDate"
                @change="validateDate()"
                onkeydown="return false"
              >
              <div
                v-if="submitted && errors.has('reportedDate')"
                class="invalid-feedback"
              >{{ errors.first('reportedDate') }}</div>
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
            <div class="form-group no-wrap">
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
              <button class="btn btn-danger capsule-btn add-btn">Add</button>
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
      <transition name="fade">
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
            <font-awesome-icon icon="pencil-alt" class="cursor-pointer" @click="enableEdit(index)"/>
            <font-awesome-icon
              style="margin-left: 6px;"
              icon="save"
              v-bind:class="{'save-disabled': index != selectedRow, 'save-enabled': index == selectedRow}"
              @click="saveData(record)"
            />
            <!-- <i class="fa fa-pencil fa-fw cursor-pointer" aria-hidden="true"></i>
            <i class="fa fa-save fa-fw cursor-pointer" aria-hidden="true"></i>-->
          </td>
          <td>{{ record.caseNumber }}</td>
          <td>
            <input
              :class="{'input-disabled': index != selectedRow}"
              type="text"
              name="item.caseNumber+'feedbackType'"
              v-model="record.feedbackType"
            >
          </td>

          <td>
            <input
              :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.source"
            >
          </td>
          <td>
            <input
              :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.division"
            >
          </td>
          <td>
            <input
              :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.reportedDate"
            >
          </td>
          <td>
            <input
              :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.createdOn"
            >
          </td>
          <td>
            <input
              :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.engineScore"
            >
          </td>
          <td>
            <input
              :class="{'input-disabled': index != selectedRow}"
              type="text"
              v-model="record.lastSaved"
            >
          </td>
        </tr>
      </table>
      </transition>
    </form>
  </div>
</template>

<script>
import ifsData from "../data/ifs.js";
// import ifs from '../data/ifs.js';
export default {
  name: "Ifs",
  props: {},
  data() {
    return {
      ifsData,
      ifsRecords: [],
      currentSort: "sr",
      currentSortDir: "asc",
      pageSize: 3,
      currentPage: 1,
      selectedRow: null,
      ifsForm: {
        caseNo: "",
        caseNumber: "",
        source: "",
        feedbackType: "",
        division: "",
        reportedDate: "",
        createdOn: "",
        engineScore: "",
        lastSaved: ""
      },
      errorInDate: false,
      dateToSearch: "",
      sourceToSearch: "",
      submitted: false
    };
  },
  created() {
    this.ifsRecords = this.ifsData.data;
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          if (
            this._.findIndex(this.ifsRecords, {
              caseNumber: this.ifsForm.caseNumber
            }) > -1
          ) {
            this.ifsRecords.push(this.ifsForm);
            this.$toasted.success("Record Inserted", {
              action: {
                text: "X",
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              }
            });
          } else {
            this.$toasted.show("Record Already Exists", {
              action: {
                text: "X",
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              }
            });
          }
        }
      });
    },
    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir === "asc" ? "desc" : "asc";
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
      let _index = this._.findIndex(this.ifsRecords, {
        caseNumber: formData.caseNumber
      });
      if (_index > -1) {
        this._.assign(this.ifsRecords[_index], formData);
        this.selectedRow = null;
        this.$toasted.success("Record updated successfully", {});
      }
    },
    searchByDate(param) {
      param = param.split("-");
      let _filteredDate = param[2] + "/" + param[1] + "/" + param[0];
      this.ifsRecords = this._.filter(this.ifsRecords, {
        reportedDate: _filteredDate
      });
    },
    searchBySource(source) {
      source = source.toLowerCase();
      this.ifsRecords = this._.filter(this.ifsRecords, { source: source });
    },
    validateDate() {
      if (this.ifsForm.createdOn && this.ifsForm.reportedDate) {
        this.errorInDate = false;
        let createdDate = this.ifsForm.createdOn.split('-');
        let reportedDate = this.ifsForm.reportedDate.split('-');
        if (+createdDate[0] > +reportedDate[0]) this.errorInDate = true;
        if (+createdDate[1] > +reportedDate[1]) this.errorInDate = true;
        if (+createdDate[2] >= +reportedDate[2]) this.errorInDate = true;
      } else {
        this.errorInDate = false;
      }
    }, 
  },
  computed: {
    dataToShow: function() {
      return this.ifsRecords
        .slice()
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
.error-message {
  color: red;
  font-size: smaller;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

