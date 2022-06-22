import {useState, useEffect} from 'react'

export default function UserForm(){

    const [user, setUser] = useState();

    useEffect(()=>{
        setUser({
            fullName: "Homer Simpson",
            address: "123 Main St. Springfield",
            fastFood: "b",
            transportation: ["tp","t"],
            residence: "house",
            active: true
        });
    },[]);

    function handleChange(e){
        const target = e.target;
        let value = target.value;
        const name = target.name;

        if(target.type === "select-multiple"){
            value = [];
            
            for(let i = 0; i < target.options.length; i++){
                if(target.options[i].selected){
                    value.push(target.options[i].value)
                }
            }
        }else if(target.type === 'checkbox'){
            value = target.checked;
        }

        setUser(currentUser => {
            return {...currentUser, [name]: value }
        })

    };

    function handleSubmit(e){
        e.preventDefault();
        console.log("TODO: POST / PUT User to an API");
        console.log(user);
    };

    if(user){
        return (
            <>
                <h3>User Form</h3>
                <form onSubmit={handleSubmit}>
                    Full Name: <input type="text" name="fullName" value={user.fullName} onChange={handleChange} />
                    <br /><br />
                    Address:<br />
                    <textarea name="address" value={user.address} onChange={handleChange}></textarea>
                    <br /><br />
                    Favourite Fast Food:<br />
                    <select name="fastFood" value={user.fastFood} onChange={handleChange}>
                        <option value="b">Burgers</option>
                        <option value="p">Pizza</option>
                        <option value="t">Tacos</option>
                        <option value="ff">French Fries</option>
                    </select>
                    <br /><br />
                    Transportation:<br />
                    <select multiple name="transportation" value={user.transportation} onChange={handleChange}>
                        <option value="c">Car</option>
                        <option value="b">Bus</option>
                        <option value="t">Train</option>
                        <option value="tp">Teleportation</option>
                    </select>
                    <br /><br />
                    Current Residence:<br />
                    <input type="radio" name="residence" value="house" checked={user.residence === "house"} onChange={handleChange}/> House
                    <input type="radio" name="residence" value="apartment" checked={user.residence === "apartment"} onChange={handleChange}/> Apartment
                    <input type="radio" name="residence" value="condo" checked={user.residence === "condo"} onChange={handleChange}/> Condo
                    <br /><br />
                    <input type="checkbox" name="active" checked={user.active} onChange={handleChange} /> Active
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }else{
        return <p>Loading...</p>
    }

    
}