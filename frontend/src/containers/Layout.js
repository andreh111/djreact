import React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import '../App.css';
import {Link, useLocation, matchPath} from 'react-router-dom';

const {Header, Content, Footer} = Layout;

const CustomLayout = (props) => {
    let location = useLocation()
    console.log(location.pathname)
    const isArticleDetailPathActive = !!matchPath(
        location.pathname,
        '/:articleID'
    );
    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                    {
                        isArticleDetailPathActive ? <Breadcrumb.Item><Link to='/'>{`Article ${location.pathname.split('/')[1]}`}</Link></Breadcrumb.Item> : null
                    }
                </Breadcrumb>
                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default CustomLayout;
