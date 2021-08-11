import { ready } from 'https://lsong.org/scripts/dom.js';
import { h, render, useState, useEffect } from 'https://unpkg.com/htm/preact/standalone.module.js';

const App = () => {
  const [ip, setAddress] = useState('');
  useEffect(() => {
    fetch('https://api.lsong.me/ip')
      .then(res => res.text())
      .then(setAddress)
  });
  return [
    h('h2', null, "My IP Address"),
    h('ul', null, [
      h('li', null, ip)
    ])
  ]
}

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});
