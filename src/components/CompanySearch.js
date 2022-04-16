import SearchForm from './SearchFrom';
import CompaniesList from './CompaniesList';
import { Layout, Divider, Typography } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

export default function CompanySearch() {
    const { Header, Content, Footer } = Layout;
    const { Title } = Typography;

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Divider>Filter</Divider>
                <SearchForm />
                <Divider>Companies</Divider>
                <CompaniesList />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Company Search Demo ©2022 Created by Maxim Werkhowski<br />
                <a href="https://github.com/galymax/company-search-frontend" target="_blank">
                    <GithubOutlined /> front end
                </a> <a href="https://github.com/galymax/company-search-backend" target="_blank">
                    <GithubOutlined /> back end
                </a>
            </Footer>
        </Layout>
    );
}