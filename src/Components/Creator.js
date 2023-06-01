import React from "react";

const creatorData = [
   { name: "Shan Teylor",
     company: "Tech Mint",
     imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
     id:"1"
    },
    {
     name: "Ron Teylor",
     company: "Tech Mint",
     imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
     id:"2"
    },
    {
     name: "Harry Teylor",
     company: "Tech Mint",
     imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
     id:"3"
    },
    {
     name: "Hermoine",
     company: "Tech Mint",
     imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
     id:"4"
    }
]

const Creator = () => {
    return (
        <div className="creator-info">
            {creatorData.map((person) => (
                <div key={person.id} className="creator-each">
                    <img src={person.imageUrl} width="150px"/> 
                    <h3>{person.name}</h3>
                    <p>{person.company}</p>
                    <button>Follow</button>
                </div>
            ))}
        </div>
    )
}
export default Creator;