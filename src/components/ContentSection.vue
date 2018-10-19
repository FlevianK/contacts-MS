<template>
  <div>
    <div class="create">
      <form @submit.prevent="addContact(name, phoneNumber)">
        <div class="label">
          <input v-model.trim="name" placeholder="Name" class="input">
        </div>
        <div class="label">
          <input v-model.trim.number="phoneNumber" placeholder="Phone number" class="input">
        </div>
        <div class="label">
          <button type="submit" class="submit">Add New Contact</button>
        </div>
      </form>
    </div>
    <div class="table">
      <Vuetable
        :data="contacts"
        :fields="columns"
        pagination-path=""
      />
    </div>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2';
import { dbInstance, db } from '../main'

export default {
  name: 'ContentSection',
  data () {
    return {
      columns: ['name', 'phoneNumber'],
      contacts: [],
      name: '',
      phoneNumber: '',
      createdAt: ''
    }
  },
  components: {
    Vuetable
  },
  firestore () {
    return {
      contacts: dbInstance.collection('contacts').orderBy('createdAt')
    }
  },
  methods: { 
    addContact (name, phoneNumber) {
      const createdAt = new Date();
      dbInstance.collection('contacts').add({
        name,
        phoneNumber,
        createdAt
      })
    }
  }
}

</script>

<style scoped>
  .hello {
  padding: 10px;
  }
  .table {
    padding: 5px;
    width: 40%;
    margin: 5px;
  }
  .create {
    padding: 20px;
    background-color: white;
    width: 50%;
    margin: 20px;
    z-index: 9999;
  }
   .label {
      padding: 10px;
    }
    .input {
      padding: 5px;
      width: 60%;
    }
    .submit {
      background-color: blue;
      color: white;
      padding: 5px;
    }
</style>
