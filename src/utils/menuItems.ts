export interface MenuSubItemProp {
  icon: string;
  title: string;
  link: string;
  isSub: boolean;
  hasSub: boolean;
}

export interface MenuItemProp {
  icon: string;
  title: string;
  link: string;
  isSub: boolean;
  hasSub: boolean;
  subs: MenuSubItemProp[] | [];
}

export const menuTree: MenuItemProp[] = [
  {
    icon: "&#xe7d9;",
    title: "禁词上传",
    link: "/upload/words",
    hasSub: false,
    isSub: false,
    subs: []
  },
  {
    icon: "&#xe670;",
    title: "质检管理",
    link: "",
    hasSub: true,
    isSub: false,
    subs: [
      {
        icon: "&#xe64c;",
        title: "敏感词质检",
        link: "/inspection/sensitive",
        isSub: true,
        hasSub: false
      },
      {
        icon: "&#xe8b9;",
        title: "意向词质检",
        link: "/inspection/intention",
        isSub: true,
        hasSub: false
      },
      {
        icon: "&#xee27;",
        title: "自定义质检",
        link: "/inspection/self",
        isSub: true,
        hasSub: false
      }
    ]
  },
  {
    icon: "&#xe684;",
    title: "数据分析",
    link: "",
    isSub: false,
    hasSub: true,
    subs: [
      {
        icon: "&#xe609;",
        title: "敏感词分析",
        link: "/analysis/sensitive",
        isSub: true,
        hasSub: false
      },
      {
        icon: "&#xe604;",
        title: "意向词分析",
        link: "/analysis/intention",
        isSub: true,
        hasSub: false
      }
    ]
  },
  {
    icon: "&#xe6c0;",
    title: "密匙管理",
    link: "/manage/key",
    isSub: false,
    hasSub: false,
    subs: []
  },
  {
    icon: "&#xe678;",
    title: "任务管理",
    link: "/manage/task",
    isSub: false,
    hasSub: false,
    subs: []
  },
  {
    icon: "&#xe610;",
    title: "信息查询",
    link: "",
    isSub: false,
    hasSub: true,
    subs: [
      {
        icon: "&#xe66e;",
        title: "余额查询",
        link: "/query/balance",
        isSub: true,
        hasSub: false
      }
    ]
  },
  {
    icon: "&#xe62f;",
    title: "用户管理",
    link: "/manage/user",
    isSub: false,
    hasSub: false,
    subs: []
  }
];
