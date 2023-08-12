const searchText = document.getElementById('search');
const qrImage =  document.getElementById('image');

function qrCodeGenerator(){

    if(searchText.value.length> 0){
        
        qrImage.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${searchText.value}`;

    }
}
