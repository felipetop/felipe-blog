/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Blog',
    imageUrl: 'img/postagens/felipe.png',
    description: (
      <>
       Minha visão sobre tecnologia, ética e inovação no trabalho é discutida no blog, onde trato de assuntos técnicos, ética e o que faz um desenvolvedor ser realmente eficiente. Lá, abordo temas diversos, incluindo tecnologia e questões éticas, a ideia é compartilhar conhecimento útil do que aprendi durante os anos, compartilhando conhecimento técnico e também filosóficos, ressaltando que não basta apenas ter conhecimentos técnicos, mas também é fundamental promover uma cultura de trabalho saudável e inovadora.
      </>
    ),
    hotmartUrl: '/blog',
    freeChapterUrl: '/blog',
  },
  {
    title: 'Pixel Art',
    imageUrl: 'img/postagens/pixelart.jpg',
    description: (
      <>
        A muito tempo eu tenho brincado com pixel art, fazendo pokémons e digimons em pixel art, e com o tempo fui pegando gosto, a anos atrás eu comecei um projeto de um game baseado em final fantasy tactics, eu adotei o estilo de ragnarok online, onde usava personagens 2.5d como pixel art para colocar um estilo diferenciado no meu game, com isso criei vários personagens em 2.5d para meu projeto, atualmente estou contando com a ajuda de Halina, uma experiente desenhista que está dando continuidade a este trabalho.
      </>
    ),
    hotmartUrl: 'https://www.deviantart.com/felipetop',
    freeChapterUrl: 'https://www.deviantart.com/felipetop',
  },
  {
    title: 'Mythicon, um game inspirado no Brasil',
    imageUrl: 'img/postagens/mythicon.png',
    description: (
      <>
        Gostaria de compartilhar com vocês uma empolgante novidade do mundo dos jogos: Mythicon! Se você é fã de Pokémon e se encanta com as ricas lendas brasileiras, este game é feito sob medida para você.
        Mythicon é um jogo fascinante que mergulha fundo no vasto universo do folclore brasileiro, trazendo criaturinhas mágicas e misteriosas diretamente das lendas. Desenvolvido com cuidado e atenção aos detalhes, o jogo busca preservar a essência dessas histórias e oferecer aos jogadores uma experiência única e envolvente.
      </>
    ),
    hotmartUrl: 'https://mythicon.surge.sh/',
    freeChapterUrl: 'https://mythicon.surge.sh/',
  },
];

function Feature({imageUrl, title, description, hotmartUrl, freeChapterUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <Link to={hotmartUrl} rel="noopener noreferrer">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </Link>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={clsx('button-group', 'text--center', styles.centerButtonGroup)}>
        <Link to={hotmartUrl} className="button button--primary" target="_blank" rel="noopener noreferrer">Ira para a página</Link>
      </div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner, 'headerBackground')}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>

          <div className="hero__content row">
            <div className="col col--3">
              <div className="hero__image-container">
                <Link to="/blog/felipe-jorge-sales-da-silva" >
                <img
                  className="hero__subtitle-image"
                  src={useBaseUrl('/img/autor/felipe-jorge.png')}
                  alt="Felipe Jorge Sales da Silva"
                  style={{ borderRadius: '8px' }}
                />
                </Link>

              </div>
            </div>
            <div className="col col--9">
              <div className="hero__text-container">
                <p className="hero__subtitle">    
                  Felipe Jorge Sales da Silva é um Analista de Sistemas apaixonado por tecnologia e desenvolvimento web. Com mais de 8 anos de experiência, ele se destaca na criação e manutenção de websites, blogs e  sistemas, desenvolvendo sistemas altamente performáticos e acessíveis. Atualmente, ele é Desenvolvedor Front-end Angular no Santander Tecnologia Brasil. Felipe também é empreendedor, oferecendo serviços de criação de websites de qualidade e soluções inovadoras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description, hotmartUrl, freeChapterUrl}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                    hotmartUrl={hotmartUrl}
                    freeChapterUrl={freeChapterUrl}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
