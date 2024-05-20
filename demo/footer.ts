import van from 'vanjs-core';
import vanjsLogo from './vanjs.svg';
import viteLogo from './vite.svg';
import { Github } from '../src';

const { footer, a, img, span } = van.tags;

export default function Footer() {
  return footer(
    { class: 'container mx-auto px-5 flex flex-row gap-3' },
    a(
      {
        class: 'py-3 flex items-center',
        href: 'https://vitejs.dev',
        target: '_blank',
      },
      img({ src: viteLogo, class: 'logo w-4 h-auto', alt: 'Vite logo' }),
    ),
    a(
      {
        class: 'py-3 flex items-center',
        href: 'https://vanjs.org',
        target: '_blank',
      },
      img({
        src: vanjsLogo,
        class: 'logo vanilla w-4 h-auto',
        alt: 'VanJS logo',
      }),
    ),
    a(
      {
        class: 'py-3 flex items-center',
        href: 'https://github.com/thednp/vanjs-feather',
        target: '_blank',
      },
      Github({ class: 'w-4 h-auto' }),
    ),
    span(
      { class: 'py-3 ml-auto text-sm' },
      span(
        {
          class: 'font-weight-800 font-stretch-125 text-black dark:text-white',
        },
        'thednp',
      ),
      ' © ' + new Date().getFullYear(),
    ),
  );
}
