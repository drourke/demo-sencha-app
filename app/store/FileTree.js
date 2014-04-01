Ext.define('MyApp.store.FileTree', {
  extend: 'Ext.data.TreeStore',
  requires: [
    'MyApp.model.ListItem'
  ],
  config: {
    model: 'MyApp.model.ListItem',
    defaultRootProperty: 'items',
    root: {
      items: [{
          text: 'Documents',
          type: 'folder',
          items: [{
              text: 'Important',
              type: 'folder',
              items: [{ 
                  text: 'Doc1.doc', 
                  type: 'file',
                  size: '8 KB',
                  date: ', last modified 1/1/1',
                  leaf: true 
                },{ 
                  text: 'Doc2.doc', 
                  type: 'file',
                  size: '10 KB',
                  date: ', last modified 1/1/1',
                  leaf: true 
                }
              ]
            },{ 
              text: 'file.blah', 
              type: 'file',
              size: '18 KB',
              date: ', last modified 1/1/1',
              leaf: true 
            }
          ]
        },{
          text: 'Pictures',
          type: 'folder',
          items: [{ 
              text: 'Picture1.jpg', 
              size: '22 KB',
              type: 'file',
              date: ', last modified 1/1/1',
              leaf: true 
            },{ 
              text: 'Picture2.jpg', 
              size: '4 KB',
              type: 'file',
              date: ', last modified 1/1/1',
              leaf: true 
            },{ 
              text: 'Picture3.jpg', 
              size: '34 KB',
              type: 'file',
              date: ', last modified 1/1/1',
              leaf: true  
            }
          ]
        }
      ]
    }
  }
});