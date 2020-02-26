<template>
 
    <div>
        <el-row :gutter="40" class="form-wrapper">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <el-form
            ref="userForm"
            :model="userForm"
            status-icon
            :rules="rules"
            label-position="left"
            label-width="150px"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userForm.username" />
            </el-form-item>
            <el-form-item label="角色" prop="role">
              <el-select v-model="userForm.role" placeholder="请选择角色">
                
                <el-option
                  v-for="item in roleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  width="200px"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="岗位" prop="station">
              <el-input v-model="userForm.station" />
            </el-form-item>
            <el-form-item label="联系电话" prop="contactNumber">
              <el-input v-model.number="userForm.contactNumber" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="userForm.email" />
            </el-form-item>
          
          
            <el-form-item label="密码" prop="password">
              <el-input v-model="userForm.password" type="password" autocomplete="off" show-password />
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPassword">
              <el-input v-model="userForm.checkPassword" type="password" autocomplete="off" show-password />
            </el-form-item>
            <el-form-item label="用户组名单" prop="userGroupList">
              <el-select v-model="userForm.userGroupList" multiple filterable default-first-option placeholder="请选择用户组">
                <el-option v-for="item in userGroupOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="允许登录IP段">
              <el-input v-model="userForm.allowLoginToIPSegmentStart" style="width: calc(50% - 32px)" />
              <span>————</span>
              <el-input v-model="userForm.allowLoginToIPSegmentEnd" style="width: calc(50% - 32px)" />
            </el-form-item>
            <el-form-item label="允许登录MAC地址" prop="allowLoginToMACAddress">
              <el-input v-model="userForm.allowLoginToMACAddress" type="textarea" :rows="2" placeholder="请输入内容" />
            </el-form-item>
            <el-form-item>
              <div class="button-container">
                <el-button type="primary" @click="register(userForm)">确定</el-button>
                <el-button type="info" @click="cancle('userForm')">取消</el-button>
              </div>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>
<script>
export default {
  validatePass2() {
    console.log("success")
  },
  data() {
    return {
      roleOptions: [{value:1,lable: "管理员"},{value:2,lable:"普通用户"}],
      userGroupOptions:  [{value:'管理员',lable: 1},{value:'普通用户',lable:2}],
      userForm: {
        username: "",
        role: "",
        station: "",
        contactNumber: "",
        email: "",
        password: "",
        checkPassword: "",
        userGroupList: "",
        allowLoginToIPSegmentStart: "",
        allowLoginToIPSegmentEnd: "",
        allowLoginToMACAddress: ""
      },
      rules: {
 
        username: [
          { required: true,  message: "<h1>Hello, world!</h1>", trigger: 'blur' }, 
          { min: 6, max: 20, message: 'Length 6-20', trigger: 'blur' }
          ],
        password: [{
          required: true,
          message: 'Password must be filled in',
          trigger: 'blur'
        }, {
          min: 6,
          max: 20,
          message: 'Length 6-20',
          trigger: 'blur'
        }],
        checkPassword: [{
          trigger: 'blur'
        }],
        role: [{
          required: true,
          message: 'Role must be filled in',
          trigger: 'blur'
        }],
        station: [{
          required: true,
          message: 'Station must be filled in',
          trigger: 'blur'
        }],
        contactNumber: [{
          required: true,
          message: 'ContactNumber must be filled in',
          trigger: 'blur'
        }, {
          type: 'number',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'Email must be filled in',
          trigger: 'blur'
        }, {
          type: 'email',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
     register(userForm) {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          console.log('success submit!!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
};
</script>