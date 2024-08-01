import Header from '../components/Header';
import React from 'react';
import Carrossel from '../components/Carrossel';
import Experiencias from '@/components/Experiencias';


export default function Home() {
  const Items = [
    {
      image: '/images/tab-slide1.png',
      title: 'NF-e Prime: Nota Fiscal Eletrônica e ERP.',
      description: 'Para sua empresa que precisa se adaptar a essa nova realidade a ERS Soluções lançou o NFe Prime, feito sob medida para a sua empresa com o custo que cabe no seu bolso...'
    },
    {
      image: '/images/tab-slide2.png',
      title: 'PlenitudeSystem: Sistema de Gerenciamento de Funerárias e Planos.',
      description: 'É um sistema de gerenciamento de funerárias e planos funerários, que possibilitam um gerenciamento organizacional pleno através de...'
    },
    {
      image: '/images/tab-slide3.png',
      title: 'HoteleiroSoft: Sistema de Gerenciamento de Hotéis e Pousadas.',
      description: 'O HoteleiroSoft é um sistema destinado ao gerenciamento de Hotéis e Pousadas, com ele você pode facilmente gerenciar seu negócio, de modo fácil, rápido e seguro podendo realizar verificações desde um controle...'
    }
  ];

  return (
    <>
      <Header />
      <Carrossel items={Items} />
      <Experiencias />
    </>
  );
}
