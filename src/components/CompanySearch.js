import SearchForm from './SearchFrom';
import CompaniesList from './CompaniesList';
import { Layout, Divider } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

export default function CompanySearch() {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <Header
        style={{ color: '#fff', fontWeight: 'bold', padding: '0 9vw' }}
      >
        <div className="logo" />
        Company Search
      </Header>
      <Content style={{ padding: '0 9vw' }}>
        <Divider>Filter</Divider>
        <SearchForm />
        <Divider>Companies</Divider>
        <CompaniesList />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Company Search Demo ©2022 Created by Maxim Werkhowski<br />
        <a href="https://github.com/galymax/company-search-frontend" target="_blank" rel="noreferrer">
          <GithubOutlined /> front end
        </a> <a href="https://github.com/galymax/company-search-backend" target="_blank" rel="noreferrer">
          <GithubOutlined /> back end
        </a>
      </Footer>
    </Layout>
  );
}