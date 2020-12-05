var url = "../bd/crudemployeesDB.php";
var appSuppliers = new Vue({
    el: "#appEmployees",
    data:{
        employees: [],
        LastName: "",
        FirstName: "",
        Usuario: "",
        Password: "",
        Title: "",
        TitleOfCourtesy: "",
        BirthDate: "",
        HireDate: "",
        Address: "",
        City: "",
        Region: "",
        PostalCode: "",
        Country: "",
        HomePhone: "",
        Extension: "",
        Photo: "",
        Notes: "",
        ReportsTo: "",
        PhotoPath: ""
    },
    methods:{
        btnAlta:async function(){
            const {value: formValues} = await 
            Swal.fire({
                title: 'Nuevo Empleado',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> Last <br> Name </label><div class = "col-sm-7"><input id = "LastName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> First<br>Name </label><div class = "col-sm-7"><input id = "FirstName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Usuario </label><div class = "col-sm-7"><input id = "Usuario" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Password </label><div class = "col-sm-7"><input id = "Password" type = "pass" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Title </label><div class = "col-sm-7"><input id = "Title" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Title <br> Of <br> Courtesy </label><div class = "col-sm-7"><input id = "TitleOfCourtesy" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> BirthDate </label><div class = "col-sm-7"><input id = "BirthDate" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> HireDate </label><div class = "col-sm-7"><input id = "HireDate" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Address </label><div class = "col-sm-7"><input id = "Address" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> City </label><div class = "col-sm-7"><input id = "City" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Region </label><div class = "col-sm-7"><input id = "Region" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Postal <br> Code </label><div class = "col-sm-7"><input id = "PostalCode" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Country </label><div class = "col-sm-7"><input id = "Country" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Home <br> Phone </label><div class = "col-sm-7"><input id = "HomePhone" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Extension </label><div class = "col-sm-7"><input id = "Extension" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Photo </label><div class = "col-sm-7"><input id = "Photo" type="file" accept="image/x-png,image/jpeg" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Notes </label><div class = "col-sm-7"><input id = "Notes" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Reports <br> To </label><div class = "col-sm-7"><input id = "ReportsTo" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> PhotoPath </label><div class = "col-sm-7"><input id = "PhotoPath" type = "text" class = "form-control"></div></div>',
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
                        this.Usuario = document.getElementById('Usuario').value,
                        this.Password = document.getElementById('Password').value,
                        this.Title = document.getElementById('Title').value,
                        this.TitleOfCourtesy = document.getElementById('TitleOfCourtesy').value,
                        this.BirthDate = document.getElementById('BirthDate').value,
                        this.HireDate = document.getElementById('HireDate').value,
                        this.Address = document.getElementById('Address').value,
                        this.City = document.getElementById('City').value,
                        this.Region = document.getElementById('Region').value,
                        this.PostalCode = document.getElementById('PostalCode').value,
                        this.Country = document.getElementById('Country').value,
                        this.HomePhone = document.getElementById('HomePhone').value,
                        this.Extension = document.getElementById('Extension').value,
                        this.Photo = document.getElementById('Photo').value,
                        this.Notes = document.getElementById('Notes').value,
                        this.ReportsTo = document.getElementById('ReportsTo').value,
                        this.PhotoPath = document.getElementById('PhotoPath').value
					]
				}
			}) 
            if(this.LastName == "" || this.FirstName == "" || this.Usuario == "" || this.Password == "" || this.Title == "" || this.TitleOfCourtesy == "" || this.BirthDate == "" || this.HireDate == "" || this.Address == "" ||  this.City == "" || this.Region == "" || this.PostalCode == "" || this.Country == "" || this.HomePhone == "" || this.Extension == "" || this.Photo == "" || this.Notes == "" || this.ReportsTo == "" || this.PhotoPath == "") {
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
        btnEditar:async function(EmployeeID, LastName, FirstName, Usuario, Password, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Photo, Notes, ReportsTo, PhotoPath){
            await Swal.fire({
				title: 'Editar Registro',
                html: '<div class = "form-group"><div class = "row"><label class = "col-sm-3 col-form-label"> Last <br> Name </label><div class = "col-sm-7"><input id = "LastName" value="'+LastName+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> First<br>Name </label><div class = "col-sm-7"><input id = "FirstName" value="'+FirstName+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Usuario </label><div class = "col-sm-7"><input id = "Usuario" value="'+Usuario+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Password </label><div class = "col-sm-7"><input id = "Password" value="'+Password+'" type = "pass" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Title </label><div class = "col-sm-7"><input id = "Title" value="'+Title+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Title <br> Of <br> Courtesy </label><div class = "col-sm-7"><input id = "TitleOfCourtesy" value="'+TitleOfCourtesy+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> BirthDate </label><div class = "col-sm-7"><input id = "BirthDate" value="'+BirthDate+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> HireDate </label><div class = "col-sm-7"><input id = "HireDate" value="'+HireDate+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Address </label><div class = "col-sm-7"><input id = "Address" value="'+Address+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> City </label><div class = "col-sm-7"><input id = "City" value="'+City+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Region </label><div class = "col-sm-7"><input id = "Region" value="'+Region+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Postal <br> Code </label><div class = "col-sm-7"><input id = "PostalCode" value="'+PostalCode+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Country </label><div class = "col-sm-7"><input id = "Country" value="'+Country+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Home <br> Phone </label><div class = "col-sm-7"><input id = "HomePhone" value="'+HomePhone+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Extension </label><div class = "col-sm-7"><input id = "Extension" value="'+Extension+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Photo </label><div class = "col-sm-7"><input id = "Photo" value="'+Photo+'" type="file" accept="image/x-png,image/jpeg" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Notes </label><div class = "col-sm-7"><input id = "Notes" value="'+Notes+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Reports <br> To </label><div class = "col-sm-7"><input id = "ReportsTo" value="'+ReportsTo+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> PhotoPath </label><div class = "col-sm-7"><input id = "PhotoPath" value="'+PhotoPath+'" type = "text" class = "form-control"></div></div></div>',
				//Falta Photo
                focusConfirm: false,
				showCancelButton: true,
			}).then((result) => {
			if (result.value) {
				//Captura los nuevos datos si es que se modifican
				LastName = document.getElementById('LastName').value,
                FirstName = document.getElementById('FirstName').value,
                Usuario = document.getElementById('Usuario').value,
                Password = document.getElementById('Password').value,
                Title = document.getElementById('Title').value,
                TitleOfCourtesy = document.getElementById('TitleOfCourtesy').value,
                BirthDate = document.getElementById('BirthDate').value,
                HireDate = document.getElementById('HireDate').value,
                Address = document.getElementById('Address').value,
                City = document.getElementById('City').value,
                Region = document.getElementById('Region').value,
                PostalCode = document.getElementById('PostalCode').value,
                Country = document.getElementById('Country').value,
                HomePhone = document.getElementById('HomePhone').value,
                Extension = document.getElementById('Extension').value,
                Photo = document.getElementById('Photo').value,
                Notes = document.getElementById('Notes').value,
                ReportsTo = document.getElementById('ReportsTo').value,
                PhotoPath = document.getElementById('PhotoPath').value,
				this.editarEmployees(EmployeeID, LastName, FirstName, Usuario, Password, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Photo, Notes, ReportsTo, PhotoPath);
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
					this.borrarSuppliers(EmployeeID);
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
                console.log(this.employees);
            });
        },
        //Procedimiento crear
        altaEmployees:function() {
            axios.post(url, {opcion:1, LastName:this.LastName, FirstName:this.FirstName, Usuario:this.Usuario, Password:this.Password, Title:this.Title, TitleOfCourtesy:this.TitleOfCourtesy, BirthDate:this.BirthDate, HireDate:this.HireDate, Address:this.Address, City:this.City, Region:this.Region, PostalCode:this.PostalCode, Country:this.Country, HomePhone:this.HomePhone, Extension:this.Extension, Photo:this.Photo, Notes:this.Notes, ReportsTo:this.ReportsTo, PhotoPath:this.PhotoPath}).then(response => {
                this.listarEmployees();
            });
            this.LastName = "";
            this.FirstName = "";
            this.Usuario = "";
            this.Password = "";
            this.Title = "";
            this.TitleOfCourtesy = "";
            this.BirthDate = "";
            this.HireDate = "";
            this.Address = "";
            this.City = "";
            this.Region = "";
            this.PostalCode = "";
            this.Country = "";
            this.HomePhone = "";
            this.Extension = "";
            this.Photo = "";
            this.Notes = "";
            this.ReportsTo = "";
            this.PhotoPath = "";
        },
        //Procedimiento editar
        editarEmployees:function(EmployeeID, LastName, FirstName, Usuario, Password, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Photo, Notes, ReportsTo, PhotoPath) {
            axios.post(url, {opcion:2, LastName:LastName, FirstName:FirstName, Usuario:Usuario, Password:Password, Title:Title, TitleOfCourtesy:TitleOfCourtesy, BirthDate:BirthDate, HireDate:HireDate, Address:Address, City:City, Region:Region, PostalCode:PostalCode, Country:Country, HomePhone:HomePhone, Extension:Extension, Photo:Photo, Notes:Notes, ReportsTo:ReportsTo, PhotoPath:PhotoPath}).then(response => {
                this.listarEmployees();
            });
        },
        //Procedimiento borrar
        borrarEmployees:function(EmployeeID) {
            axios.post(url, {opcion:3, EmployeeID:EmployeeID}).then(response =>{
                this.listarEmployees();
            });
        }
    },
    created:function(){
        this.listarEmployees();
    },
    computed:{}
});