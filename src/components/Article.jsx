import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Article({title, content}) {
  return (
    <div> 
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}