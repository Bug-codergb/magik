import type { INav } from "~/interface/nav";
import home from "~/assets/svg/home.vue";
import explore from "~/assets/svg/explore.vue";
import notify from "~/assets/svg/notify.vue";
import message from "~/assets/svg/message.vue";
import community from "~/assets/svg/community.vue";
import list from "~/assets/svg/list.vue";
import tag from "~/assets/svg/tag.vue";
import profile from "~/assets/svg/profile.vue";
import more from "~/assets/svg/more.vue";

import RecommendHeader from "~/components/recommend-header/index.vue";
import UserHeader from "~/components/user-header/index.vue";
export const menu: INav[] = [
  {
    title: "主页",
    icon: home,
    isRoute: true,
    path: "/home",
    header: RecommendHeader
  },
  {
    title: "探索",
    icon: explore,
    isRoute: true,
    path: "/home/explore",
    header: <div>118</div>
  },
  {
    title: "通知",
    icon: notify,
    isRoute: true,
    path: "/home/notify",
    header: <div>117</div>
  },
  {
    title: "私信",
    icon: message,
    isRoute: true,
    path: "/home/message",
    header: <div>116</div>
  },
  {
    title: "列表",
    icon: list,
    isRoute: true,
    path: "/home/list",
    header: <div>115</div>
  },
  {
    title: "书签",
    icon: tag,
    isRoute: true,
    path: "/home/tag",
    header: <div>114</div>
  },
  {
    title: "社区",
    icon: community,
    isRoute: true,
    path: "/home/community",
    header: <div>113</div>
  },
  {
    title: "个人资料",
    icon: profile,
    isRoute: true,
    path: "/home/profile",
    header: <UserHeader />
  },
  {
    title: "更多",
    icon: more,
    isRoute: false,
    path: "",
    header: <div>111</div>
  }
];
