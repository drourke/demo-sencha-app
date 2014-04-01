Ext.define('MyApp.view.Main', {
  extend : 'Ext.Container',
  alias  : 'widget.file-navigator',
  config: {
    scrollable: true,
    layout: {
      type  : 'vbox',
      pack  : 'top',
      align : 'stretch'
    },
    items: [{
        flex   : 1,
        xtype  : 'nestedlist',
        itemId : 'fileList',
        title  : 'Home',
        store  : Ext.create('MyApp.store.FileTree'),
        listConfig: {
          itemTpl: '<div><p style="margin-bottom:0.25px">{text}</p><p style="font-size:.80em">{size}{date}</p></div>'
        },
        detailCard: {
          html: 'You are viewing the detail card!'
        }
      }
    ]
  }
});
