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
        width:55,
        required:true,
        toInput:true,
        label:'notification',
        cellDataType: 'number'
    },
    {
        headerName: "Name", field: "name",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'text'
    },
    {
        headerName: "description", field: "description",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'text'
    },
    {
        headerName: "manufacturer", field: "manufacturer",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'text'
    },
    {
        headerName: "unitOfMeasurement", field: "unitOfMeasurement",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'text'
    },
    {
        headerName: "catalogNumber", field: "catalogNumber",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'text'
    },
    {
        headerName: "quantityInStock", field: "quantityInStock",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'number'
    },
    {
        headerName: "purchaseDate", field: "purchaseDate",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'date'
    },
    {
        headerName: "deliveryDate", field: "deliveryDate",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'date'
    },
    {
        headerName: "expiryDate", field: "expiryDate",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'date'
    },
    {
        headerName: "category", field: "category",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'text'
    },
    {
        headerName: "minimumStockLevel", field: "minimumStockLevel",
        sortable:true,
        inputWidth:50,
        inputValue:'',
        required:true,
        toInput:true,
        label:'warehouse',
        cellDataType: 'number'
    },
];