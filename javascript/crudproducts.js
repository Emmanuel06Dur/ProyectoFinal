
var url = "../bd/crudproductsDB.php";
var appPacientes = new Vue({
    el: "#appProducts",
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
        ReorderLevel: "",
        Discontinued: ""
        },
    methods:{
        btnAlta:async function(){  
            const {value: formValues} = await 
            Swal.fire({
                title: 'Nuevo Product',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> Product<br>Name </label><div class = "col-sm-7"><input id = "ProductName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Supplier<br>ID </label><div class = "col-sm-7"><input id = "SupplierID" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Category<br>ID </label><div class = "col-sm-7"><input id = "CategoryID" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Quantity<br>PerUnit </label><div class = "col-sm-7"><input id = "QuantityPerUnit" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Unit<br>Price </label><div class = "col-sm-7"><input id = "UnitPrice" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Units<br>In Stock </label><div class = "col-sm-7"><input id = "UnitsInStock" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Units On<br>Order </label><div class = "col-sm-7"><input id = "UnitsOnOrder" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Reorder<br>Level </label><div class = "col-sm-7"><input id = "ReorderLevel" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Discontinued </label><div class = "col-sm-7"><input id = "Discontinued" type = "text" class = "form-control"></div></div>',
                focusConfirm: false,
                confirmButtonText: 'Guardar',
                confirmButtonColor: '#1CC88A',
                showCancelButton: true,
                cancelButtonColor: '#3085D6',
                preConfirm: () => { 
                    return[
                        this.ProductName = document.getElementById('ProductName').value,
                        this.SupplierID = document.getElementById('SupplierID').value,
                        this.CategoryID = document.getElementById('CategoryID').value,
                        this.QuantityPerUnit = document.getElementById('QuantityPerUnit').value,
                        this.UnitPrice = document.getElementById('UnitPrice').value,
                        this.UnitsInStock = document.getElementById('UnitsInStock').value,
                        this.UnitsOnOrder = document.getElementById('UnitsOnOrder').value,
                        this.ReorderLevel = document.getElementById('ReorderLevel').value,
                        this.Discontinued = document.getElementById('Discontinued').value
                    ]
                }
            }) 
            if(this.ProductName == "" || this.SupplierID == "" || this.CategoryID == "" || this.QuantityPerUnit == "" || this.UnitPrice == "" || this.UnitsInStock == "" || this.UnitsOnOrder == "" || this.ReorderLevel == "" || this.Discontinued == "") {
                 Swal.fire({
                    icon: 'error',
                    type: 'info',
                    title: 'Datos incompletos',
                })
            } else {
                //Llamamos a la function para dar de alta al móvil y para mostrar que fue agregado exitosamente un producto.
                this.altaProducts(); 
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
        btnEditar:async function(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued){
             await Swal.fire({
                title: 'Editar Registro',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> Product<br>Name </label><div class = "col-sm-7"><input id = "ProductName" value = "'+ProductName+'"  type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Supplier<br>ID </label><div class = "col-sm-7"><input id = "SupplierID"  value = "'+SupplierID+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Category<br>ID </label><div class = "col-sm-7"><input id = "CategoryID" value = "'+CategoryID+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Quantity<br>PerUnit </label><div class = "col-sm-7"><input id = "QuantityPerUnit" value = "'+QuantityPerUnit+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Unit<br>Price </label><div class = "col-sm-7"><input id = "UnitPrice" value = "'+UnitPrice+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Units<br>In Stock </label><div class = "col-sm-7"><input id = "UnitsInStock" value = "'+UnitsInStock+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Units On<br>Order </label><div class = "col-sm-7"><input id = "UnitsOnOrder" value = "'+UnitsOnOrder+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Reorder<br>Level </label><div class = "col-sm-7"><input id = "ReorderLevel" value = "'+ProductName+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Discontinued </label><div class = "col-sm-7"><input id = "Discontinued" value = "'+Discontinued+'" type = "text" class = "form-control"></div></div>',
                focusConfirm: false,
                showCancelButton: true,
            }).then((result) => {
            if (result.value) {
                //Captura los nuevos datos si es que se modifican
                ProductName = document.getElementById('ProductName').value,
                SupplierID = document.getElementById('SupplierID').value,
                CategoryID = document.getElementById('CategoryID').value,
                QuantityPerUnit = document.getElementById('QuantityPerUnit').value,
                UnitPrice = document.getElementById('UnitPrice').value,
                UnitsInStock = document.getElementById('UnitsInStock').value,
                UnitsOnOrder = document.getElementById('UnitsOnOrder').value,
                ReorderLevel = document.getElementById('ReorderLevel').value,
                Discontinued = document.getElementById('Discontinued').value,
                this.editarProducts(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued);
                Swal.fire(
                        '¡Actualizado!',
                        'El registro ha sido actualizado.',
                        'success'
                    )
                }
            });
        },
        btnBorrar:function(ProductID){

            Swal.fire({
                title: '¿Esta seguro de borrar el registro: ' +ProductID+" ?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#D33',
                cancelButtonColor: '#3085D6',
                confirmButtonText: 'Borrar'
            }).then((result) => {
                if(result.value) {
                    this.borrarProducts(ProductID);
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
        listarProducts:function() {
            axios.post(url,{opcion:4}).then(response => {
                this.products = response.data;
            });
        },
        //Procedimiento crear
        altaProducts:function() {

            axios.post(url, {opcion:1, ProductName:this.ProductName, SupplierID:this.SupplierID, CategoryID:this.CategoryID, QuantityPerUnit:this.QuantityPerUnit, UnitPrice:this.UnitPrice, UnitsInStock:this.UnitsInStock, UnitsOnOrder:this.UnitsOnOrder, ReorderLevel:this.ReorderLevel, Discontinued:this.Discontinued}).then(response => {
                this.listarProducts();
            });
            this.ProductName = "";
            this.SupplierID = "";
            this.CategoryID = "";
            this.QuantityPerUnit = "";
            this.UnitPrice = "";
            this.UnitsInStock = "";
            this.UnitsOnOrder = "";
            this.ReorderLevel = "";
            this.Discontinued = "";
        },
        //Procedimiento editar
        editarProducts:function(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued ){
            axios.post(url, {opcion:2, ProductID:ProductID, ProductName:ProductName, SupplierID:SupplierID, CategoryID:CategoryID, QuantityPerUnit:QuantityPerUnit, UnitPrice:UnitPrice, UnitsInStock:UnitsInStock, UnitsOnOrder:UnitsOnOrder, ReorderLevel:ReorderLevel, Discontinued:Discontinued}).then(response => {
                this.listarProducts();
            });
        },
        //Procedimiento borrar
        borrarProducts:function(ProductID) {
            axios.post(url, {opcion:3, ProductID:ProductID}).then(response =>{
                this.listarProducts();
            });
        }
    },
    created:function(){
        this.listarProducts();
    },
    computed:{}
});