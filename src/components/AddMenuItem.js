import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

const ADDITEM = 'http://localhost:8080/menuItems';


const AddMenuItem = () => {
    const token = localStorage.getItem('token');
    const userRef = useRef();
    const errRef = useRef();

    const [itemName, setitemName] = useState('');
   
    const [itemDescription, setitemDescription] = useState('');


    const [price, setprice] = useState('');


    const [rid, setrid] = useState('');
   
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const bodyParameters = {
       key: "value"
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(ADDITEM,
                { itemName:itemName, itemDescription:itemDescription, price:price, rid:rid },
                {
                  //  headers: { 'Content-Type': 'application/json'},
                  headers: { Authorization: `Bearer ${token}` },
                    withCredentials: false,
                    
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setitemName('');
            setitemDescription('');
            setprice('');
            setrid('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } 
             else {
                setErrMsg('Action Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a >Item Added succefully on restaurant with id </a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="itemName">
                        Item Name :
                        </label>
                        <input
                            type="text"
                            id="itemName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setitemName(e.target.value)}
                            value={itemName}
                            aria-describedby="uidnote"
                        />
                        <p>
                            
                        </p>
                        <label htmlFor="itemDescription">
                            Item Description :
                        </label>
                        <input
                            type="text"
                            id="itemDescription"
                           // ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setitemDescription(e.target.value)}
                            value={itemDescription}
                            aria-describedby="uidnote"
                        />
                        <p>

                        </p>


                        <label htmlFor="price">
                            Price :
                        </label>
                        <input
                            type="text"
                            id="price"
                            onChange={(e) => setprice(e.target.value)}
                            value={price}
                            aria-describedby="pwdnote"
                        />

                            <p>
                            
                            </p>
                        <label htmlFor="rid">
                            Restaurant :
                        </label>
                        <input
                            type="text"
                            id="rid"
                            onChange={(e) => setrid(e.target.value)}
                            value={rid}
                            aria-describedby="confirmnote"
                        />

                            <p>

                            </p>
                        <button disabled={!itemName || !itemDescription || !price || !rid}>Add Item</button>
                    </form>
                </section>
            )}
        </>
    )
}

export default AddMenuItem