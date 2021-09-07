import React, { useState } from 'react';

const AddAdmin = () => {
    const [info, setInfo] = useState({})
    console.log(info);
    const handleBlur = (e) => {
        const email = e.target.value;
        
        setInfo(email);
    }

    const handleSubmit = () => {
        fetch('https://aqueous-depths-21897.herokuapp.com/admin', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ info })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Result placed Successfully");
            })
    }
    return (
        <section className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-11 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add an Admin</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Admin Email</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter email" required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default AddAdmin;