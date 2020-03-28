import React from 'react';

import Menu from '../componentes/Menu';
import { Layout } from 'antd';
import Footer from '../componentes/Footer.js';
import Sidebar from '../componentes/Sidebar';

class InformacionServicios extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <div>
                    <Menu />
                </div>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Footer />
                </div>
            </Layout>
        );
    }
}

export default InformacionServicios;