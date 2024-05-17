import  { useEffect, useState }  from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { getCategory } from '../../services/servicesCategory';
import { CreateProducts } from '../../services/servicesProduct';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function CreateProduct(pros) {
    const { onReLoad } = pros;

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [categoris, setCategoris] = useState([]);


    useEffect(() =>{
        const  fetchApi = async () =>{
            const result = await getCategory();
            // console.log(result)
            setCategoris(result);
        }
        fetchApi();
    },[])


    // console.log(categoris);
    function openModal() {
        setShowModal(true);
    };
    
    function closeModal() {
        setShowModal(false);
    }

    const handleonchange = (e) =>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const result = await CreateProducts(data);
                // console.log(data);
                if(result) {
                    setShowModal(false);
                    onReLoad();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Tạo mới thành công",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
    }
    return (
        <>
            <button onClick={openModal} className='button' style={{ width:"200px" }}>Thêm sản phẩm mới</button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handlesubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tiêu đề</td>
                                <td>
                                    <input type='text' name='title' onChange={handleonchange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Danh mục</td>
                                <td>
                                    <select name='category' onChange={handleonchange}>
                                        {categoris.map((item, index) =>(
                                            <option key={index} value={item}> {item} </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Giá</td>
                                <td>
                                    <input type='text' name='price' onChange={handleonchange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Giảm giá</td>
                                <td>
                                    <input type='text' name='discountPercentage' onChange={handleonchange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng còn lại</td>
                                <td>
                                    <input type='number'  name='stock' onChange={handleonchange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Đường dẫn ảnh</td>
                                <td>
                                    <input type='text' name='thumbnail' onChange={handleonchange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>
                                    <textarea name='description' style={{ width:'250px', height:'120px' }} onChange={handleonchange}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>Hủy</button>
                                </td>
                                <td>
                                   <input type='submit' value='Tạo mới'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    )
}

export default CreateProduct;