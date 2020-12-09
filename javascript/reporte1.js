var url = "../bd/reporte1DB.php";
var appEmployees = new Vue({
    el: "#appEmployees",
    data:{
        employees: [],
        EmployeeID:"",
        Title:"",
        Empleado:"",
        Country:"",
        Cantidad:"",
        Monto:""
    },
    methods:{
        //Procedimientos
        //Procedimiento de listar
        listarReporte1:function() {
            axios.post(url).then(response => {
                this.employees = response.data;
                //console.log(this.employees);
            });
        },
    },
    created:function(){
        this.listarReporte1();
    },
    computed:{}
});