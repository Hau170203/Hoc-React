import { country } from "../../data/Country";
// import './CounTry.css';
import './CounTry.scss';

function Country() {
    console.log(country);
    return (
        <>
            <ul className="Country">
                {(country || []).map((itemCountry) =>(
                    <li key={itemCountry.id} className="Country__name">
                        <span className="Country__text">{itemCountry.name}</span>
                        <ul className="Country__list">
                        {/* Check xem city có rỗng không ta sử dụng (itemCountry.city || []) */}
                        {(itemCountry.city || []).map((itemCity) =>(
                            <li key={itemCity.id} className="Country__list--item">{itemCity.name}</li>
                        ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Country;