import React, { useEffect } from 'react';
import { tsParticles } from 'https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm';
import { loadAll } from 'https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm';
import { useMediaQuery } from 'react-responsive';


function ParticleEffect() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const loadParticles = async () => {
      await loadAll(tsParticles);

      await tsParticles.addPreset('lightdark', {
        fullScreen: {
          enable: false,
        },
        particles: {
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
          number: {
            value: isMobile ? 30 : 100, // Adjust the number of particles for mobile
          },
          opacity: {
            value: { min: 0.3, max: 1 },
          },
          shape: {
            type: ['circle', 'square', 'triangle', 'polygon'],
            options: {
              polygon: [
                { sides: 5 },
                { sides: 6 },
                { sides: 8 },
              ],
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      });

      await tsParticles.load({
        id: 'light',
        options: {
          preset: 'lightdark',
          particles: {
            color: { value: '#6c6c6c' },
            links: { color: '#6c6c6c' },
          },
        },
      });
    };

    loadParticles();
  }, [isMobile]);

  return (
    <div id="light" className="particle-container">
      <h1>Streamlined Your Project Search</h1>
      <h2>And Boost Your Hustle With Ease</h2>
      <a href='/register'>
        <button type='submit'>Register Now</button>
      </a>
    </div>
  );
}

export default ParticleEffect;
