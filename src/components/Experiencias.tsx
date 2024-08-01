import React from 'react';

const Experiencias: React.FC = () => {
    return (
        <div className="experiencias">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="content">
                            <h1>Experiências únicas em <span>gerenciamento</span> & <span>qualidade</span>.</h1>
                            <ul className="row">
                                <li className="col-lg-4">
                                    <div className="icon-bg">
                                        <img src="images/icon-suporte.png" alt="" />
                                    </div>
                                    <h2>Suporte</h2>
                                    <p>A nossa diferença para os concorrentes é que após a venda oferecemos suporte via
                                        e-mail, WhatsApp, Skype, e tudo isso por um preço acessível a todos.</p>
                                </li>
                                <li className="col-lg-4">
                                    <div className="icon-bg">
                                        <img src="images/icon-customizavel.png" alt="" />
                                    </div>
                                    <h2>Customizável</h2>
                                    <p>Realizamos atendimento a solicitações de sistemas com soluções específicas, sob
                                        medida para sua empresa.</p>
                                </li>
                                <li className="col-lg-4">
                                    <div className="icon-bg">
                                        <img src="images/icon-seguranca.png" alt="" />
                                    </div>
                                    <h2>Segurança</h2>
                                    <p>Suas informações em total segurança e protegidas com criptografia de ponta,
                                        utilizando as melhores ferramentas do mercado.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiencias;