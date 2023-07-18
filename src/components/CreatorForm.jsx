function CreatorForm({creator, setCreator}) {

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator(  {...creator, [name]:value} );
    }

    return (
        <div>
            <form id="CreatorForm">
                <label>Name</label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} required />
                
                <label>Image
                    <p>Provide a link to an image of your creator. Be sure to include the http://</p>
                </label>
                <input type="text" id="image" name="imageUrl" value={creator.imageUrl} onChange={handleChange} required />
                
                <label>Description
                    <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
                </label>
                <textarea rows="3" cols="50" id="description" name="description" value={creator.description} onChange={handleChange} required ></textarea>
                
                <h3>Social Media Links</h3>
                <p>Provide at least one of the creator's social media links.</p>
                
                <label><span className="fa-brands fa-youtube"></span> YouTube
                    <p>The creator's YouTube handle (without the @)</p>
                </label>
                <input type="text" id="youtube" name="youtube" value={creator.youtube} onChange={handleChange} />
                
                <label><span className="fa-brands fa-twitter"></span> Twitter
                    <p>The creator's Twitter handle (without the @)</p>
                </label><input type="text" id="twitter" name="twitter" value={creator.twitter} onChange={handleChange} />
                
                <label><span className="fa-brands fa-instagram"></span> Instagram
                    <p>The creator's Instagram handle (without the @)</p></label>
                <input type="text" id="instagram" name="instagram" value={creator.instagram} onChange={handleChange} />
            </form>
        </div>
    )
}

export default CreatorForm
