import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../SupabaseClient';

function ViewCreator() {
    const [creator, setCreator] = useState({ name: "", imageUrl: "", description: "", youtube: "", twitter:"", instagram:"" });
    const { id } = useParams();

    useEffect(() => {
        const getCreator = async () => {
            // GET the selected Creator
            const { data } = await supabase
                .from("Creators")
                .select()
                .eq('creatorId', id);

            // Set the retrieved post creator to the state variable
            if (data && data.length != 0) {
                setCreator(data[0]);
            }
        }

        getCreator().catch(console.error);
    }, [])

    const deleteCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('Creators')
        .delete()
        .eq('creatorId', id);

        setCreator({ name: "", imageUrl: "", description: "", youtube: "", twitter:"", instagram:"" });

        useNavigate("/");
    }

    return (
        <div className="ViewCreator">
            <section className="creator-image">
                <img src={creator.imageUrl} alt={creator.name}/>
            </section>

            <section className="creator-info">
                <h2>{creator.name}</h2>
                <p>{creator.description}</p>
                {
                    creator.youtube &&
                    <Link to={'https://www.youtube.com/' + creator.youtube} target='_blank'>
                        <button className="social-button">
                            <span className="fa-brands fa-youtube" />
                            @{creator.youtube}
                        </button>
                    </Link>
                }
                {
                    creator.twitter &&
                    <Link to={'https://www.twitter.com/' + creator.twitter} target='_blank'>
                        <button className="social-button">
                            <span className="fa-brands fa-twitter" />
                            @{creator.twitter}
                        </button>
                    </Link>
                }
                {
                    creator.instagram &&
                    <Link to={'https://www.instagram.com/' + creator.instagram} target='_blank'>
                        <button className="social-button">
                            <span className="fa-brands fa-instagram" />
                            @{creator.instagram}
                        </button>
                    </Link>
                }
            </section>

            <nav className="modify-creator">
                <ul>
                    <li>
                        <Link to={'/edit/' + id}>
                            <button role='button'>Edit</button>
                        </Link>
                    </li>
                    <li>
                        <button role='button' className="delete-button" onClick={deleteCreator}>Delete</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ViewCreator
