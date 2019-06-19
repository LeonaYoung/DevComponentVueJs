module.exports = {
  name: "dev-component-vue-js",
  type: "component",
  frame: 'vue',
  isTs: false,
  isBlank: true,
  detail: '通用Vue组件模板；',
  parentId: null,
  description: 'vue dev component sample',
  path: 'https://github.com/LeonaYoung/DevComponentVueJs.git',
  version: '0.0.1',
  status: 1,
  approveStatus: 1,
  pulgins: {
    hook: [
      {
        name: 'replaceName',
        params: {
          originStr: 'VueDevComponent',
          targetStr: 'HaHa',
          type: 'compoentsPath',
        },
      },
    ],
  },
};