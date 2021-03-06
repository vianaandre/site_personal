import Head from 'next/head';
import React, { useContext } from 'react';
import Header from '../../components/Header';
import NavBarBlog from '../../components/NavBarBlog';
import ContextProdutos from '../../context/ContextProdutos';
import StyledProdutos from '../../styles/pages/Produtos';
import CardProdutos from '../../components/CardProdutos';
import Container from '../../styles/container';
import Footer from '../../components/Footer';
import ButtonFloat from '../../components/ButtonFloat';
import Copyrigth from '../../components/Copyrigth';
import Without from '../../components/Without';

const TemplatesProdutos: React.FC = () => {

  const { data } = useContext(ContextProdutos);

  return (
    <StyledProdutos>
      <Head>

        <title>André | Produtos</title>

      </Head>
      <Header />
      <NavBarBlog />
      <Container>
        <div className={'secaoProdutos'}>
          {data.allCardprodutos.length > 0 ? <ul className="produtos">
            {data.allCardprodutos.map(({ href, title, store, description }, index) => (
              <CardProdutos key={index} href={href} title={title} store={store} value={description.value}/>
            ))}
          </ul> : <Without currentText={'Produtos'} />}
        </div>
      </Container>
      <Footer />
      <Copyrigth />
      <ButtonFloat />
    </StyledProdutos>
  )
}

export default TemplatesProdutos;
