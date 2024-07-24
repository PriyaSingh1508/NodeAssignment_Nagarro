var toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

try {
    console.log(viewData);
    viewData.errors?.main?.forEach(item => {
        toastMixin.fire({
            title: item,
            icon: 'error'
          });
    })
}
catch(ex){

    console.log("No Error Messages");

}

try {
    console.log(viewData);
    viewData.success?.main?.forEach(item => {
        toastMixin.fire({
            title: item,
            icon: 'success'
        });
    })
}
catch(ex){

    console.log("No Success Messages");


}

    