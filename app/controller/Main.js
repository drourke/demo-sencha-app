Ext.define('MyApp.controller.Main', {
  extend: 'Ext.app.Controller',
  requires: [
    'Ext.dataview.NestedList',
    'MyApp.view.Main'
  ],
  config: {
    refs: {
      fileDetails: 'nestedlist#fileList'
    },
    control: {
      fileDetails: { leafitemtap: 'onListItemTap' }
    }
  },
  onListItemTap: function(nestedList, list, index, target, record) {
    var detailCard = nestedList.getDetailCard();
    var text = record.get('text');

    console.log(record);
    console.log(record.get('type'));
    detailCard.setHtml('Details about file: ' + record.get('text'));
  },
  launch: function() {
    Ext.Viewport.add({
      xtype: 'file-navigator'
    });
  }
});