var url = "../bd/crudsuppliersDB.php";
var appPacientes = new Vue({
    el: "#appSuppliers",
    data:{
        suppliers: [],
        CompanyName: "",
        ContactName: "",
        ContactTitle: "",
        Address: "",
        City: "",
        Region: "",
        PostalCode: "",
        Country: "",
        Phone: "",
        Fax: "",
        HomePage: ""
    },
    methods:{
        btnAlta:async function(){
            const {value: formValues} = await 
            Swal.fire({
                title: 'Nuevo Paciente',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> CompanyName </label><div class = "col-sm-7"><input id = "CompanyName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Contact<br>Name </label><div class = "col-sm-7"><input id = "ContactName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Contact<br>Title </label><div class = "col-sm-7"><input id = "ContactTitle" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Address </label><div class = "col-sm-7"><input id = "Ubication" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> City </label><div class = "col-sm-7"><input id = "City" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Region </label><div class = "col-sm-7"><input id = "Region" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Postal<br>Code </label><div class = "col-sm-7"><input id = "PostalCode" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Country </label><div class = "col-sm-7"><input id = "Country" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Phone </label><div class = "col-sm-7"><input id = "Phone" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Fax </label><div class = "col-sm-7"><input id = "Fax" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Home<br>Page </label><div class = "col-sm-7"><input id = "HomePage" type = "text" class = "form-control"></div></div>',
				focusConfirm: false,
				confirmButtonText: 'Guardar',
                confirmButtonColor: '#1CC88A',
                showCancelButton: true,
				cancelButtonColor: '#3085D6',
				preConfirm: () => { 
					return[
						this.CompanyName = document.getElementById('CompanyName').value,
						this.ContactName = document.getElementById('ContactName').value,
                        this.ContactTitle = document.getElementById('ContactTitle').value,
                        this.Address = document.getElementById('Ubication').value,
                        this.City = document.getElementById('City').value,
                        this.Region = document.getElementById('Region').value,
                        this.PostalCode = document.getElementById('PostalCode').value,
                        this.Country = document.getElementById('Country').value,
                        this.Phone = document.getElementById('Phone').value,
                        this.Fax = document.getElementById('Fax').value,
                        this.HomePage = document.getElementById('HomePage').value
					]
				}
			}) 
            if(this.CompanyName == "" || this.ContactName == "" || this.ContactTitle == "" || this.Address == "" || this.City == "" || this.Region == "" || this.PostalCode == "" || this.Country == "" || this.Phone == "" ||  this.Fax == "" || this.HomePage == "") {
				Swal.fire({
                    icon: 'error',
					type: 'info',
					title: 'Datos incompletos',
				})
			} else {
                //Llamamos a la function para dar de alta al móvil y para mostrar que fue agregado exitosamente un producto.
				this.altaSuppliers(); 
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000
				});
				Toast.fire({
                    icon: 'success',
					type: 'success',
					title: 'Supplier agregado con exito!!'
				})
			}
        },
        btnEditar:async function(SupplierID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax, HomePage){
            await Swal.fire({
				title: 'Editar Registro',
                html: '<div class = "form-group"><div class = "row"><label class = "col-sm-3 col-form-label"> Company<br>Name </label><div class = "col-sm-7"><input id = "CompanyName" value = "'+CompanyName+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Contact<br>Name </label><div class = "col-sm-7"><input id = "ContactName" value = "'+ContactName+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Contact<br>Title </label><div class = "col-sm-7"><input id = "ContactTitle" value = "'+ContactTitle+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Address </label><div class = "col-sm-7"><input id = "Ubication" value = "'+Address+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> City </label><div class = "col-sm-7"><input id = "City" value = "'+City+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Region </label><div class = "col-sm-7"><input id = "Region" value = "'+Region+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Postal<br>Code </label><div class = "col-sm-7"><input id = "PostalCode" value = "'+PostalCode+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Country </label><div class = "col-sm-7"><input id = "Country" value = "'+Country+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Phone </label><div class = "col-sm-7"><input id = "Phone" value = "'+Phone+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Fax </label><div class = "col-sm-7"><input id = "Fax" value = "'+Fax+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Home<br>Page </label><div class = "col-sm-7"><input id = "HomePage" value = "'+HomePage+'" type = "text" class = "form-control"></div></div></div>',
				focusConfirm: false,
				showCancelButton: true,
			}).then((result) => {
			if (result.value) {
				//Captura los nuevos datos si es que se modifican
				CompanyName = document.getElementById('CompanyName').value,
				ContactName = document.getElementById('ContactName').value,
                ContactTitle = document.getElementById('ContactTitle').value,
                Address = document.getElementById('Ubication').value,
                City = document.getElementById('City').value,
                Region = document.getElementById('Region').value,
                PostalCode = document.getElementById('PostalCode').value,
                Country = document.getElementById('Country').value,
                Phone = document.getElementById('Phone').value,
                Fax = document.getElementById('Fax').value,
                HomePage = document.getElementById('HomePage').value,
				this.editarSuppliers(SupplierID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax, HomePage);
				Swal.fire(
						'¡Actualizado!',
						'El registro ha sido actualizado.',
						'success'
					)
				}
			});
        },
        btnBorrar:function(SupplierID){
            Swal.fire({
				title: '¿Esta seguro de borrar el registro: ' +SupplierID+" ?",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#D33',
				cancelButtonColor: '#3085D6',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				if(result.value) {
					this.borrarSuppliers(SupplierID);
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
        listarSuppliers:function() {
            axios.post(url,{opcion:4}).then(response => {
                this.suppliers = response.data;
                //console.log(this.suppliers);
            });
        },
        //Procedimiento crear
        altaSuppliers:function() {
            axios.post(url, {opcion:1, CompanyName:this.CompanyName, ContactName:this.ContactName, ContactTitle:this.ContactTitle, Address:this.Address, City:this.City, Region:this.Region, PostalCode:this.PostalCode, Country:this.Country, Phone:this.Phone, Fax:this.Fax, HomePage:this.HomePage}).then(response => {
                this.listarSuppliers();
            });
            this.CompanyName = "";
            this.ContactName = "";
            this.ContactTitle = "";
            this.Address = "";
            this.City = "";
            this.Region = "";
            this.PostalCode = "";
            this.Country = "";
            this.Phone = "";
            this.Fax = "";
            this.HomePage = "";
        },
        //Procedimiento editar
        editarSuppliers:function(SupplierID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax, HomePage) {
            axios.post(url, {opcion:2, SupplierID:SupplierID, CompanyName:CompanyName, ContactName:ContactName, ContactTitle:ContactTitle, Address:Address, City:City, Region:Region, PostalCode:PostalCode, Country:Country, Phone:Phone, Fax:Fax, HomePage:HomePage}).then(response => {
                this.listarSuppliers();
            });
        },
        //Procedimiento borrar
        borrarSuppliers:function(SupplierID) {
            axios.post(url, {opcion:3, SupplierID:SupplierID}).then(response =>{
                this.listarSuppliers();
            });
        }
    },
    created:function(){
        this.listarSuppliers();
    },
    computed:{}
});