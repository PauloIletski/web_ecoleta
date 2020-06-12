import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      <form>
        <h1>Cadastro do Ponto de coleta</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className='field'>
              <label htmlFor="name">Nome da entidade</label>
              <input
                type="text"
                name="name"
                id="name" />

            </div>
          <div className="fieldGroup">
           
            <div className='field'>
              <label htmlFor="email">e-mail</label>
              <input
                type="email"
                name="email"
                id="email" />

            </div>

            <div className='field'>
              <label htmlFor="whatsapp">WhatssApp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp" />

            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePoint;