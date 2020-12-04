var url = "../bd/crudproductsDB.php";
var appPacientes = new Vue({
    el: "#appSuppliers",
    data:{
        products: [],
        ProductID: "",
        ProductName: "",
        SupplierID: "",
        CategoryID: "",
        QuantityPerUnit: "",
        UnitPrice: "", 
        UnitsInStock: "",
        UnitsOnOrder: "",
        ReoderLevel: "",
        Discontinued: ""
    },
    methods:{
        btnAlta:async function(){            
        },
        btnEditar:async function(){
        },
        btnBorrar:function(){
        },
        //Procedimientos
        //Procedimiento de listar
        listarSuppliers:function() {
            axios.post(url,{opcion:4}).then(response => {
                this.suppliers = response.data;
                //console.log(this.suppliers);
            });
        },
        //Procedimiento crear
        altaPaciente:function() {},
        //Procedimiento editar
        editarPaciente:function() {},
        //Procedimiento borrar
        borrarPaciente:function() {}
    },
    created:function(){
        this.listarSuppliers();
    },
    computed:{}
});