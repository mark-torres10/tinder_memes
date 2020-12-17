import React from 'react'; 
import './Card.css'; 
import 'react-icons/fa'; 



const Card = ({url}) => {

     return (
        <div className="card">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <h1>Here's a card!</h1>
            {/* Meme image */} 
            <img className="meme-image" src={url} alt=""/>
            {/* Add buttons on the bottom (via Font Awesome) */}
            <div className="bottom-of-card">
                {/* return button */}
                <span className="reaction-icons">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-undo fa-stack-1x fa-inverse"></i>
                </span>
                {/* X button */}
                <span className="reaction-icons">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-undo fa-stack-1x fa-inverse"></i>
                </span>
                {/* Star button */ }
                {/* Heart button */}
                {/* Lightning button */}
            </div>
            


        </div>
    )
} 

export default Card; 