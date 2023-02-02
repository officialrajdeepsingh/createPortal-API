import React from 'react';

function Card({onClick}) {
    return (
        <div className="col">
            <div className="card h-100">
            <div class="card">
                <img src="https://picsum.photos/250/250" height={250} width={250} class="card-img-top" alt="picsum random API"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-body">
                    <a href="/" class="btn btn-dark mx-2">Read Now</a>
                    <button href="/" onClick={onClick} class="btn btn-primary"> Share</button>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Card;