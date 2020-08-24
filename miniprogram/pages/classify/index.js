const Routing = require('../../utils/routing')
let app = getApp()

// pages/classify/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    screeningArr: ['销量', '价格'],
    screeningIndex: 0,
    activeKey: 0,
    //数据
    dataSoure: [
      {
        name: '\u5168\u90e8\u5546\u54c1',
        goods_list: [
          {
            goods_id: '1',
            goods_name: '\u9ed1\u6728\u8033',
            shop_price: '35.00',
            original_img:
              '/public/upload/goods/2020/06-30/51a111112612cbf97a77cd8ba74e1842.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '2',
            goods_name: '\u7334 \u5934',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/06-30/ddfd7e6bbbe655da62387d5a1d8a6a4b.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '3',
            goods_name: '\u79cb\u6728\u8033',
            shop_price: '42.00',
            original_img:
              '/public/upload/goods/2020/06-30/cfa34a5ad1e4f6ce0ceef5537fb80038.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '4',
            goods_name: '\u5143 \u8611',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-01/a40e7c849c04206c7557772beb66587f.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '5',
            goods_name: '\u699b \u8611',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/1e6122203af6278c0607a20b07003d8b.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '6',
            goods_name: '\u94f6 \u8033',
            shop_price: '30.00',
            original_img:
              '/public/upload/goods/2020/07-01/a31f9deb66a7d349ced7b4edc1ecd977.jpg',
            sales_sum: '1',
            width: '800',
            height: '800',
          },
          {
            goods_id: '7',
            goods_name: '\u7334\u5934\u76d2\u88c5',
            shop_price: '50.00',
            original_img:
              '/public/upload/goods/2020/07-01/7fc747d7decd07c020f6af4993b8771d.png',
            sales_sum: '1',
            width: '800',
            height: '800',
          },
          {
            goods_id: '8',
            goods_name: '\u9ed1\u6728\u8033\u76d2\u88c5',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-01/f98c5d5f49f7a037793df870ebb82764.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '9',
            goods_name: '\u5143\u8611\u76d2\u88c5',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/bf7a4bf862ad9398636607ff42993e4c.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '10',
            goods_name: '\u9999\u83c7\u76d2\u88c5',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/edebe495a6d90be79981439f68229e25.jpg',
            sales_sum: '1',
            width: '800',
            height: '800',
          },
          {
            goods_id: '11',
            goods_name: '\u699b\u8611\u76d2\u88c5',
            shop_price: '48.00',
            original_img:
              '/public/upload/goods/2020/07-01/bdf423712f73c62a890804e4a9654884.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '12',
            goods_name: '\u79cb\u6728\u8033\u76d2\u88c5',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/18452f1ef0cdbed59171f2220db1f2eb.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '13',
            goods_name: '\u538b\u7f29\u7334\u5934',
            shop_price: '50.00',
            original_img:
              '/public/upload/goods/2020/07-01/c4c6a83e4b0917d22080076fc9c56580.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '14',
            goods_name: '\u538b\u7f29\u5143\u8611',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/5c4aee3a10893439c4213f62b6efe04e.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '15',
            goods_name: '\u538b\u7f29\u79cb\u6728\u8033',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/861fd66d858d5966158703f8c7593c45.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '16',
            goods_name: '\u538b\u7f29\u9ed1\u6728\u8033',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-01/52861c6cdb3947e69a06befe3a7e134c.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '17',
            goods_name: '\u538b\u7f29\u699b\u8611',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/2c8a9915ee089a5de5916334a3ac389d.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '18',
            goods_name: '\u9ed1\u68ee\u91ce\u751f\u79cb\u6728\u8033',
            shop_price: '180.00',
            original_img:
              '/public/upload/goods/2020/07-01/0c4652167909cb242c0c3e9c66a027db.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '19',
            goods_name: '\u9ed1\u68ee\u91d1\u94b1\u8033',
            shop_price: '160.00',
            original_img:
              '/public/upload/goods/2020/07-01/891126306ae6bb6f14b72741a71474c2.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '20',
            goods_name: '\u9ed1\u68ee\u51bb\u5e72\u677e\u8338\u7247',
            shop_price: '398.00',
            original_img:
              '/public/upload/goods/2020/07-01/764510106333225e6ed3ee6ea3873b87.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '21',
            goods_name: '\u9ed1\u68ee\u6652\u5e72\u677e\u8338\u7247',
            shop_price: '298.00',
            original_img:
              '/public/upload/goods/2020/07-01/4ea136650e2e2d8f33279580104a4600.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '22',
            goods_name: '\u9ed1\u68ee\u91ce\u751f\u7334\u5934',
            shop_price: '358.00',
            original_img:
              '/public/upload/goods/2020/07-01/20f122f2e3c37b70fca6cff86c374182.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '23',
            goods_name: '\u5c71\u699b\u5b50',
            shop_price: '80.00',
            original_img:
              '/public/upload/goods/2020/07-01/58a0aa80a9f2c2ec99ac971d88e2d2f7.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '24',
            goods_name: '\u5927\u699b\u5b50',
            shop_price: '50.00',
            original_img:
              '/public/upload/goods/2020/07-01/08a1986efa6847ff0d24c0dd38984b01.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '25',
            goods_name: '\u699b\u5b50\u4ec1',
            shop_price: '70.00',
            original_img:
              '/public/upload/goods/2020/07-01/b12ff0f83fd14ea2c0f6f72e48151304.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '26',
            goods_name: '\u7ea2\u677e\u7c7d\u4ec1',
            shop_price: '55.00',
            original_img:
              '/public/upload/goods/2020/07-02/f265d9f1efcd86868f25fbd93a8f2982.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '27',
            goods_name: '\u5c71\u699b\u5b50\u4ec1',
            shop_price: '35.00',
            original_img:
              '/public/upload/goods/2020/07-02/73ed784321a488aabf22d3c926b6a258.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '28',
            goods_name: '\u84dd\u8393\u679c\u5e72\u793c\u76d2',
            shop_price: '168.00',
            original_img:
              '/public/upload/goods/2020/07-02/f0a1f164c963566a39fb9201d998f20b.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '29',
            goods_name: '\u9ed1\u68ee\u84dd\u8393\u679c\u5e72',
            shop_price: '35.00',
            original_img:
              '/public/upload/goods/2020/07-02/e9cd5c6a151f2230999bbbf283a8dccc.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '30',
            goods_name: '\u9ed1\u68ee\u84dd\u8393\u679c\u5e72\u793c\u76d2',
            shop_price: '328.00',
            original_img:
              '/public/upload/goods/2020/07-02/f26d1d71ac4f8b4a598265e3dbb3ebf9.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '31',
            goods_name: '\u68ee\u6797\u6934\u6811\u871c',
            shop_price: '22.00',
            original_img:
              '/public/upload/goods/2020/07-02/11faa5d198490bbda079ef6cc1d74846.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '32',
            goods_name: '\u9ed1\u68ee\u6934\u6811\u871c',
            shop_price: '50.00',
            original_img:
              '/public/upload/goods/2020/07-02/509953a8745d52823f29612745144b1e.jpg',
            sales_sum: '1',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '33',
            goods_name: '\u9ed1\u8702\u6934\u6811\u871c\u65c5\u884c\u88c5',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-02/92b476491dd7751e2195ac0154f7e805.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '34',
            goods_name: '\u9ed1\u8702\u96ea\u871c\u65c5\u884c\u88c5',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-02/eb79e795077f4c9e0b7f667e92ef70ef.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '35',
            goods_name: '\u9ed1\u68ee\u5c0f\u7c73\u793c\u76d2',
            shop_price: '100.00',
            original_img:
              '/public/upload/goods/2020/07-02/1d1fff11d50640f5e4060be7d561e951.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '36',
            goods_name: '\u9ed1\u68ee\u7cd9\u7c73',
            shop_price: '9.00',
            original_img:
              '/public/upload/goods/2020/07-02/2b6dad46499b03d2220238d9d69e6d64.jpg',
            sales_sum: '1',
            width: '800',
            height: '800',
          },
          {
            goods_id: '37',
            goods_name: '\u9ed1\u68ee\u858f\u7c73',
            shop_price: '13.00',
            original_img:
              '/public/upload/goods/2020/07-02/18f7c7d5fc2aee1c16eb69530af6d766.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '38',
            goods_name: '\u9ed1\u68ee\u9ec4\u8c46',
            shop_price: '9.00',
            original_img:
              '/public/upload/goods/2020/07-02/e0c8c313a7c0f22a3d828dae780e757c.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '39',
            goods_name: '\u6709\u673a\u7a3b\u82b1\u9999\u7c73',
            shop_price: '180.00',
            original_img:
              '/public/upload/goods/2020/07-02/9dcadb92a8b2dc401f8f94a6e85ef00c.jpg',
            sales_sum: '2',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '40',
            goods_name: '\u5bcc\u7852\u7a3b\u82b1\u9999\u7c73',
            shop_price: '180.00',
            original_img:
              '/public/upload/goods/2020/07-02/32bed041c598a35c619853b915fadf34.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '41',
            goods_name: '\u7a3b\u82b1\u9999\uff08\u888b\u88c5\uff09',
            shop_price: '110.00',
            original_img:
              '/public/upload/goods/2020/07-02/74c23f4346ffbec3a46ec1866db45785.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '42',
            goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
            shop_price: '16.00',
            original_img:
              '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
            sales_sum: '2',
            width: '1200',
            height: '1200',
          },
        ],
      },
      {
        id: '1',
        name: '\u888b\u88c5\u83cc\u7c7b',
        goods_list: [
          {
            goods_id: '1',
            goods_name: '\u9ed1\u6728\u8033',
            shop_price: '35.00',
            original_img:
              '/public/upload/goods/2020/06-30/51a111112612cbf97a77cd8ba74e1842.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '2',
            goods_name: '\u7334 \u5934',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/06-30/ddfd7e6bbbe655da62387d5a1d8a6a4b.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '3',
            goods_name: '\u79cb\u6728\u8033',
            shop_price: '42.00',
            original_img:
              '/public/upload/goods/2020/06-30/cfa34a5ad1e4f6ce0ceef5537fb80038.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '4',
            goods_name: '\u5143 \u8611',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-01/a40e7c849c04206c7557772beb66587f.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '5',
            goods_name: '\u699b \u8611',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/1e6122203af6278c0607a20b07003d8b.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '6',
            goods_name: '\u94f6 \u8033',
            shop_price: '30.00',
            original_img:
              '/public/upload/goods/2020/07-01/a31f9deb66a7d349ced7b4edc1ecd977.jpg',
            sales_sum: '1',
            width: '800',
            height: '800',
          },
        ],
      },
      {
        id: '12',
        name: '\u5927\u7c73\u7cfb\u5217',
        goods_list: [
          {
            goods_id: '39',
            goods_name: '\u6709\u673a\u7a3b\u82b1\u9999\u7c73',
            shop_price: '180.00',
            original_img:
              '/public/upload/goods/2020/07-02/9dcadb92a8b2dc401f8f94a6e85ef00c.jpg',
            sales_sum: '2',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '40',
            goods_name: '\u5bcc\u7852\u7a3b\u82b1\u9999\u7c73',
            shop_price: '180.00',
            original_img:
              '/public/upload/goods/2020/07-02/32bed041c598a35c619853b915fadf34.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '41',
            goods_name: '\u7a3b\u82b1\u9999\uff08\u888b\u88c5\uff09',
            shop_price: '110.00',
            original_img:
              '/public/upload/goods/2020/07-02/74c23f4346ffbec3a46ec1866db45785.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
        ],
      },
      {
        id: '11',
        name: '\u6742\u7cae\u7c7b',
        goods_list: [
          {
            goods_id: '35',
            goods_name: '\u9ed1\u68ee\u5c0f\u7c73\u793c\u76d2',
            shop_price: '100.00',
            original_img:
              '/public/upload/goods/2020/07-02/1d1fff11d50640f5e4060be7d561e951.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '36',
            goods_name: '\u9ed1\u68ee\u7cd9\u7c73',
            shop_price: '9.00',
            original_img:
              '/public/upload/goods/2020/07-02/2b6dad46499b03d2220238d9d69e6d64.jpg',
            sales_sum: '1',
            width: '800',
            height: '800',
          },
          {
            goods_id: '37',
            goods_name: '\u9ed1\u68ee\u858f\u7c73',
            shop_price: '13.00',
            original_img:
              '/public/upload/goods/2020/07-02/18f7c7d5fc2aee1c16eb69530af6d766.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '38',
            goods_name: '\u9ed1\u68ee\u9ec4\u8c46',
            shop_price: '9.00',
            original_img:
              '/public/upload/goods/2020/07-02/e0c8c313a7c0f22a3d828dae780e757c.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
        ],
      },
      {
        id: '9',
        name: '\u8702\u4ea7\u54c1\u7cfb\u5217',
        goods_list: [
          {
            goods_id: '31',
            goods_name: '\u68ee\u6797\u6934\u6811\u871c',
            shop_price: '22.00',
            original_img:
              '/public/upload/goods/2020/07-02/11faa5d198490bbda079ef6cc1d74846.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '32',
            goods_name: '\u9ed1\u68ee\u6934\u6811\u871c',
            shop_price: '50.00',
            original_img:
              '/public/upload/goods/2020/07-02/509953a8745d52823f29612745144b1e.jpg',
            sales_sum: '1',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '33',
            goods_name: '\u9ed1\u8702\u6934\u6811\u871c\u65c5\u884c\u88c5',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-02/92b476491dd7751e2195ac0154f7e805.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '34',
            goods_name: '\u9ed1\u8702\u96ea\u871c\u65c5\u884c\u88c5',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-02/eb79e795077f4c9e0b7f667e92ef70ef.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
        ],
      },
      {
        id: '7',
        name: '\u679c\u6c41\u996e\u6599',
        goods_list: [],
      },
      {
        id: '6',
        name: '\u84dd\u8393\u7cfb\u5217',
        goods_list: [
          {
            goods_id: '28',
            goods_name: '\u84dd\u8393\u679c\u5e72\u793c\u76d2',
            shop_price: '168.00',
            original_img:
              '/public/upload/goods/2020/07-02/f0a1f164c963566a39fb9201d998f20b.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '29',
            goods_name: '\u9ed1\u68ee\u84dd\u8393\u679c\u5e72',
            shop_price: '35.00',
            original_img:
              '/public/upload/goods/2020/07-02/e9cd5c6a151f2230999bbbf283a8dccc.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '30',
            goods_name: '\u9ed1\u68ee\u84dd\u8393\u679c\u5e72\u793c\u76d2',
            shop_price: '328.00',
            original_img:
              '/public/upload/goods/2020/07-02/f26d1d71ac4f8b4a598265e3dbb3ebf9.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
        ],
      },
      {
        id: '5',
        name: '\u575a\u679c\u7c7b',
        goods_list: [
          {
            goods_id: '23',
            goods_name: '\u5c71\u699b\u5b50',
            shop_price: '80.00',
            original_img:
              '/public/upload/goods/2020/07-01/58a0aa80a9f2c2ec99ac971d88e2d2f7.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '24',
            goods_name: '\u5927\u699b\u5b50',
            shop_price: '50.00',
            original_img:
              '/public/upload/goods/2020/07-01/08a1986efa6847ff0d24c0dd38984b01.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '25',
            goods_name: '\u699b\u5b50\u4ec1',
            shop_price: '70.00',
            original_img:
              '/public/upload/goods/2020/07-01/b12ff0f83fd14ea2c0f6f72e48151304.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '26',
            goods_name: '\u7ea2\u677e\u7c7d\u4ec1',
            shop_price: '55.00',
            original_img:
              '/public/upload/goods/2020/07-02/f265d9f1efcd86868f25fbd93a8f2982.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '27',
            goods_name: '\u5c71\u699b\u5b50\u4ec1',
            shop_price: '35.00',
            original_img:
              '/public/upload/goods/2020/07-02/73ed784321a488aabf22d3c926b6a258.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
        ],
      },
      {
        id: '4',
        name: '\u7cbe\u54c1\u83cc\u7c7b',
        goods_list: [
          {
            goods_id: '18',
            goods_name: '\u9ed1\u68ee\u91ce\u751f\u79cb\u6728\u8033',
            shop_price: '180.00',
            original_img:
              '/public/upload/goods/2020/07-01/0c4652167909cb242c0c3e9c66a027db.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '19',
            goods_name: '\u9ed1\u68ee\u91d1\u94b1\u8033',
            shop_price: '160.00',
            original_img:
              '/public/upload/goods/2020/07-01/891126306ae6bb6f14b72741a71474c2.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '20',
            goods_name: '\u9ed1\u68ee\u51bb\u5e72\u677e\u8338\u7247',
            shop_price: '398.00',
            original_img:
              '/public/upload/goods/2020/07-01/764510106333225e6ed3ee6ea3873b87.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '21',
            goods_name: '\u9ed1\u68ee\u6652\u5e72\u677e\u8338\u7247',
            shop_price: '298.00',
            original_img:
              '/public/upload/goods/2020/07-01/4ea136650e2e2d8f33279580104a4600.jpg',
            sales_sum: '0',
            width: '1200',
            height: '1200',
          },
          {
            goods_id: '22',
            goods_name: '\u9ed1\u68ee\u91ce\u751f\u7334\u5934',
            shop_price: '358.00',
            original_img:
              '/public/upload/goods/2020/07-01/20f122f2e3c37b70fca6cff86c374182.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
        ],
      },
      {
        id: '3',
        name: '\u538b\u7f29\u83cc\u7c7b',
        goods_list: [
          {
            goods_id: '13',
            goods_name: '\u538b\u7f29\u7334\u5934',
            shop_price: '50.00',
            original_img:
              '/public/upload/goods/2020/07-01/c4c6a83e4b0917d22080076fc9c56580.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '14',
            goods_name: '\u538b\u7f29\u5143\u8611',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/5c4aee3a10893439c4213f62b6efe04e.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '15',
            goods_name: '\u538b\u7f29\u79cb\u6728\u8033',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/861fd66d858d5966158703f8c7593c45.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '16',
            goods_name: '\u538b\u7f29\u9ed1\u6728\u8033',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-01/52861c6cdb3947e69a06befe3a7e134c.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '17',
            goods_name: '\u538b\u7f29\u699b\u8611',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/2c8a9915ee089a5de5916334a3ac389d.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
        ],
      },
      {
        id: '2',
        name: '\u76d2\u88c5\u83cc\u7c7b',
        goods_list: [
          {
            goods_id: '7',
            goods_name: '\u7334\u5934\u76d2\u88c5',
            shop_price: '50.00',
            original_img:
              '/public/upload/goods/2020/07-01/7fc747d7decd07c020f6af4993b8771d.png',
            sales_sum: '1',
            width: '800',
            height: '800',
          },
          {
            goods_id: '8',
            goods_name: '\u9ed1\u6728\u8033\u76d2\u88c5',
            shop_price: '40.00',
            original_img:
              '/public/upload/goods/2020/07-01/f98c5d5f49f7a037793df870ebb82764.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '9',
            goods_name: '\u5143\u8611\u76d2\u88c5',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/bf7a4bf862ad9398636607ff42993e4c.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '10',
            goods_name: '\u9999\u83c7\u76d2\u88c5',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/edebe495a6d90be79981439f68229e25.jpg',
            sales_sum: '1',
            width: '800',
            height: '800',
          },
          {
            goods_id: '11',
            goods_name: '\u699b\u8611\u76d2\u88c5',
            shop_price: '48.00',
            original_img:
              '/public/upload/goods/2020/07-01/bdf423712f73c62a890804e4a9654884.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
          {
            goods_id: '12',
            goods_name: '\u79cb\u6728\u8033\u76d2\u88c5',
            shop_price: '45.00',
            original_img:
              '/public/upload/goods/2020/07-01/18452f1ef0cdbed59171f2220db1f2eb.jpg',
            sales_sum: '0',
            width: '800',
            height: '800',
          },
        ],
      },
      {
        id: '15',
        name: '\u4f11\u95f2\u98df\u54c1',
        goods_list: [
          {
            goods_id: '42',
            goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
            shop_price: '16.00',
            original_img:
              '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
            sales_sum: '2',
            width: '1200',
            height: '1200',
          },
        ],
      },
    ],
  },

  //MARK: 点击了筛选
  onScreening: function (event) {
    this.setData({
      screeningIndex: event.target.dataset.index,
    })
  },

  // MARK: 进入商品详情
  gotoGoodDetail(event) {
    app.gotoGoods(event.currentTarget.dataset.param)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // MARK 改变
  onChange(event) {
    this.setData({
      activeKey: event.detail,
    })
  },
})
