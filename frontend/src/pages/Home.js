
import logo from './auxcreations.png';
import logofond from './img/tricot.png';

const Home = () => {


<main className="App-main">

    <img src={logo} className="App-logo" alt="logo" />

   

    <img src={logofond} className="App-logoFond" alt="logoFond" />


    <div className="App-ContactBar">

        <p>
            <ul className="about--link">
                <li className="about--link-item">Contactez-nous !</li><link rel="aboutUs" href="AboutUs.js" />
                <li className="about--link-item">Mentions légales</li>
                <li className="about--link-item">Politique de condifentialité</li>

            </ul>
        </p>
    </div>
</main>
   </div >
  );
}
export default Home;