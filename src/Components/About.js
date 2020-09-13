import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

class About extends Component {
    render() {

        const howToGetTickets =

            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Sed sagittis rhoncus efficitur. Vestibulum porta sed ex vel posuere. ' +
            'Nunc at congue augue. Ut eget nulla vitae elit dapibus lobortis. Pellentesque ' +
            'sed efficitur erat. Nam imperdiet ante nibh, et interdum enim varius eget. ' +
            'Suspendisse commodo nibh quis enim dapibus, ut malesuada nunc vulputate. ' +
            'Ut rhoncus lobortis ex. Vestibulum eros risus, pellentesque quis est viverra, ' +
            'rutrum maximus ipsum. Nunc id leo augue. Etiam tincidunt massa libero, ' +
            'eu pellentesque augue lacinia nec. Duis lacinia sem ultrices nibh tempus interdum sed et lacus.'

        return (
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <h2>Sobre os Ingressos</h2>

                        <p>{howToGetTickets}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="nine columns main-col">
                        <h2>Para curtir um som</h2>
                        <br></br>
                        <Carousel style={{backgroundColor:"transparent"}}>
                            <div>
                                <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTJ7xPn4vNaz" width="300"
                                        height="380" frameBorder="0" allowTransparency="true"
                                        allow="encrypted-media"></iframe>
                            </div>
                            <div style={{backgroundColor:"transparent"}}>
                                <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTJ7xPn4vNaz" width="300"
                                        height="380" frameBorder="0" allowTransparency="true"
                                        allow="encrypted-media"></iframe>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
