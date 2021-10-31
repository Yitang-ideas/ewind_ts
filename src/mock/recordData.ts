// id 公司名称 充值数量 余额 充值日期 备注
// 查询：开始日期 - 结束日期

export interface CreditProp {
  id: number;
  companyName: string;
  rechargeAmount: number;
  balance: number;
  rechargeDate: Date;
  remark: string;
}

const creditRecords: CreditProp[] = [
  {
    id: 1,
    companyName: "some company",
    rechargeAmount: 1000,
    balance: 300,
    rechargeDate: new Date("2021"),
    remark: "some remark"
  },
  {
    id: 2,
    companyName: "some company",
    rechargeAmount: 1000,
    balance: 300,
    rechargeDate: new Date("2021"),
    remark: "some remark"
  },
  {
    id: 3,
    companyName: "some company",
    rechargeAmount: 1000,
    balance: 300,
    rechargeDate: new Date("2021"),
    remark: "some remark"
  },
  {
    id: 4,
    companyName: "some company",
    rechargeAmount: 1000,
    balance: 300,
    rechargeDate: new Date("2021"),
    remark: "some remark"
  },
  {
    id: 5,
    companyName: "some company",
    rechargeAmount: 1000,
    balance: 300,
    rechargeDate: new Date("2021"),
    remark: "some remark"
  }
];

export default creditRecords;
