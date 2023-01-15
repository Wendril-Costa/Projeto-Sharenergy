import * as reactHttpCats from 'react-http-cats';
import { useContext } from "react"
import { HttpCatContext } from '../context/HttpCatContext/HttpCatContext';

const HttpCat = () => {
    const { statusCat, setStatusCat } = useContext(HttpCatContext)

    return (
        <div>
             <input  
                id="httpStatusCat"
                type="text"
                value={ statusCat }
                onChange={ e => setStatusCat(e.target.value)}
            />
            <reactHttpCats.HttpCat status={ Number(statusCat) } />
        </div>
    )
}

export default HttpCat