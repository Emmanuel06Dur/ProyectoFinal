var url = "../bd/crudemployeesDB.php";
var appEmployees = new Vue({
    el: "#appEmployees",
    data:{
        employees: [],
        LastName: "",
        FirstName: "",
        Title: "",
        TitleOfCourtesy: "",
        BirthDate: "",
        HireDate: "",
        Ubication: "",
        City: "",
        Region: "",
        PostalCode: "",
        Country: "",
        HomePhone: "",
        Extension: "",
        Notes: "",
        ReportsTo: "",
        PhotoPath: ""
    },
    methods:{
        btnAlta:async function(){
            const {value: formValues} = await 
            Swal.fire({
                title: 'Nuevo Empleado',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> Last <br> Name </label><div class = "col-sm-7"><input id = "LastName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> First<br>Name </label><div class = "col-sm-7"><input id = "FirstName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Title </label><div class = "col-sm-7"><input id = "Title" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Title <br> Of <br> Courtesy </label><div class = "col-sm-7"><input id = "TitleOfCourtesy" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> BirthDate </label><div class = "col-sm-7"><input id = "BirthDate" type = "datetime-local" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> HireDate </label><div class = "col-sm-7"><input id = "HireDate" type = "datetime-local" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ubication </label><div class = "col-sm-7"><input id = "Ubication" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> City </label><div class = "col-sm-7"><input id = "City" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Region </label><div class = "col-sm-7"><input id = "Region" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Postal <br> Code </label><div class = "col-sm-7"><input id = "PostalCode" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Country </label><div class = "col-sm-7"><input id = "Country" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Home <br> Phone </label><div class = "col-sm-7"><input id = "HomePhone" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Extension </label><div class = "col-sm-7"><input id = "Extension" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Notes </label><div class = "col-sm-7"><input id = "Notes" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Reports <br> To </label><div class = "col-sm-7"><input id = "ReportsTo" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> PhotoPath </label><div class = "col-sm-7"><input id = "PhotoPath" type = "text" class = "form-control"></div></div>',
				//Se agrego photo
                focusConfirm: false,
				confirmButtonText: 'Guardar',
                confirmButtonColor: '#1CC88A',
                showCancelButton: true,
				cancelButtonColor: '#3085D6',
				preConfirm: () => { 
					return[
						this.LastName = document.getElementById('LastName').value,
						this.FirstName = document.getElementById('FirstName').value,
                        this.Title = document.getElementById('Title').value,
                        this.TitleOfCourtesy = document.getElementById('TitleOfCourtesy').value,
                        this.BirthDate = document.getElementById('BirthDate').value,
                        this.HireDate = document.getElementById('HireDate').value,
                        this.Ubication = document.getElementById('Ubication').value,
                        this.City = document.getElementById('City').value,
                        this.Region = document.getElementById('Region').value,
                        this.PostalCode = document.getElementById('PostalCode').value,
                        this.Country = document.getElementById('Country').value,
                        this.HomePhone = document.getElementById('HomePhone').value,
                        this.Extension = document.getElementById('Extension').value,
                        this.Notes = document.getElementById('Notes').value,
                        this.ReportsTo = document.getElementById('ReportsTo').value,
                        this.PhotoPath = document.getElementById('PhotoPath').value
					]
				}
			}) 
            if(this.LastName == "" || this.FirstName == "" || this.Title == "" || this.TitleOfCourtesy == "" || this.BirthDate == "" || this.HireDate == "" || this.Ubication == "" ||  this.City == "" || this.Region == "" || this.PostalCode == "" || this.Country == "" || this.HomePhone == "" || this.Extension == "" || this.Notes == "" || this.ReportsTo == "" || this.PhotoPath == "") {
				Swal.fire({
                    icon: 'error',
					type: 'info',
					title: 'Datos incompletos',
				})
			} else {
                //Llamamos a la function para dar de alta al móvil y para mostrar que fue agregado exitosamente un producto.
				this.altaEmployees(); 
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000
				});
				Toast.fire({
                    icon: 'success',
					type: 'success',
					title: 'Employee agregado con exito!!'
				})
			}
        },
        btnEditar:async function(EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Ubication, City, Region, PostalCode, Country, HomePhone, Extension, Notes, ReportsTo, PhotoPath){
            await Swal.fire({
				title: 'Editar Registro',
                html: '<div class = "form-group"><div class = "row"><label class = "col-sm-3 col-form-label"> Last <br> Name </label><div class = "col-sm-7"><input id = "LastName" value="'+LastName+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> First<br>Name </label><div class = "col-sm-7"><input id = "FirstName" value="'+FirstName+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Title </label><div class = "col-sm-7"><input id = "Title" value="'+Title+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Title <br> Of <br> Courtesy </label><div class = "col-sm-7"><input id = "TitleOfCourtesy" value="'+TitleOfCourtesy+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> BirthDate </label><div class = "col-sm-7"><input id = "BirthDate" value="'+BirthDate+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> HireDate </label><div class = "col-sm-7"><input id = "HireDate" value="'+HireDate+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Ubication </label><div class = "col-sm-7"><input id = "Ubication" value="'+Ubication+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> City </label><div class = "col-sm-7"><input id = "City" value="'+City+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Region </label><div class = "col-sm-7"><input id = "Region" value="'+Region+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Postal <br> Code </label><div class = "col-sm-7"><input id = "PostalCode" value="'+PostalCode+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Country </label><div class = "col-sm-7"><input id = "Country" value="'+Country+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Home <br> Phone </label><div class = "col-sm-7"><input id = "HomePhone" value="'+HomePhone+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Extension </label><div class = "col-sm-7"><input id = "Extension" value="'+Extension+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Notes </label><div class = "col-sm-7"><input id = "Notes" value="'+Notes+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Reports <br> To </label><div class = "col-sm-7"><input id = "ReportsTo" value="'+ReportsTo+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Photo<br>Path </label><div class = "col-sm-7"><input id = "PhotoPath" value="'+PhotoPath+'" type = "text" class = "form-control"></div></div></div>',
                focusConfirm: false,
				showCancelButton: true,
			}).then((result) => {
			if (result.value) {
				//Captura los nuevos datos si es que se modifican
				LastName = document.getElementById('LastName').value,
                FirstName = document.getElementById('FirstName').value,
                Title = document.getElementById('Title').value,
                TitleOfCourtesy = document.getElementById('TitleOfCourtesy').value,
                BirthDate = document.getElementById('BirthDate').value,
                HireDate = document.getElementById('HireDate').value,
                Ubication = document.getElementById('Ubication').value,
                City = document.getElementById('City').value,
                Region = document.getElementById('Region').value,
                PostalCode = document.getElementById('PostalCode').value,
                Country = document.getElementById('Country').value,
                HomePhone = document.getElementById('HomePhone').value,
                Extension = document.getElementById('Extension').value,
                Notes = document.getElementById('Notes').value,
                ReportsTo = document.getElementById('ReportsTo').value,
                PhotoPath = document.getElementById('PhotoPath').value
				this.editarEmployees(EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Ubication, City, Region, PostalCode, Country, HomePhone, Extension, Notes, ReportsTo, PhotoPath);
				Swal.fire(
						'¡Actualizado!',
						'El registro ha sido actualizado.',
						'success'
					)
				}
			});
        },
        btnBorrar:function(EmployeeID){
            Swal.fire({
				title: '¿Esta seguro de borrar el registro: ' +EmployeeID+" ?",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#D33',
				cancelButtonColor: '#3085D6',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				if(result.value) {
					this.borrarEmployees(EmployeeID);
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
        listarEmployees:function() {
            axios.post(url,{opcion:4}).then(response => {
                this.employees = response.data;
                //console.log(this.employees);
            });
        },
        //Procedimiento crear
        altaEmployees:function() {
            axios.post(url, {opcion:1, LastName:this.LastName, FirstName:this.FirstName, Title:this.Title, TitleOfCourtesy:this.TitleOfCourtesy, BirthDate:this.BirthDate, HireDate:this.HireDate, Ubication:this.Ubication, City:this.City, Region:this.Region, PostalCode:this.PostalCode, Country:this.Country, HomePhone:this.HomePhone, Extension:this.Extension, Notes:this.Notes, ReportsTo:this.ReportsTo, PhotoPath:this.PhotoPath}).then(response => {
                this.listarEmployees();
            });
            this.LastName = "";
            this.FirstName = "";
            this.Title = "";
            this.TitleOfCourtesy = "";
            this.BirthDate = "";
            this.HireDate = "";
            this.Ubication = "";
            this.City = "";
            this.Region = "";
            this.PostalCode = "";
            this.Country = "";
            this.HomePhone = "";
            this.Extension = "";
            this.Notes = "";
            this.ReportsTo = "";
            this.PhotoPath = "";
        },
        //Procedimiento editar
        editarEmployees:function(EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Ubication, City, Region, PostalCode, Country, HomePhone, Extension, Notes, ReportsTo, PhotoPath) {
            axios.post(url, {opcion:2, EmployeeID:EmployeeID, LastName:LastName, FirstName:FirstName, Title:Title, TitleOfCourtesy:TitleOfCourtesy, BirthDate:BirthDate, HireDate:HireDate, Ubication:Ubication, City:City, Region:Region, PostalCode:PostalCode, Country:Country, HomePhone:HomePhone, Extension:Extension, Notes:Notes, ReportsTo:ReportsTo, PhotoPath:PhotoPath}).then(response => {
                this.listarEmployees();
            });
        },
        //Procedimiento borrar
        borrarEmployees:function(EmployeeID) {
            axios.post(url, {opcion:3, EmployeeID:EmployeeID}).then(response =>{
                this.listarEmployees();
            });
        }
        /*verImagen:function(){
            var _this = this
            _this.file = _this.$refs.foto.files[0];
            _this.url = URL.createObjectURL(_this.file);
        },
        everImagen:function(){
            var _this = this
            _this.file = _this.$refs.efoto.files[0];
            _this.eurl = URL.createObjectURL(_this.file);
        }*/
    },
    created:function(){
        this.listarEmployees();
    },
    computed:{}
});