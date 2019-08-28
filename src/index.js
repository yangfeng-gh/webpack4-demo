import { cube } from './math';

function component() {
  let element = document.createElement('pre');
  element.innerHTML = ['hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');
  return element;
}

let element = component();
document.body.appendChild(element);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
