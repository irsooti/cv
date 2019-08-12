import './components/Experience';
import './components/Bio';

(function main() {
  window.document.querySelector('bio-wc').list = [
    {
      url: 'https://danieleirsuti.dev',
      description: 'Appunti e portfolio',
    },
    {
      url: 'https://github.com/irsooti',
      description: 'GitHub',
    },
    {
      url: 'mailto:irsooti@gmail.com',
      description: 'Email',
    },
    {
      url: 'https://www.linkedin.com/in/daniele-irsuti',
      description: 'Linkedin',
    },
  ];
  console.log('Hail, to the web components! 🚾');
}());
