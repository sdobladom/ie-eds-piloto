import { h, render, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { html } from 'htm/preact';

function Carousel({ items }) {
  return html`
    <ul>
      ${items.map(item => html`<li>${item.title}</li>`)}
    </ul>
  `;
}

export default function decorate(block) {
  const items = [...block.querySelectorAll('p')]
    .map(p => ({ title: p.textContent }));
  render(html`<${Carousel} items=${items} />`, block);
}