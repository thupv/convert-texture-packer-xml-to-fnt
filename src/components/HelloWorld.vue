<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <div class="col-md-6">
      <b-form-textarea id="textarea1"
                       v-model="xmlStr"
                       placeholder="Enter XML Generic from Texture Packer"
                       :rows="20"
                       :max-rows="100">
      </b-form-textarea>
      <input type="text" v-model="xmlStr">
    </div>
    <div class="col-md-6">
      <b-form-textarea id="textarea1"
                       v-model="outputXml"
                       placeholder="Output"
                       :rows="20"
                       :max-rows="100">
      </b-form-textarea>
    </div>
    <b-button class="convert-button"
              v-on:click="convert"
    >
      Convert
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Convert Texture Packer Generic XML to FNT (XML)',
      xmlStr: 'test',
      outputXml: '',
    };
  },
  methods: {
    convert: () => {
    },
  },
};

</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.convert-button{
  margin-top: 20px;
}
a {
  color: #42b983;
}
</style>
