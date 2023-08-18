import React from "react";

const creatorData = [
   { name: "Shan Teylor",
     company: "Tech Mint",
     imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
     id:"1"
    },
    {
     name: "Merin Teylor",
     company: "Tech Mint",
     imageUrl: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1692379037/Img1_phtdyj.jpg",
     id:"2"
    },
    {
     name: "Harry George",
     company: "Tech Mint",
     imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
     id:"3"
    },
    {
     name: "David James",
     company: "Tech Mint",
     imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
     id:"4"
    }
]

const Creator = () => {
    const [followClicks, setFollowClicks] = React.useState({});

    const handleFollowClick = (id) => {
        setFollowClicks((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
      };
    return (
        <div className="creator-main">
            <div className="creator-top">
                <img src="https://res.cloudinary.com/dj0nbhjiy/image/upload/v1685727404/png-transparent-quill-paper-pens-fountain-pen-feather-feather-ink-animals-leaf-thumbnail-removebg-preview_kwrv5r.png" height="30px"/>
                <h2>Creators you should follow</h2>
            </div>
            <div className="creator-info">
                {creatorData.map((person) => (
                    <div key={person.id} className="creator-each">
                        <img src={person.imageUrl} width="150px"/> 
                        <h3>{person.name}</h3>
                        <p>{person.company}</p>
                        <button className="follow-button" onClick={() => handleFollowClick(person.id)}>
                            {followClicks[person.id] ? "Unfollow" : "Follow"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Creator;