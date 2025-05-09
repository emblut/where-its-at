import CartLink from '../../components/CartLink/CartLink';
import Logo from '../../components/Logo/Logo';
import SansitaHeading from '../../components/SansitaHeading/SansitaHeading';

import './LandingPage.css';

function LandingPage() {
  const sansitaHeading = {
    text: "Where It's @",
    classNames: 'sansita-heading',
    level: '1',
  };
  return (
    <>
      <header className='landing-header'>
        <CartLink />
      </header>
      <main>
        <div className='landing-page'>
          <section className='logo-section'>
            <Logo />
            <SansitaHeading sansitaHeading={sansitaHeading} />
            <h2 className='logo-section__slogan'>Ticketing made easy</h2>
          </section>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
