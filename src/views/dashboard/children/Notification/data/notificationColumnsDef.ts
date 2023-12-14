export default [
    {
        headerName: "🗑",
        field:'delete',
        sortable:false,
        inputWidth:50,
        inputValue:'',
        width:55,
        value:'XX',
        required:true,
        valueGetter: () => '🗑',


    },
    {
        headerName: "✎",
        field:'edit',
        sortable:false,
        inputWidth:50,
        inputValue:'',
        width:55,
        value:'XX',
        required:true,
        valueGetter: () => '✎',

    },
    {
        headerName: "ID", field: "id",
        sortable:true,
        inputValue:'',
        required:true,
        width:55,
        toInput:true,
        label:'notification',
        cellDataType: 'number'
    },
    {
        headerName: "Title", field: "title",
        sortable:true,
        flex:1,
        inputValue:'',
        required:true,
        toInput:true,
        label:'notification',
        cellDataType: 'text'
    },
    {
        headerName: "Type", field: "type",
        sortable:true,
        flex:1,
        inputValue:'',
        required:true,
        toInput:true,
        label:'notification',
        cellDataType: 'text'
    },
    {
        headerName: "Description", field: "description",
        sortable:true,
        flex:1,
        inputValue:'',
        required:true,
        toInput:true,
        label:'notification',
        cellDataType: 'text'
    },
];