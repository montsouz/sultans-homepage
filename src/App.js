import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ExAlunos from './components/ExAlunos';
import Playlists from './components/Playlists';

const App = () => {
    return (
        <div className="App">
            <Header />
            <ExAlunos />
            {/* <Playlists /> */}
            {/* <Footer /> */}
        </div>
    );
};

export default App;
