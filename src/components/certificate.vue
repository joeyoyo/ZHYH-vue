<!-- 电子证书查询 -->
<template>
  <div id="main">
    <div class="bd-width">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
          prop="name"
          label="姓名"
          :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' }]"
        >
          <el-input v-model="dynamicValidateForm.name"></el-input>
        </el-form-item>
        <el-form-item
          prop="ID"
          label="身份证"
          :rules="[{ required: true, message: '请输入身份证', trigger: 'blur' }]"
        >
          <el-input v-model="dynamicValidateForm.ID"></el-input>
        </el-form-item>
       
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import { queryStudentinfo } from '@/api/home'

export default {
  components: {

  },
  data() {
    return {
      dynamicValidateForm: {
          name:'',
          ID: ''
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            console.log(this.dynamicValidateForm);
            this.queryStudentinfo()

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
        //获证书接口
     queryStudentinfo() {
      // const formData = new FormData()
      // formData.append('username',this.dynamicValidateForm.name)
      // formData.append('idcard',this.dynamicValidateForm.ID)
      // const data = new URLSearchParams(formData) 
      let data = {
        username:this.dynamicValidateForm.name,
        idcard: this.dynamicValidateForm.ID,
      }
      queryStudentinfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log(res)
            this.$store.commit('setcetidetail', res.data)
            this.$router.push({path: '/certidetail'});
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  
  },
  created() {
   
  },
  beforeMount: function() {
    //挂载前状态
  },
  
}
</script>

<style scoped>
#main {
  background: #fff;
  /* margin-top: 194px; */
  min-height: 700px;
}
.bd-width {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  font: 14px / 1.5 '微软雅黑', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  outline: 0;
  border: 0;
  font-style: normal;
  display: flex;
  min-height: 500px;
  justify-content: center;
  align-items: center;
}
</style>
