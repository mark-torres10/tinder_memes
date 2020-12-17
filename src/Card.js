import React from 'react'; 
import './Card.css'; 

const Card = (props) => {

    {/* Create arr of image links to loop through */}
    const test_links  = ["https://tse2.mm.bing.net/th?id=OIP.7b2nem-RbKmraEUU8SOH4AAAAA&pid=Api", 
                         "https://qph.fs.quoracdn.net/main-qimg-6d32bddfb0b0e98a46bb87d8cfafa8e1-c", 
                         "https://qph.fs.quoracdn.net/main-qimg-e8615c16d14b07c8210591ceb5317fc0"]; 


     return (
        <div className="card">
            <h1>Here's a card!</h1>
            {/* Loop through all images */} 
            <img className="meme_image" src={test_links[0]} alt="">
            </img>
        </div>
    )
} 

export default Card; 