<template>  
<ValidationObserver>
<ValidationProvider rules="secret" v-slot="{ errors }">
  	  <input v-model="myword" type="text">
  	  <span>{{ errors[0] }}</span>
</ValidationProvider>
<ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
	<input v-model="email" type="text">
	<span>{{ errors[0] }}</span>
</ValidationProvider>
</ValidationObserver>
</template>

<script>
// 导入依赖包
import Vue from 'vue';
import { ValidationProvider,ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

extend('email', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

extend('required', {
  ...required,
  message: '不能为空'
});

export default {
  data(){
  	return {
          myword:'',
          email:''
  	}
  },
  components: {
      ValidationObserver,
      ValidationProvider
  }
}
</script>