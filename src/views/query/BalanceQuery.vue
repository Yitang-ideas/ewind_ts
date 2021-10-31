<template>
  <div>
    <h1>余额查询</h1>
    <div class="content">
      <div class="topbar">
        <label for="">日期范围</label>
        <input type="date" />
        <span> to </span>
        <input type="date" />
        <base-button name="查询"></base-button>
      </div>
      <table id="customers">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Address</th>
          <th>City</th>
        </tr>
        <tr>
          <td>Alibaba</td>
          <td>Ma Yun</td>
          <td>No. 699, Wangshang Road, Binjiang District</td>
          <td>Hangzhou</td>
        </tr>
        <tr>
          <td>APPLE</td>
          <td>Tim Cook</td>
          <td>1 Infinite Loop Cupertino, CA 95014</td>
          <td>Cupertino</td>
        </tr>
        <tr>
          <td>BAIDU</td>
          <td>Li YanHong</td>
          <td>Lixiang guoji dasha,No 58, beisihuanxilu</td>
          <td>Beijing</td>
        </tr>
        <tr>
          <td>Canon</td>
          <td>Tsuneji Uchida</td>
          <td>One Canon Plaza Lake Success, NY 11042</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Google</td>
          <td>Larry Page</td>
          <td>1600 Amphitheatre Parkway Mountain View, CA 94043</td>
          <td>Mountain View</td>
        </tr>
        <tr>
          <td>HUAWEI</td>
          <td>Ren Zhengfei</td>
          <td>Putian Huawei Base, Longgang District</td>
          <td>Shenzhen</td>
        </tr>
        <tr>
          <td>Microsoft</td>
          <td>Bill Gates</td>
          <td>15700 NE 39th St Redmond, WA 98052</td>
          <td>Redmond</td>
        </tr>
        <tr>
          <td>Nokia</td>
          <td>Olli-Pekka Kallasvuo</td>
          <td>P.O. Box 226, FIN-00045 Nokia Group</td>
          <td>Helsinki</td>
        </tr>
        <tr>
          <td>SONY</td>
          <td>Kazuo Hirai</td>
          <td>Park Ridge, NJ 07656</td>
          <td>Park Ridge</td>
        </tr>
        <tr>
          <td>Tencent</td>
          <td>Ma Huateng</td>
          <td>Tencent Building, High-tech Park, Nanshan District</td>
          <td>Shenzhen</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "../../components/ui/BaseButton.vue";

export default defineComponent({
  components: {
    BaseButton
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.topbar {
  float: left;
  line-height: 100px;
  & * {
    margin-right: 10px;
    font-size: 14px;
  }
  & input {
    height: 32px;
    line-height: 32px;
    border-radius: 3px;
    border-color: $main-color-light;
    border: 0.5px solid;
  }
  & :nth-child(1) {
    margin-left: 10px;
  }
}
#customers {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: $main-color-light;
  color: white;
}
</style>
