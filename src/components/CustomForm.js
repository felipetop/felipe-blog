import React from 'react';
import styles from './custom-form.module.css';

const CustomForm = ({ imageUrl, subscriptionId }) => {
  const formAction = `//handler.klicksend.com.br/subscription/${subscriptionId}`;

  return (
    <div className={styles['custom-form-container']} style={{ display: 'flex' }}>
      <img src={imageUrl} alt="Imagem do autor" style={{ marginRight: '20px', width: '50%', height: 'auto' }} />
      <form klicksend-form-id={subscriptionId} method="post" action={formAction}>
        <p>
          Receba GRATUITAMENTE em seu e-mail o E-book que pode transformar sua vida e de seus filhos. Saiba onde encontrar CONSELHOS BÍBLICOS para a EDIFICAÇÃO de sua Família.
        </p>
        <input type="email" name="email" id="email" placeholder="Email" required />
        <input type="text" name="first_name" id="first_name" placeholder="Primeiro Nome" />
        <div klicksend-gdpr-text style={{ fontSize: '10px', color: '#86919a', marginBottom: '5px', textAlign: 'left' }}>
          <p>
            Esses dados serão utilizados para entrarmos em contato com você e disponibilizarmos mais conteúdos e ofertas.
            Caso você não queira mais receber nossos emails, cada email que você receber incluirá, ao final, um link que poderá ser usado para remover o seu email da nossa lista de distribuição.
          </p>
          <p>
            Para mais informações, acesse: <a href="https://klickpages.com.br/politica-de-privacidade/" target="_blank" rel="noopener">https://klickpages.com.br/politica-de-privacidade/</a>
          </p>
        </div>
        <input type="checkbox" name="gdpr" id="gdpr" placeholder="Concordo em receber os e-mails" value="Concordo em receber os e-mails" required />
        <label htmlFor="gdpr">Concordo em receber os e-mails</label>
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name={`b_${subscriptionId}`} tabIndex="-1" value="" />
        </div>
        <button className="button button--primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CustomForm;