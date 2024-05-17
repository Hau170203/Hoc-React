// import  { useEffect, useState }  from 'react';
// import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { deleteProducts } from '../../services/servicesDelete';



function DeleteProduct(pros) {
    const { item, onLoad } = pros;

    const deleteProduct = async () =>{
        const result = await deleteProducts(item);
        if(result){
            onLoad();
            Swal.fire({
                title: " Đã xóa!",
                text: "Bạn đã xóa thành công.",
                icon: "success"
              });
        }
    }

    const HandleClick =  () =>{
        console.log(item);
        Swal.fire({
            title: "Bạn có chắc muốn xóa?",
            text: "Nếu xóa sẽ không thể khôi phục lại!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Vẫn xóa",
            cancelButtonText: "Hủy"
          }).then((result) => {
            if (result.isConfirmed) {
                if(result){
                    onLoad();
                    deleteProduct();
                }
            }
          });
    }

    return (
        <>
            <button onClick={ HandleClick } className='button button__delete'>Delete</button>
            
        </>
    )
}

export default DeleteProduct;