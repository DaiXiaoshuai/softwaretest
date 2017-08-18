
Ext.define('SoftwareTest.view.student.Zlq',{
    extend: 'Ext.panel.Panel',
    xtype:'zlq',


    id:'zlq-panel',

    requires: [
        'SoftwareTest.view.student.QuestionController',
        'SoftwareTest.view.student.MainModel'
    ],

    controller: 'student-question',
    viewModel: {
        type: 'student.main'
    },

    layout:{
        type:'vbox',
        align:'center'
    },

    dockedItems:[{
        xtype:'toolbar',
        dock:'top',
        layout:'fit',
        width:'100%',
        padding:'0 20 0 0',
        height:50
    }],


    items:[{
        xtype:'panel',
        width:'90%',
        margin:'10 0 0 0',
        // height:'100%',
        layout:{
            type:'vbox',
            pack:'start'
        },
        items:[{
            xtype:'label',
            bind:{
                html:'题目名称:{questionName2}'
            },
            height:36,
            margin:3,
            style:{
                fontSize:'24px'
            }
        },{
            xtype:'label',
            bind:{
                text:'题目描述:'
            },
            height:36,
            margin:3,
            style:{
                fontSize:'24px'
            }
        },{
            xtype:'panel',
            ui:'rqts',
            width:'100%',
            height:'auto',
            padding:'0 0 10 0',
            // readOnly:true,
            bind:{
                html:'{questionDescription2}'
            }
        },{
            xtype:'label',
            bind:{
                text:'用例输入区域:'
            },
            height:36,
            margin:3,
            style:{
                fontSize:'24px'
            }
        },{
            xtype:'textarea',
            width:'100%',
            height:250,
            id:'zlqAnswer',
            emptyText:"价格，付款数之间用逗号‘,’分开，多个用例用分号‘;’分开,例如：30,50;5,100",
            vtype:'zlq'
        }]
    },{
        xtype:'panel',
        width:'90%',
        padding:'0 5 0 0',
        layout:'hbox',
        items:[{
            xtype: 'tbfill'
        }, {
            xtype:'button',
            text:'重置',
            scale:'medium',
            handler:'zlq_reset'
        },{
            xtype:'tbspacer',
            width:8
        },{
            xtype:'button',
            text:'提交',
            scale:'medium',
            handler:'zlqSubmit'
        }]
    }],
    // listeners:{
    //     beforerender:'beforerender'
    // },

    initComponent:function(){
        Ext.define('SoftwareTest.form.field.VTypes',{
            override: 'Ext.form.field.VTypes',
            zlq:function(value){
                return this.rqtsTest.test(value);
            },
            zlqTest:/^\d+|,|，|;/,
            zlqMask:/^\d+|,|，|;/,
            zlqText:'出现非法字符'
        });
        this.callParent(arguments);
    }
});
