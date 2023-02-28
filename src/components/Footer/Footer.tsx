import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-32 bg-cream flex justify-center w-screen h-72 py-20">
      <div className="w-2/4 flex">
        <div className="flex flex-col w-1/3 text-base text-left">
          <div className="font-karla-bold text-terracotta">Nosotros</div>
          <Link
            href={'/about'}
            className="font-tilt text-gray hover:text-avocado"
          >
            Conoce más
          </Link>
        </div>
        <div className="flex flex-col w-1/3 text-base text-left">
          <div className="font-karla-bold text-terracotta">Servicios</div>
          <Link href={'/'} className="font-tilt text-gray hover:text-avocado">
            Todos los Prodcutos
          </Link>
        </div>
        <div className="flex flex-col w-1/3 text-base text-left ">
          <div className="font-karla-bold text-terracotta">Hecho por</div>
          <p className="font-tilt text-gray">
            <Link
              href={'https://www.instagram.com/kifyblablabla/'}
              className="font-tilt text-gray hover:text-avocado"
            >
              @kifyblablabla
            </Link>{' '}
            tomado del{' '}
            <Link
              href={'https://platzi.com/cursos/next/'}
              className="font-tilt text-gray hover:text-avocado"
            >
              curso de NextJS de Platzi
            </Link>{' '}
            dictado por{' '}
            <Link
              href={'https://twitter.com/jonalvarezz'}
              className="font-tilt text-gray hover:text-avocado"
            >
              @jonalvarezz
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
