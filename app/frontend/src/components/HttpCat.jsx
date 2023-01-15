import * as reactHttpCats from 'react-http-cats';
import { useState } from "react"

const HttpCat = () => {
    const [statusCat, setStatusCat] = useState('')

    return (
        <div>
             <input  
                id="httpStatusCat"
                type="text"
                value={ statusCat }
                onChange={ e => setStatusCat(e.target.value)}
            />
            <reactHttpCats.HttpCat status={ statusCat } />
        </div>
    )
}

export default HttpCat