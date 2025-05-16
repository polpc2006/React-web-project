
import React from 'react';
import './Univers.css';

export function Universe() {
  return (
    <div class="universe" style={{ marginTop: '2rem' }}>
      <h2>Univers</h2>
      <p>Aquesta secció està en construcció. Aviat afegirem més informació!</p>
      <table class="universe-table">
        <thead>
            <th>Títol</th>
            <th>Imatge</th>
            <th>Descripció</th>
        </thead>
        <tbody>
            <tr>
                <td>Personatge</td>
                <td>
                    <img width="500" height="281" src="fp0.png" alt="imatge-personatge-principal"></img>
                </td>
                <td>Personatge principal del videojoc</td>
            </tr>
            <tr>
                
            </tr>
        </tbody>
      </table>
    </div>
  );
}
