
import Header from './components/Header/Header';
import CoreConsepts from './components/CoreConsepts';
import componentImg from './assets/components.png';
import Examples from './components/Examples';





function App() {

    return (
        <div>
            <Header />
            <main>
                <CoreConsepts/>
                <Examples/>
            </main>
        </div>
    );
}

export default App;