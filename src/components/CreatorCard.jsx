import { Link } from 'react-router-dom'

function CreatorCard(creator) {

    return (
        <article className="CreatorCard" style={{backgroundImage: `url( ${creator.imageUrl} )` }}>
            <div className="card-header-name">
                <h3>{creator.name}</h3>
                {
                    creator.youtube &&
                    <Link to={'https://www.youtube.com/' + creator.youtube} target='_blank'>
                        <span className="fa-brands fa-youtube" />
                    </Link>
                }
                {
                    creator.twitter &&
                    <Link to={'https://www.twitter.com/' + creator.twitter} target='_blank'>
                        <span className="fa-brands fa-twitter" />
                    </Link>
                }
                {
                    creator.instagram &&
                    <Link to={'https://www.instagram.com/' + creator.instagram} target='_blank'>
                        <span className="fa-brands fa-instagram" />
                    </Link>
                }
                <Link to={'/' + creator.creatorId}>
                    <span className="fa-solid fa-circle-info" />
                </Link>
            </div>
            <div className="card-description">
                <p>{creator.description}</p>
            </div>
        </article>
    )
}

export default CreatorCard
