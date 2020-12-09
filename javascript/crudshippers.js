
var url = "../bd/crudshippersDB.php";
var appPacientes = new Vue({
    el: "#appShippers",
    data:{
        shippers: [],
        ShipperID: "",
        CompanyName: "",
        Phone: ""
        },
    methods:{
        btnAlta:async function(){  
            const {value: formValues} = await 
            Swal.fire({
                title: 'Nuevo Shipper',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> Company<br>Name </label><div class = "col-sm-7"><input id = "CompanyName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Phone </label><div class = "col-sm-7"><input id = "Phone" type = "text" class = "form-control"></div></div>',
                focusConfirm: false,
                confirmButtonText: 'Guardar',
                confirmButtonColor: '#1CC88A',
                showCancelButton: true,
                cancelButtonColor: '#3085D6',
                preConfirm: () => { 
                    return[
                        this.CompanyName = document.getElementById('CompanyName').value,
                        this.Phone = document.getElementById('Phone').value,
                        
                    ]
                }
            }) 
            if(this.CompanyName == "" || this.Phone == "") {
                 Swal.fire({
                    icon: 'error',
                    type: 'info',
                    title: 'Datos incompletos',
                })
            } else {
                //Llamamos a la function para dar de alta al móvil y para mostrar que fue agregado exitosamente un producto.
                this.altaShippers(); 
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    icon: 'success',
                    type: 'success',
                    title: 'product agregado con exito!!'
                })
            }



        },
        btnEditar:async function(ShipperID, CompanyName, Phone){
             await Swal.fire({
                title: 'Editar Registro',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> Company<br>Name </label><div class = "col-sm-7"><input id = "CompanyName" value = "'+CompanyName+'"  type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Phone </label><div class = "col-sm-7"><input id = "Phone"  value = "'+Phone+'" type = "text" class = "form-control"></div></div>',
                focusConfirm: false,
                showCancelButton: true,
            }).then((result) => {
            if (result.value) {
                //Captura los nuevos datos si es que se modifican
                CompanyName = document.getElementById('CompanyName').value,
                Phone = document.getElementById('Phone').value,
                this.editarShippers(ShipperID, CompanyName, Phone);
                Swal.fire(
                        '¡Actualizado!',
                        'El registro ha sido actualizado.',
                        'success'
                    )
                }
            });
        },
        btnBorrar:function(ShipperID){

            Swal.fire({
                title: '¿Esta seguro de borrar el registro: ' +ShipperID+" ?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#D33',
                cancelButtonColor: '#3085D6',
                confirmButtonText: 'Borrar'
            }).then((result) => {
                if(result.value) {
                    this.borrarShippers(ShipperID);
                    //Muestra un mensaje sobre la eliminación.
                    Swal.fire(
                        '¡Eliminado!',
                        'El registro ha sido borrado.',
                        'success'
                    )
                }
            })






        },
        //Procedimientos
        //Procedimiento de listar
        listarShippers:function() {
            axios.post(url,{opcion:4}).then(response => {
                this.shippers = response.data;
            });
        },
        //Procedimiento crear
        altaShippers:function() {

            axios.post(url, {opcion:1, CompanyName:this.CompanyName, Phone:this.Phone, }).then(response => {
                this.listarShippers();
            });
            this.CompanyName = "";
            this.Phone = "";
        },
        //Procedimiento editar
        editarShippers:function(ShipperID, CompanyName, Phone ){
            axios.post(url, {opcion:2, ShipperID:ShipperID, CompanyName:CompanyName, Phone:Phone}).then(response => {
                this.listarShippers();
            });
        },
        //Procedimiento borrar
        borrarShippers:function(ProductID) {
            axios.post(url, {opcion:3, ProductID:ProductID}).then(response =>{
                this.listarShippers();
            });
        }
    },
    created:function(){
        this.listarShippers();
    },
    computed:{}
});