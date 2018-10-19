<template>
    <Vuetable
      :data="contacts"
      :fields="columns"
      pagination-path=""
    />
</template>

<script>
import Vuetable from 'vuetable-2';

export default {
  name: 'ContentSection',
  data () {
    return {
      columns: ['name', 'phoneNumber'],
      contacts: getData(),
      options: {
      headers: ['Name', 'phone Number']
      }
    }
  },
  components: {
    Vuetable
  }
}

function getData() {
  return [{
    phoneNumber: "058576856",
    name: "Zimbabwe",
    created_at: "2015-04-24T01:46:50.459583",
    updated_at: "2015-04-24T01:46:50.459593",
    id: 1
  }, {
    phoneNumber: "3756746745",
    name: "Zambia",
    created_at: "2015-04-24T01:46:50.457459",
    updated_at: "2015-04-24T01:46:50.457468",
    id: 2
  }, {
    phoneNumber: "4576745475",
    name: "Yemen",
    created_at: "2015-04-24T01:46:50.454731",
    updated_at: "2015-04-24T01:46:50.454741",
    id: 3
  }]
}

</script>

<style scoped>
  .hello {
  padding: 10px;
  }
</style>
