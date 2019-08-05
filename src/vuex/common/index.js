const state = {
    footerNav: [
        {"name": "首页", "route": "home", "icon": "home-icon", "checkicon": "check-home-icon"},
        {"name": "VIP专区", "route": "vipList", "icon": "vip-icon", "checkicon": "check-vip-icon"},
        {"name": "会员中心", "route": "memberCentre", "icon": "member-centre-icon", "checkicon": "check-member-centre-icon"}
    ],
    rechargeOpt:[{
          "type": "year",
          "title": "年卡VIP",
          "gift": "赠：精品VR眼镜（包邮）",
          "currentPrice": "180",
          "originalPrice": "360",
          "discount": "限时5.0折",
          "priceDay": "0.49/天"
        },{
          "type": "halfyear",
          "title": "半年VIP",
          "currentPrice": "99",
          "originalPrice": "180",
          "discount": "限时5.5折",
          "priceDay": "0.55/天"
        },{
          "type": "month",
          "title": "月卡VIP",
          "currentPrice": "21",
          "originalPrice": "30",
          "discount": "限时7折",
          "priceDay": "0.7/天"
        }
    ]
};

const mutations = {
    //
};

const actions = {
    //
};

export default {
  state,
  actions,
  mutations
};
