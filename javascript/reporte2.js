var url = "../bd/reportedos.php";
var appSuppliers = new Vue({
    el: "#appProducts",
    data:{
        products: [],
        productiD: "",
        productname: "",
        unitprice: "",
        unitsinstock: "",
        CategoryName: "",
        Cantidad: "",
        Monto: ""
    },
    methods:{
        btnMostrar:function(){
            var fechainicial = document.getElementById('fechainicial').value;
            var fechafinal = document.getElementById('fechafinal').value;
            var categoria = document.getElementById('categoria').value;
            if(fechainicial=="" ||fechafinal=="" ||categoria==""){
                Swal.fire({
                    title: 'Datos incompletos, por favor es necesario ingresar todos los datos pedidos',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#D33',
                    confirmButtonText: 'OK'
                })
            }else{
                this.listarConsulta(fechainicial, fechafinal, categoria);
            }
        },
        //Procedimientos
        //Procedimiento de listar
        listarConsulta:function(fechainicial, fechafinal, categoria) {
            axios.post(url,{opcion:1, fechainicial:fechainicial, fechafinal:fechafinal, categoria:categoria}).then(response => {
                this.products = response.data;
                //console.log(this.suppliers);
            });
        },
    },
    created:function(){},
    computed:{}
});
