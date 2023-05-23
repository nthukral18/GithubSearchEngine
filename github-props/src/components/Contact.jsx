import React from "react"
import { useState } from "react"
import axios from "axios"
function Contact(){
    const[formData,setFormData] = useState({
        fname : "",
        lname : "",
        phone : "",
        email : "",
        date : "",
        time : "",
        address : "",
        city : "",
        state : "",
        postcode : ""
    })

    function onChangeHandler(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    async function onSubmitHandler(e){
        try{
            e.preventDefault();
            console.log("working")
            const res = await axios.post("http://localhost:5000/contact",formData)
            console.log(res)
        }
        catch(error){
            alert("error");
        }
    }
    return(
        <>
        <div class = "container">
            <form >
                <label for = "fname">First Name</label>
                <input type = "text" id = "fname" name = "fname" placeholder="Your name.." value={formData.fname} onChange={onChangeHandler}/>
                <label for = "lname">Last Name</label>
                <input type = "text" id = "lname" name = "lname" placeholder = " Your last name.." value={formData.lname} onChange={onChangeHandler}/>
                <label for = "email"> Email</label>
                <input type = "email" id = "email" name = "email" placeholder = "Your email" value={formData.email} onChange={onChangeHandler}/>
                <label for = "date"> Date</label>
                <input type = "date" id = "date" name = "date" value={formData.date} onChange={onChangeHandler}/>
                <label for = "time"> Time</label>
                <input type = "time" id = "time" name = "time"  value={formData.time} onChange={onChangeHandler} />
                <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Your address.." value={formData.address} onChange={onChangeHandler} />

            <label for="state">State</label>
            <input type="text" id="state" name="state" placeholder='Your State...' value={formData.state} onChange={onChangeHandler}/>

            <label for="city">City</label>
            <input type="text" id="city" name="city" placeholder='Your city...' value={formData.city} onChange={onChangeHandler}/>

            <label for="postcode">PostCode</label>
            <input type="text" id="postcode" name="postcode" placeholder='Your postcode...'  value={formData.postcode} onChange={onChangeHandler} />

            <input type="submit" value="Submit" onClick={onSubmitHandler} />
            </form>
        </div>
        </>
    )
}
export default Contact