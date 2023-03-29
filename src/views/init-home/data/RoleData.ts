/**
 * 内置角色数据
 */
export enum ROLEKEYS {
  'device' = 'device',
  'link' = 'link',
  'complex' = 'complex',
}

export type roleKeysType = keyof typeof ROLEKEYS;

export const RoleData = {
  [ROLEKEYS.device]: {
    name: '设备接入岗',
    description: '该角色负责设备接入模块的维护管理',
    state: { text: '正常', value: 'enabled' },
  },
  [ROLEKEYS.link]: {
    name: '运维管理岗',
    description: '该角色负责系统运维模块的维护管理',
    state: { text: '正常', value: 'enabled' },
  },
  [ROLEKEYS.complex]: {
    name: '综合管理岗',
    description: '该角色负责系统运维和设备接入模块的维护管理',
    state: { text: '正常', value: 'enabled' },
  },
};

export default {
  [ROLEKEYS.device]: [
    {
      assetAccesses: [],
      code: "device/DashBoard",
      createTime: 1679906031144,
      granted: true,
      icon: "icon-keshihua",
      id: "68a02c9efa9fb4885c89b007f97d074d",
      level: 3,
      name: "仪表盘",
      owner: "iot",
      parentId: "b6327c3ff01b49c9a7a96101606dc27a",
      path: "WXaI-KCgA-gBU0",
      sortIndex: 1,
      url: "/iot/device/DashBoard",
    },
    {
      id: '1-3-2',
      parentId: '1-3',
      path: 'T4zX-b4q8-o7Jy',
      sortIndex: 2,
      level: 1,
      name: '产品',
      code: 'device/Product',
      icon: 'icon-chanpin',
      url: '/iot/device/Product',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'update',
          name: '编辑',
          enabled: true,
          granted: true,
        },
        { id: 'action', name: '启/禁用', enabled: true, granted: true },
        {
          id: 'export',
          name: '导出',
          enabled: true,
          granted: true,
        },
        { id: 'import', name: '导入', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      accessSupport: { text: '支持', value: 'support' },
      assetType: 'product',
      assetAccesses: [
        {
          supportId: 'ignore',
          name: '全部数据',
          enabled: false,
          granted: false,
        },
        { supportId: 'creator', name: '自己创建的', enabled: true, granted: true },
        {
          supportId: 'org',
          name: '所在组织',
          enabled: false,
          granted: false,
        },
        {
          supportId: 'org-include-children',
          name: '所在组织及下级组织',
          enabled: false,
          granted: false,
        },
      ],
      options: { switch: true },
      createTime: 1659344075524,
      accessDescription: '此菜单支持数据权限控制',
      granted: true,
    },
    {
      id: '1-3-3',
      parentId: '1-3',
      path: 'T4zX-b4q8-xYd0',
      sortIndex: 3,
      level: 1,
      name: '设备',
      code: 'device/Instance',
      icon: 'icon-shebei',
      url: '/iot/device/Instance',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'export',
          name: '导出',
          enabled: true,
          granted: true,
        },
        { id: 'import', name: '导入', enabled: true, granted: true },
        {
          id: 'update',
          name: '编辑',
          enabled: true,
          granted: true,
        },
        { id: 'action', name: '启/禁用', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      accessSupport: { text: '支持', value: 'support' },
      assetType: 'device',
      assetAccesses: [
        {
          supportId: 'ignore',
          name: '全部数据',
          enabled: false,
          granted: false,
        },
        { supportId: 'creator', name: '自己创建的', enabled: true, granted: true },
        {
          supportId: 'org',
          name: '所在组织',
          enabled: false,
          granted: false,
        },
        {
          supportId: 'org-include-children',
          name: '所在组织及下级组织',
          enabled: false,
          granted: false,
        },
      ],
      options: { switch: true },
      createTime: 1659344075524,
      accessDescription: '此菜单支持数据权限控制',
      granted: true,
    },
    {
      id: '1-3-4',
      parentId: '1-3',
      path: 'T4zX-b4q8-8ZFx',
      sortIndex: 4,
      level: 3,
      name: '产品分类',
      code: 'device/Category',
      icon: 'icon-chanpinfenlei1',
      url: '/iot/device/Category',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
      ],
      assetAccesses: [{
        supportId: 'ignore',
        name: '全部数据',
        enabled: false,
        granted: false,
      },
      { supportId: 'creator', name: '自己创建的', enabled: true, granted: true },
      {
        supportId: 'org',
        name: '所在组织',
        enabled: false,
        granted: false,
      },
      {
        supportId: 'org-include-children',
        name: '所在组织及下级组织',
        enabled: false,
        granted: false,
      },],
      options: { switch: true },
      createTime: 1659344075524,
      granted: true,
    },
  ],
  [ROLEKEYS.link]: [
    {
      assetAccesses: [],
      code: "link/DashBoard",
      createTime: 1679994088091,
      granted: true,
      icon: "icon-keshihua",
      id: "47bedff9df89ecc0f0ce896e53805f02",
      level: 3,
      name: "仪表盘",
      owner: "iot",
      parentId: "bd55cdc9d0c1700afe628f572f91c22e",
      path: "rmJT-eI2B-2yTR",
      sortIndex: 1,
      url: "/iot/link/dashboard",
    },
    {
      id: '1-4-2',
      parentId: '1-4',
      path: 'T4zX-A0TC-UlSD',
      sortIndex: 2,
      level: 3,
      name: '设备接入网关',
      code: 'link/AccessConfig',
      icon: 'icon-wangguanzishebei',
      url: '/iot/link/accessConfig',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'action', name: '启/禁用', enabled: true, granted: true },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-3',
      parentId: '1-4',
      path: 'T4zX-A0TC-ctFm',
      sortIndex: 3,
      level: 3,
      name: '协议管理',
      code: 'link/Protocol',
      icon: 'icon-tongzhiguanli',
      url: '/iot/link/protocol',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        { id: 'delete', name: '删除', enabled: true, granted: true },
        {
          id: 'update',
          name: '编辑',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    }, {
      assetAccesses: [],
      code: "Log",
      createTime: 1679994088091,
      granted: true,
      icon: "icon-rizhifuwu",
      id: "c340f8977e0d221da893715cab58ae8c",
      level: 3,
      name: "日志管理",
      owner: "iot",
      parentId: "bd55cdc9d0c1700afe628f572f91c22e",
      path: "rmJT-eI2B-xH5Y",
      sortIndex: 1,
      url: "/iot/link/Log",
    },
    {
      id: '1-4-5',
      parentId: '1-4',
      path: 'T4zX-A0TC-fDic',
      sortIndex: 5,
      level: 3,
      name: '网络组件',
      code: 'link/Type',
      icon: 'icon-wangluozujian',
      url: '/iot/link/type',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'action',
          name: '启/禁用',
          enabled: true,
          granted: true,
        },
        { id: 'delete', name: '删除', enabled: true, granted: true },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-6',
      parentId: '1-4',
      path: 'T4zX-A0TC-bBs5',
      sortIndex: 6,
      level: 3,
      name: '证书管理',
      code: 'link/Certificate',
      icon: 'icon-rizhifuwu',
      url: '/iot/link/Certificate',
      buttons: [
        { id: 'delete', name: '删除', enabled: true, granted: true },
        {
          id: 'update',
          name: '编辑',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
        { id: 'view', name: '查看', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-7',
      parentId: '1-4',
      path: 'T4zX-A0TC-VilV',
      sortIndex: 7,
      level: 3,
      name: '流媒体服务',
      code: 'media/Stream',
      icon: 'icon-xuanzetongdao1',
      url: '/iot/link/Stream',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
        {
          id: 'action',
          name: '启/禁用',
          enabled: true,
          granted: true,
        },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-8-1',
      parentId: '1-4-8',
      path: 'T4zX-A0TC-GIE8-3Op3',
      sortIndex: 1,
      level: 4,
      name: 'OPC UA',
      code: 'link/Channel/Opcua',
      icon: 'icon-zhilianshebei',
      url: '/iot/link/Channel/Opcua',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'action',
          name: '启/禁用',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-8-2',
      parentId: '1-4-8',
      path: 'T4zX-A0TC-GIE8-79SB',
      sortIndex: 2,
      level: 4,
      name: 'Modbus',
      code: 'link/Channel/Modbus',
      icon: 'icon-changjingliandong',
      url: '/iot/link/Channel/Modbus',
      buttons: [
        { id: 'update', name: '编辑', enabled: true, granted: true },
        {
          id: 'action',
          name: '启/禁用',
          enabled: true,
          granted: true,
        },
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-9',
      parentId: '1-4',
      path: 'T4zX-A0TC-BFum',
      sortIndex: 9999,
      level: 1,
      name: '远程升级',
      code: 'device/Firmware',
      icon: 'icon-wangluozujian',
      url: '/iot/link/firmware',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        { id: 'update', name: '编辑', enabled: true, granted: true },
        { id: 'delete', name: '删除', enabled: true, granted: true },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
      ],
      accessSupport: { text: '不支持', value: 'unsupported' },
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      accessDescription: '此菜单不支持数据权限控制',
      granted: true,
    },
  ],
  [ROLEKEYS.complex]: [
    {
      assetAccesses: [],
      code: "device/DashBoard",
      createTime: 1679906031144,
      granted: true,
      icon: "icon-keshihua",
      id: "68a02c9efa9fb4885c89b007f97d074d",
      level: 3,
      name: "仪表盘",
      owner: "iot",
      parentId: "b6327c3ff01b49c9a7a96101606dc27a",
      path: "WXaI-KCgA-gBU0",
      sortIndex: 1,
      url: "/iot/device/DashBoard",
    },
    {
      id: '1-3-2',
      parentId: '1-3',
      path: 'T4zX-b4q8-o7Jy',
      sortIndex: 2,
      level: 1,
      name: '产品',
      code: 'device/Product',
      icon: 'icon-chanpin',
      url: '/iot/device/Product',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'update',
          name: '编辑',
          enabled: true,
          granted: true,
        },
        { id: 'action', name: '启/禁用', enabled: true, granted: true },
        {
          id: 'export',
          name: '导出',
          enabled: true,
          granted: true,
        },
        { id: 'import', name: '导入', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      accessSupport: { text: '支持', value: 'support' },
      assetType: 'product',
      assetAccesses: [
        {
          supportId: 'ignore',
          name: '全部数据',
          enabled: false,
          granted: false,
        },
        { supportId: 'creator', name: '自己创建的', enabled: true, granted: true },
        {
          supportId: 'org',
          name: '所在组织',
          enabled: false,
          granted: false,
        },
        {
          supportId: 'org-include-children',
          name: '所在组织及下级组织',
          enabled: false,
          granted: false,
        },
      ],
      options: { switch: true },
      createTime: 1659344075524,
      accessDescription: '此菜单支持数据权限控制',
      granted: true,
    },
    {
      id: '1-3-3',
      parentId: '1-3',
      path: 'T4zX-b4q8-xYd0',
      sortIndex: 3,
      level: 1,
      name: '设备',
      code: 'device/Instance',
      icon: 'icon-shebei',
      url: '/iot/device/Instance',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'export',
          name: '导出',
          enabled: true,
          granted: true,
        },
        { id: 'import', name: '导入', enabled: true, granted: true },
        {
          id: 'update',
          name: '编辑',
          enabled: true,
          granted: true,
        },
        { id: 'action', name: '启/禁用', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      accessSupport: { text: '支持', value: 'support' },
      assetType: 'device',
      assetAccesses: [
        {
          supportId: 'ignore',
          name: '全部数据',
          enabled: false,
          granted: false,
        },
        { supportId: 'creator', name: '自己创建的', enabled: true, granted: true },
        {
          supportId: 'org',
          name: '所在组织',
          enabled: false,
          granted: false,
        },
        {
          supportId: 'org-include-children',
          name: '所在组织及下级组织',
          enabled: false,
          granted: false,
        },
      ],
      options: { switch: true },
      createTime: 1659344075524,
      accessDescription: '此菜单支持数据权限控制',
      granted: true,
    },
    {
      id: '1-3-4',
      parentId: '1-3',
      path: 'T4zX-b4q8-8ZFx',
      sortIndex: 4,
      level: 3,
      name: '产品分类',
      code: 'device/Category',
      icon: 'icon-chanpinfenlei1',
      url: '/iot/device/Category',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
      ],
      assetAccesses: [{
        supportId: 'ignore',
        name: '全部数据',
        enabled: false,
        granted: false,
      },
      { supportId: 'creator', name: '自己创建的', enabled: true, granted: true },
      {
        supportId: 'org',
        name: '所在组织',
        enabled: false,
        granted: false,
      },
      {
        supportId: 'org-include-children',
        name: '所在组织及下级组织',
        enabled: false,
        granted: false,
      }],
      options: { switch: true },
      createTime: 1659344075524,
      granted: true,
    },
    {
      assetAccesses: [],
      code: "link/DashBoard",
      createTime: 1679994088091,
      granted: true,
      icon: "icon-keshihua",
      id: "47bedff9df89ecc0f0ce896e53805f02",
      level: 3,
      name: "仪表盘",
      owner: "iot",
      parentId: "bd55cdc9d0c1700afe628f572f91c22e",
      path: "rmJT-eI2B-2yTR",
      sortIndex: 1,
      url: "/iot/link/dashboard",
    },
    {
      id: '1-4-2',
      parentId: '1-4',
      path: 'T4zX-A0TC-UlSD',
      sortIndex: 2,
      level: 3,
      name: '设备接入网关',
      code: 'link/AccessConfig',
      icon: 'icon-wangguanzishebei',
      url: '/iot/link/accessConfig',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'action', name: '启/禁用', enabled: true, granted: true },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-3',
      parentId: '1-4',
      path: 'T4zX-A0TC-ctFm',
      sortIndex: 3,
      level: 3,
      name: '协议管理',
      code: 'link/Protocol',
      icon: 'icon-tongzhiguanli',
      url: '/iot/link/protocol',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        { id: 'delete', name: '删除', enabled: true, granted: true },
        {
          id: 'update',
          name: '编辑',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      assetAccesses: [],
      code: "Log",
      createTime: 1679994088091,
      granted: true,
      icon: "icon-rizhifuwu",
      id: "c340f8977e0d221da893715cab58ae8c",
      level: 3,
      name: "日志管理",
      owner: "iot",
      parentId: "bd55cdc9d0c1700afe628f572f91c22e",
      path: "rmJT-eI2B-xH5Y",
      sortIndex: 1,
      url: "/iot/link/Log",
    },
    {
      id: '1-4-5',
      parentId: '1-4',
      path: 'T4zX-A0TC-fDic',
      sortIndex: 5,
      level: 3,
      name: '网络组件',
      code: 'link/Type',
      icon: 'icon-wangluozujian',
      url: '/iot/link/type',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'action',
          name: '启/禁用',
          enabled: true,
          granted: true,
        },
        { id: 'delete', name: '删除', enabled: true, granted: true },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-6',
      parentId: '1-4',
      path: 'T4zX-A0TC-bBs5',
      sortIndex: 6,
      level: 3,
      name: '证书管理',
      code: 'link/Certificate',
      icon: 'icon-rizhifuwu',
      url: '/iot/link/Certificate',
      buttons: [
        { id: 'delete', name: '删除', enabled: true, granted: true },
        {
          id: 'update',
          name: '编辑',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
        { id: 'view', name: '查看', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-7',
      parentId: '1-4',
      path: 'T4zX-A0TC-VilV',
      sortIndex: 7,
      level: 3,
      name: '流媒体服务',
      code: 'media/Stream',
      icon: 'icon-xuanzetongdao1',
      url: '/iot/link/Stream',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
        {
          id: 'action',
          name: '启/禁用',
          enabled: true,
          granted: true,
        },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-8-1',
      parentId: '1-4-8',
      path: 'T4zX-A0TC-GIE8-3Op3',
      sortIndex: 1,
      level: 4,
      name: 'OPC UA',
      code: 'link/Channel/Opcua',
      icon: 'icon-zhilianshebei',
      url: '/iot/link/Channel/Opcua',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'action',
          name: '启/禁用',
          enabled: true,
          granted: true,
        },
        { id: 'update', name: '编辑', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-8-2',
      parentId: '1-4-8',
      path: 'T4zX-A0TC-GIE8-79SB',
      sortIndex: 2,
      level: 4,
      name: 'Modbus',
      code: 'link/Channel/Modbus',
      icon: 'icon-changjingliandong',
      url: '/iot/link/Channel/Modbus',
      buttons: [
        { id: 'update', name: '编辑', enabled: true, granted: true },
        {
          id: 'action',
          name: '启/禁用',
          enabled: true,
          granted: true,
        },
        { id: 'view', name: '查看', enabled: true, granted: true },
        {
          id: 'delete',
          name: '删除',
          enabled: true,
          granted: true,
        },
        { id: 'add', name: '新增', enabled: true, granted: true },
      ],
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      granted: true,
    },
    {
      id: '1-4-9',
      parentId: '1-4',
      path: 'T4zX-A0TC-BFum',
      sortIndex: 9999,
      level: 1,
      name: '远程升级',
      code: 'device/Firmware',
      icon: 'icon-wangluozujian',
      url: '/iot/link/firmware',
      buttons: [
        { id: 'view', name: '查看', enabled: true, granted: true },
        { id: 'update', name: '编辑', enabled: true, granted: true },
        { id: 'delete', name: '删除', enabled: true, granted: true },
        {
          id: 'add',
          name: '新增',
          enabled: true,
          granted: true,
        },
      ],
      accessSupport: { text: '不支持', value: 'unsupported' },
      assetAccesses: [],
      options: {},
      createTime: 1659344075524,
      accessDescription: '此菜单不支持数据权限控制',
      granted: true,
    },
  ],
};
