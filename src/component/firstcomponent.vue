<template>
  <div>
    <el-form ref="modelRuleForm" :rules="ruleModel.rules" :model="ruleModel" label-width="100px">
      <el-card
        class="box-card"
        v-for="(item,index) in ruleModel.dataList"
        :key="item.buyerId"
        style="margin-top:20px;width:940px;"
      >
        <div slot="header" class="clearfix">
          <span>采购员：{{item.buyerName+'/'+item.buyerJobNo}}&nbsp;&nbsp;&nbsp;&nbsp;采购部门：{{item.purchaseDepartmentName}}</span>
        </div>
        <div v-for="(model,itemIndex) in item.list" :key="model.pleaseBuyDetailId">
          <el-table
            :data="[model]"
            stripe
            style="width: 100%"
            border
            fit
            highlight-current-row
            header-cell-class-name="deepen-table-header"
          >
            <el-table-column label="序号" width="50" align="center">
   
            </el-table-column>
            <el-table-column prop="materialName" label="物料名称" width="180" align="center" />
            <el-table-column label="需到货日" width="180" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.demandDate | parseTime('{y}-{m}-{d}') }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="purchaseDepartmentName" label="采购部门" align="center" />
            <el-table-column prop="buyerName" label="采购员" align="center" />
            <el-table-column prop="completeTime" label="采购完成时间" align="center" />
          </el-table>
          <el-form-item
            label="到货及时率"
            :prop="'dataList.'+index+'.list.'+itemIndex+'.arrivalTimeRate'"
          >
            <el-rate v-model="model.arrivalTimeRate" show-text :texts="rateTexts"></el-rate>
          </el-form-item>
          <el-form-item label="物料合格率" :prop="'dataList.'+index+'.list.'+itemIndex+'.materialRate'">
            <el-rate v-model="model.materialRate" show-text :texts="rateTexts"></el-rate>
          </el-form-item>
          <el-form-item label="评价内容" :prop="'dataList.'+index+'.list.'+itemIndex+'.commentContent'">
            <el-input type="textarea" v-model="model.commentContent"></el-input>
          </el-form-item>
        </div>
      </el-card>
    </el-form>
  </div>
</template>
<script>
export default {
  ruleModel: {
    dataList: {item:"aaa", index:1},
    rules: {
      arrivalTimeRate: [
        { required: true, message: "请评价到货及时率", trigger: "change" }
      ],
      materialRate: [
        { required: true, message: "请评价物料合格率", trigger: "change" }
      ],
      commentContent: [
        { required: true, message: "请填写评价内容", trigger: "change" }
      ]
    }
  }
  // methods: {
  //   submitForm(formName) {
  //     this.$refs["modelRuleForm"].validate(valid => { if (valid) { alert("验证成功"); } });
  //   },
  //   resetForm(formName) {
  //     this.$refs[formName].resetFields();
  //   }
  // }
};
</script>