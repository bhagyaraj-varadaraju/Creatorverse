import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CreatorForm from '../components/CreatorForm'
import { supabase } from '../SupabaseClient'

function EditCreator() {
    const [creator, setCreator] = useState({ name: "", imageUrl: "", description: "", youtube: "", twitter:"", instagram:"" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCreator = async () => {
            const {data} = await supabase
                            .from("Creators")
                            .select()
                            .eq('creatorId', id);

            setCreator(data[0]);
        }

        getCreator().catch(console.error);
    }, [])

    const updateCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('Creators')
        .update({ name: creator.name, imageUrl: creator.imageUrl, description: creator.description, youtube: creator.youtube, twitter: creator.twitter, instagram: creator.instagram })
        .eq('creatorId', id);

        navigate("/");
    }

    const deleteCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('Creators')
        .delete()
        .eq('creatorId', id);

        setCreator({ name: "", imageUrl: "", description: "", youtube: "", twitter:"", instagram:"" });

        navigate("/");
    }

    return (
        <div className="AddEditCreator">
            <CreatorForm creator={creator} setCreator={setCreator} />
            
            <nav>
                <ul>
                    <li>
                        <button onClick={updateCreator}>Submit</button>
                    </li>
                    <li>
                        <button className="delete-button" onClick={deleteCreator}>Delete</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default EditCreator
