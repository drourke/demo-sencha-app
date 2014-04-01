Ext.define('MyApp.model.ListItem', {
  extend: 'Ext.data.Model',
  config: {
  	//author, create date, type, size)
    fields: ['text', 'type', 'size', 'date']
  }
});