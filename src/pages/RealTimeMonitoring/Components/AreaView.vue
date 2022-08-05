<template>
  <div class="Cameralist">
    <el-button size="mini" style="margin-left: 10px">添加</el-button>
    <el-table
      :data="tableData.filter(data => !search || data.count.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="摄像机编号" prop="id"></el-table-column>
      <el-table-column label="摄像机处理区域" prop="area"></el-table-column>
      <el-table-column label="区域当前人数" prop="count"></el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10,20,30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="30"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 2,
      tableData: [
        {
          id: "1001",
          area: "企业自检区1",
          count: "10"
        },
        {
          id: "1002",
          area: "企业自检区2",
          count: "50"
        },
        {
          id: "1003",
          area: "入口验证区",
          count: "60"
        },
        {
          id: "1004",
          area: "形象墙",
          count: "30"
        },
        {
          id: "1001",
          area: "企业自检区1",
          count: "10"
        },
        {
          id: "1002",
          area: "企业自检区2",
          count: "50"
        },
        {
          id: "1003",
          area: "入口验证区",
          count: "60"
        },
        {
          id: "1004",
          area: "形象墙",
          count: "30"
        },
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 分页方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
