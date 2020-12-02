var url = "../bd/crudordersDB.php";
var appOrders = new Vue({
    el: "#appOrders",
    data:{
        orders: [],
        OrderID: "",
        CustomerID: "",
        EmployeeID: "",
        OrderDate: "",
        RequiredDate: "",
        ShippedDate: "",
        ShipVia: "",
        Freight: "",
        ShipName: "",
        ShipAddress: "",
        ShipCity: "",
        ShipRegion: "",
        ShipPostalCode: "",
        ShipCountry: ""
    },
    methods:{
        btnAlta:async function(){
        },
        btnEditar:async function(){
        },
        btnBorrar:function(SupplierID){
        },
        //Procedimientos
        //Procedimiento de listar
        listarOrders:function() {
            axios.post(url,{opcion:4}).then(response => {
                this.orders = response.data;
                //console.log(this.suppliers);
            });
        },
        //Procedimiento crear
        altaOrders:function() {
        },
        //Procedimiento editar
        editarOrders:function() {
        },
        //Procedimiento borrar
        borrarOrders:function() {
        }
    },
    created:function(){
        this.listarOrders();
    },
    computed:{}
});