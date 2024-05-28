// import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <img
          src='https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm mahek</h1>
      <p>
        I blog about web development .
      </p>
    </section>
  );
}

export default Hero;
