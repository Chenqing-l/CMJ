import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './IndexPage.scss';
// 引入自定义菜单
import MyMenu from '@/components/MyMenu';
// 引入封装路由
import RouterView from '@/routes/RouterView'

const { Header, Content, Sider } = Layout;


class IndexPage extends React.Component{
  render(){
    console.log('this.router...', this.props);
    return (
      // 先上下布局
      <Layout className={styles.wrap}>
        <Header className="header">
          头部
        </Header>
        {/* 再左右布局 */}
        <Layout className={styles.container}>
          <Sider width={200} className={styles.sider}>
            <MyMenu/>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className={styles.content}>
              {/* <p className='sider content'>Content</p> */}

              <RouterView routes={this.props.routes}/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(IndexPage);
