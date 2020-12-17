import React from 'react'; 
import './Card.css'; 
import 'react-icons/fa'; 



const Card = ({url}) => {

     return (
        <div className="card">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <div className="top-of-card">
                <h1>Here's a card!</h1>
            </div>
            {/* Meme image */} 
            <img className="meme-image" src={url} alt=""/>
            {/* Add buttons on the bottom (via Font Awesome) */}
            <div className="bottom-of-card">
                {/* return button */}
                <div className="reaction-icons">
                    <i class="fa fa-undo fa-stack-1x fa-inverse"></i>
                </div>
                {/* X button */}
                <div className="reaction-icons">
                    <i class="fa fa-times fa-stack-1x fa-inverse"></i>
                </div>
                {/* Star button */ }
                <div className="reaction-icons">
                    <i class="fa fa-star fa-stack-1x fa-inverse"></i>
                </div>
                {/* Heart button */}
                <div className="reaction-icons">
                    <i class="fa fa-heart fa-stack-1x fa-inverse"></i>
                </div>
                {/* Lightning button */}
                <div className="reaction-icons">
                    <i class="fa fa-bolt fa-stack-1x fa-inverse"></i>
                </div>
            </div>
            


        </div>
    )
} 

export default Card; 