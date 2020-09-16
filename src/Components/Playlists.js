import React from 'react';

const Playlists = () => {
    return (
        <section id='playlists'>
            <div className="row">
                <div className="nine columns main-col playlists">
                    <h2 style={{ fontSize: '32px', color: '#ffff' }}>Para curtir um som</h2>
                    <p>Veja as playlist clássicas que embalam os rocks na grandiosa Jardim de Alah</p>
                    <br></br>
                    <div>
                        <iframe
                            title={'Forever Jardim de Alah'}
                            src="https://open.spotify.com/embed/playlist/2trKrnX7NWugzwk6WNjHI9"
                            width="300"
                            height="80"
                            frameBorder="0"
                            allow="encrypted-media"
                        />
                    </div>
                    <div>
                        <iframe
                            title={'Forever Jardim de Alah 1'}
                            src="https://open.spotify.com/embed/playlist/60a5J0LQd515MVtTRDbAH6"
                            width="300"
                            height="80"
                            frameBorder="0"
                            allow="encrypted-media"
                        />
                    </div>
                    <div>
                        <iframe
                            title={'Forever Jardim de Alah 2'}
                            src="https://open.spotify.com/embed/playlist/0RvvxyVP4eyFNwt4gRb4Kt"
                            width="300"
                            height="80"
                            frameBorder="0"
                            allow="encrypted-media"
                        />
                    </div>
                    <div>
                        <iframe
                            title={'Forever Jardim de Alah 3'}
                            src="https://open.spotify.com/embed/playlist/21KLWrQ6uxn8l8boMMYrIP"
                            width="300"
                            height="80"
                            frameBorder="0"
                            allow="encrypted-media"
                        />
                    </div>
                    <div>
                        <iframe
                            title={'Forever Jardim de Alah 4'}
                            src="https://open.spotify.com/embed/playlist/0y2bYniUkFHjPTckeGn7CE"
                            width="300"
                            height="80"
                            frameBorder="0"
                            allow="encrypted-media"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Playlists
