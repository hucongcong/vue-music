var data = [
  {
    id: 13953,
    createDate: '2018-01-11 21:33:40',
    modifyDate: '2018-01-11 21:33:40',
    version: 0,
    type: 'refund',
    refundReason: '尺码偏大',
    quantity: 1,
    changeSku: null,
    sku: '1002637201033',
    name: null,
    images:
      '[http://charleskeith.oss-cn-shanghai.aliyuncs.com/upload/image/201801/baf555ae-494f-457e-bb99-c85c92beccdf.jpg]'
  }
];

var arr = data.map(item => {
  item.images = item.images.replace('[', '').replace(']', '');
  return item;
});
console.log(arr);
