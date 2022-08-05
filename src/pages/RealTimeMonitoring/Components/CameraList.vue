<template>
  <div class="Cameralist">
    <el-button size="mini" style="margin-left: 10px">添加</el-button>
    <el-button size="mini" type="danger">删除</el-button>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="摄像机id号" prop="id"></el-table-column>
      <el-table-column label="摄像机ip地址" prop="address"></el-table-column>
      <el-table-column label="摄像机av通道名称" prop="name"></el-table-column>
      <el-table-column label="摄像头是否在线" prop="isOnline"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" style="margin-right: 5px"/>
        </template>
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
          address: "83.20.115.81",
          name: "上海",
          isOnline: "在线"
        },
        {
          id: "1002",
          address: "83.20.115.82",
          name: "北京",
          isOnline: "在线"
        },
        {
          id: "1003",
          address: "83.20.115.83",
          name: "河南",
          isOnline: "在线"
        },
        {
          id: "1004",
          address: "83.20.115.84",
          name: "江苏",
          isOnline: "在线"
        }
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
