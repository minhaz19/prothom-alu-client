import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddNews = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.Title,
            author: data.Author,
            category: data.Category,
            description: data.Description,
            imageURL: imageURL
        }
        console.log(eventData);
        const url = 'https://aqueous-depths-21897.herokuapp.com/addNews';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5ea7a2c6eb8f29555dc17cad13bc581f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(res => setImageURL(res.data.data.display_url))
    }

    return (
        <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
            <div className="col-lg-11 col-md-11 col-sm-11 col-11 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a News</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>News Title:</p>
                    <input className="form-control" name="Title" placeholder="News name" {...register("Title")} />
                    <br />
                    <p>Author:</p>
                    <input className="form-control" name="Author" placeholder="News Author" {...register("Author")} />
                    <br />
                    <p>Category:</p>
                    <input className="form-control" name="Category" placeholder="News Category" {...register("Category")}/>
                    <br />
                    <p>Description:</p>
                    <input className="form-control" name="Description" placeholder="News description" {...register("Description")} />
                    <br />
                    <p>Upload News Image:</p>
                    <input type="file" name="imageFile" onChange={handleImageUpload} />
                    <br/>                   
                    <input className="btn btn-danger text-white mt-3" type="submit" />
                </form>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="Title"  placeholder="Title" {...register("Title")} />
                    <br />
                    <input className="form-control" name="Author"  placeholder="Author" {...register("Author")} />
                    <br />
                    <input  className="form-control" name="Category" placeholder="Category" {...register("Category")} />
                    <br />
                    <input className="form-control " name="Description" placeholder="Description" {...register("Description")} />
                    <br />
                    <input   type="file" name="imageFile" onChange={handleImageUpload}/>
                    <br />
                    <input type="submit" className="btn btn-danger"/>
                </form> */}
            </div>
        </div>

    );
};

export default AddNews;