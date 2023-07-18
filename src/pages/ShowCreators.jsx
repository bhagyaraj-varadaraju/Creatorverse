import { useState, useEffect } from 'react';
import { supabase } from '../SupabaseClient';
import CreatorCard from '../components/CreatorCard';

function ShowCreators() {
    const [creatorData, setCreatorData] = useState([])

    useEffect(() => {
        //READ all the creators
        const getCreators = async() => {
            const { data } = await supabase
                    .from('Creators')
                    .select()
                    .order('created_at', { ascending: false });

            // Set the retrieved creators to the state variable
            if(data.length != 0) {
                setCreatorData(data)
            }
        }
        getCreators().catch(console.error);
    }, []);

    return (
        <div className='ShowCreators'>
            {
                creatorData &&
                creatorData.length > 0
                ?   creatorData.map((creator, idx) => <CreatorCard   key={idx}
                                                                creatorId={creator.creatorId}
                                                                name={creator.name}
                                                                imageUrl={creator.imageUrl}
                                                                description={creator.description}
                                                                youtube={creator.youtube}
                                                                twitter={creator.twitter}
                                                                instagram={creator.instagram} />)
                :   <h3 size='md'>No creators yet😔</h3>
            }
        </div>
    )
}

export default ShowCreators
