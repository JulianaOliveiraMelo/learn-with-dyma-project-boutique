<template>
    <form @submit.prevent="trySubmit" class="d-flex flex-column">
      <h4>Add a product</h4>
      <hr class="w-100" />
      <div class="form-group">
        <label>Image</label>
        <input v-model="form.image" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Title</label>
        <input v-model="form.title" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea v-model.lazy="form.description" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label>Price</label>
        <input v-model.number="form.price" type="number" class="form-control">
      </div>
    <pre>{{ $data.form }}</pre>
    <ul v-if="errors.length">
      <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
      <button class="btn btn-primary">Add</button>
    </form>
</template>

<script>
import { eventBus } from '../../../main'
export default {
  data(){
    return {
      form: {
        image: '',
        title: '',
        description: '',
        price: '',
      },
      errors: [],
    }
  },
  methods: {
    trySubmit(){
      if(this.formIsValid()){
        console.log({...this.form})
        eventBus.addProduct({...this.form});
        this.resetForm();
        this.$router.pus('/shop')
      }
    },
    resetForm(){
      this.form = {
          image: '',
          title: '',
          description: '',
          price: '',
      }
    },
    formIsValid(){
      this.errors = [];
      if(!this.form.image){
        this.errors.push('Image is required');
      }
      if(!this.form.title){
        this.errors.push('Title is required');
      }
      if(!this.form.description){
        this.errors.push('Description is required');
      }
      if(!this.form.price){
        this.errors.push('Price is required');
      }
      return this.errors.length ? false : true
    }
  }
}
</script>

<style>

</style>