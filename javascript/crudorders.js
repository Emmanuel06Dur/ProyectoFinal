var url = "../bd/crudordersDB.php";
var appOrders = new Vue({
    el: "#appOrders",
    data:{
        orders: [],
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
            const {value: formValues} = await 
            Swal.fire({
                title: 'Nuevo Orders',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> CustomerID </label><div class = "col-sm-7"><input id = "CustomerID" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> EmployeeID </label><div class = "col-sm-7"><input id = "EmployeeID" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Order<br>Date </label><div class = "col-sm-7"><input id = "OrderDate" type = "datetime-local" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> RequiredDate </label><div class = "col-sm-7"><input id = "RequiredDate" type = "datetime-local" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Shipped<br>Date </label><div class = "col-sm-7"><input id = "ShippedDate" type = "datetime-local" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> ShipVia </label><div class = "col-sm-7"><input id = "ShipVia" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Freight </label><div class = "col-sm-7"><input id = "Freight" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Name </label><div class = "col-sm-7"><input id = "ShipName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Address </label><div class = "col-sm-7"><input id = "ShipAddress" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> ShipCity </label><div class = "col-sm-7"><input id = "ShipCity" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Region </label><div class = "col-sm-7"><input id = "ShipRegion" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Postal<br>Code </label><div class = "col-sm-7"><input id = "ShipPostalCode" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Country </label><div class = "col-sm-7"><input id = "ShipCountry" type = "text" class = "form-control"></div></div>',
				focusConfirm: false,
				confirmButtonText: 'Guardar',
                confirmButtonColor: '#1CC88A',
                showCancelButton: true,
				cancelButtonColor: '#3085D6',
				preConfirm: () => { 
					return[
						this.CustomerID = document.getElementById('CustomerID').value,
						this.EmployeeID = document.getElementById('EmployeeID').value,
                        this.OrderDate = document.getElementById('OrderDate').value,
                        this.RequiredDate = document.getElementById('RequiredDate').value,
                        this.ShippedDate = document.getElementById('ShippedDate').value,
                        this.ShipVia = document.getElementById('ShipVia').value,
                        this.Freight = document.getElementById('Freight').value,
                        this.ShipName = document.getElementById('ShipName').value,
                        this.ShipAddress = document.getElementById('ShipAddress').value,
                        this.ShipCity = document.getElementById('ShipCity').value,
                        this.ShipRegion = document.getElementById('ShipRegion').value,
                        this.ShipPostalCode = document.getElementById('ShipPostalCode').value,
                        this.ShipCountry = document.getElementById('ShipCountry').value
					]
				}
			}) 
            if(this.CustomerID == "" || this.EmployeeID == "" || this.OrderDate == "" || this.RequiredDate == "" || this.ShippedDate== "" || this.ShipVia == "" || this.Freight == "" || this.ShipName == "" || this.ShipAddress == "" ||  this.ShipCity == "" || this.ShipRegion == "" || this.ShipPostalCode == "" || this.ShipCountry == "") {
				Swal.fire({
                    icon: 'error',
					type: 'info',
					title: 'Datos incompletos',
				})
			} else {
                //Llamamos a la function para dar de alta al móvil y para mostrar que fue agregado exitosamente un producto.
				this.altaOrders(); 
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000
				});
				Toast.fire({
                    icon: 'success',
					type: 'success',
					title: 'Order agregado con exito!!'
				})
			}
        },
        btnEditar:async function(OrderID, CustomerID, EmployeeID, OrderDate, RequiredDate, ShippedDate, ShipVia, Freight, ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode, ShipCountry){
            await Swal.fire({
				title: 'Editar Registro',
                html: '<div class = "form-group"><div class = "row"><label class = "col-sm-3 col-form-label"> CustomerID </label><div class = "col-sm-7"> <input id = "CustomerID" value = "'+CustomerID+'" type = "text" class = "form-control">     </div></div><div class = "row"><label class = "col-sm-3 col-form-label"> EmployeeID </label><div class = "col-sm-7"><input id = "EmployeeID" value = "'+EmployeeID+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Order<br>Date </label><div class = "col-sm-7"><input id = "OrderDate" value = "'+OrderDate+'" type = "datetime" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> RequiredDate </label><div class = "col-sm-7"><input id = "RequiredDate" value = "'+RequiredDate+'" type = "datetime" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Shipped<br>Date </label><div class = "col-sm-7"><input id = "ShippedDate" value = "'+ShippedDate+'" type = "datetime" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> ShipVia </label><div class = "col-sm-7"><input id = "ShipVia" value = "'+ShipVia+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Freight </label><div class = "col-sm-7"><input id = "Freight" value = "'+Freight+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Name </label><div class = "col-sm-7"><input id = "ShipName" value = "'+ShipName+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Address </label><div class = "col-sm-7"><input id = "ShipAddress" value = "'+ShipAddress+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> ShipCity </label><div class = "col-sm-7"><input id = "ShipCity" value = "'+ShipCity+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Region </label><div class = "col-sm-7"><input id = "ShipRegion" value = "'+ShipRegion+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Postal<br>Code </label><div class = "col-sm-7"><input id = "ShipPostalCode" value = "'+ShipPostalCode+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ship<br>Country </label><div class = "col-sm-7"><input id = "ShipCountry" value = "'+ShipCountry+'" type = "text" class = "form-control"></div></div></div>',
				focusConfirm: false,
				showCancelButton: true,
			}).then((result) => {
			if (result.value) {
				//Captura los nuevos datos si es que se modifican
				CustomerID = document.getElementById('CustomerID').value,
				EmployeeID = document.getElementById('EmployeeID').value,
                OrderDate = document.getElementById('OrderDate').value,
                RequiredDate = document.getElementById('RequiredDate').value,
                ShippedDate = document.getElementById('ShippedDate').value,
                ShipVia = document.getElementById('ShipVia').value,
                Freight = document.getElementById('Freight').value,
                ShipName = document.getElementById('ShipName').value,
                ShipAddress = document.getElementById('ShipAddress').value,
                ShipCity = document.getElementById('ShipCity').value,
                ShipRegion = document.getElementById('ShipRegion').value,
                ShipPostalCode = document.getElementById('ShipPostalCode').value,
                ShipCountry = document.getElementById('ShipCountry').value
				this.editarOrders(OrderID, CustomerID, EmployeeID, OrderDate, RequiredDate, ShippedDate, ShipVia, Freight, ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode, ShipCountry);
				Swal.fire(
						'¡Actualizado!',
						'El registro ha sido actualizado.',
						'success'
					)
				}
			});
        },
        btnBorrar:function(OrderID){
            Swal.fire({
				title: '¿Esta seguro de borrar el registro: ' +OrderID+" ?",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#D33',
				cancelButtonColor: '#3085D6',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				if(result.value) {
					this.borrarOrders(OrderID);
					//Muestra un mensaje sobre la eliminación.
					Swal.fire(
						'¡Eliminado!',
						'El registro ha sido borrado.',
						'success'
					)
				}
			})
        },
        btnIrEmployees:function(){
            window.location.href = "../crudshtml/crudemployees.php"
        },
        btnIrCustomers:function(){
            window.location.href = "../crudshtml/crudcustomers.php"
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
            axios.post(url, {opcion:1, CustomerID:this.CustomerID, EmployeeID:this.EmployeeID, OrderDate:this.OrderDate, RequiredDate:this.RequiredDate, ShippedDate:this.ShippedDate, ShipVia:this.ShipVia, Freight:this.Freight, ShipName:this.ShipName, ShipAddress:this.ShipAddress, ShipCity:this.ShipCity, ShipRegion:this.ShipRegion, ShipPostalCode:this.ShipPostalCode, ShipCountry:this.ShipCountry}).then(response => {
                this.listarOrders();
            });
            this.CustomerID = "";
            this.EmployeeID = "";
            this.OrderDate = "";
            this.RequiredDate = "";
            this.ShippedDate = "";
            this.ShipVia = "";
            this.Freight = "";
            this.ShipName = "";
            this.ShipAddress = "";
            this.ShipCity = "";
            this.ShipRegion = "";
            this.ShipPostalCode = "";
            this.ShipCountry = "";
        },
        //Procedimiento editar
        editarOrders:function(OrderID, CustomerID, EmployeeID, OrderDate, RequiredDate, ShippedDate, ShipVia, Freight, ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode, ShipCountry) {
            axios.post(url, {opcion:2, OrderID:OrderID, CustomerID:CustomerID, EmployeeID:EmployeeID, OrderDate:OrderDate, RequiredDate:RequiredDate, ShippedDate:ShippedDate, ShipVia:ShipVia, Freight:Freight, ShipName:ShipName, ShipAddress:ShipAddress, ShipCity:ShipCity, ShipRegion:ShipRegion, ShipPostalCode:ShipPostalCode, ShipCountry:ShipCountry}).then(response => {
                this.listarOrders();
            });
        },
        //Procedimiento borrar
        borrarOrders:function(OrderID) {
            axios.post(url, {opcion:3, OrderID:OrderID}).then(response =>{
                this.listarOrders();
            });
        }
    },
    created:function(){
        this.listarOrders();
    },
    computed:{}
});