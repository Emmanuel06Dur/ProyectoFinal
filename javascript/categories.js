var url = '../bd/crudcategories.php';

var appMoviles = new Vue({
  el: '#appMoviles',
  data:{
    moviles:[],
    CategoryID:"",
    CategoryName:"",
    Description:"",

  },
  methods:{
    //BOTONES
    btnAlta: async function(){
      const {value: formValues} = await Swal.fire({
        title: 'NUEVA CATEGORIA',
        html:
      '<div class="row"><label class="col-sm-3 col-form-label">CategoryName</label><div class="col-sm-7"><input id="CategoryName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Description</label><div class="col-sm-7"><input id="Description" type="text"  class="form-control"></div><div>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        confirmButtonColor: '#1cc88a',
        cancelButtonColor: '#3085d6',
        preConfirm: () => {
          return [
            this.CategoryName = document.getElementById('CategoryName').value,
            this.Description = document.getElementById('Description').value
          ]
        }
      })
      if(this.CategoryName == "" || this.Description == ""){
        Swal.fire({
          type: 'info',
          title: 'Datos incompletos',
        })
      }else {
                //Llamamos a la function para dar de alta al móvil y para mostrar que fue agregado exitosamente un producto.
                this.altaMovil(); 
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    icon: 'success',
                    type: 'success',
                    title: 'Nuevo Producto agregado con exito!!'
                })
            }



        },
    btnEditar: async function(CategoryID, CategoryName, Description){
    //console.log("ID: "+id+" - Pacientes: "+Pacientes+" - Doctor :"+Doctor+" - fecha: "+fecha+"- Motivo: "+Motivo+");
    await Swal.fire({
      title: 'EDITAR',
      html:
      '<div class="row"><label class="col-sm-3 col-form-label">CategoryName</label><div class="col-sm-7"><input id="CategoryName"  value="'+CategoryName+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Description</label><div class="col-sm-7"><input id="Description"  value="'+Description+'" type="text" class="form-control"></div></div>',
     
      focusConfirm: false,
      showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          //captura los nuevos datos si es que se modifican.
          CategoryName = document.getElementById('CategoryName').value,
          Description = document.getElementById('Description').value,

          this.editarMovil(CategoryID,CategoryName,Description);
          Swal.fire(
            '¡Actualizado!',
            'El registro ha sido actualizado.',
            'success'
          )
        }
      });
    },
    btnBorrar: function(CategoryID){
      Swal.fire({
        title: '¿Está seguro de borrar el regitro: '+CategoryID+" ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#D33',
        cancelButtonColor: '#3885D6',
        confirmButtonText: 'Borrar',
      }).then((result) => {
        if (result.value) {
          this.borrarMovil(CategoryID);
          //Y mostramos un mensaje sobre la eliminación
          Swal.fire(
            '¡Eliminado!',
            'El registro ha sido borrado.',
            'success'
          )
        }
      })
    },
    //PROCEDIMIENTOS
    //Procedimiento Listar
    listarMoviles:function(){
      axios.post(url, {opcion:4}).then(response =>{
        this.moviles = response.data;
        //console.log(this.moviles);
      });
    },
    //Procedimiento CREAR
    altaMovil:function(){
      axios.post(url, {opcion:1, CategoryName:this.CategoryName, Description:this.Description}).then(response =>{
        this.listarMoviles();
      });
      this.CategoryName = "";
      this.Description = "";
    },

    //Procedimieto EDITAR
    editarMovil:function(CategoryID, CategoryName, Description){
      axios.post(url, {opcion:2, CategoryID:CategoryID, CategoryName:CategoryName, Description:Description}).then(response =>{
        this.listarMoviles();
      });
    },

    //Procedimiento BORRAR
    borrarMovil:function(CategoryID){
      axios.post(url, {opcion:3, CategoryID:CategoryID}).then(response =>{
        this.listarMoviles();
      });
    }
  },
  created: function(){
    this.listarMoviles();
  },
  
  computed:{
    
  }
}); 