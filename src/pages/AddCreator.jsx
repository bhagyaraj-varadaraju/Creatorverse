import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import CreatorForm from '../components/CreatorForm';
import { supabase } from '../SupabaseClient';

function AddCreator() {

    const [creator, setCreator] = useState({ name: "", imageUrl: "", description: "", youtube: "", twitter:"", instagram:"" });
    const navigate = useNavigate();

    const insertCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('Creators')
        .insert({ name: creator.name, imageUrl: creator.imageUrl, description: creator.description, youtube: creator.youtube, twitter: creator.twitter, instagram: creator.instagram })
        .select();

        setCreator({ name: "", imageUrl: "", description: "", youtube: "", twitter:"", instagram:"" });

        navigate("/");
    }

    return (
        <div className="AddEditCreator">
            <CreatorForm creator={creator} setCreator={setCreator} />

            <button onClick={insertCreator}>Submit</button>
        </div>
    )
}

export default AddCreator
