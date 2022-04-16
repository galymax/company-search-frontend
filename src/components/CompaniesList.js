import { useCompanies } from '../data/CompaniesContext';
import { List, Skeleton, Avatar } from 'antd'

export default function CompaniesList() {
    const { state: { companies, isLoading } } = useCompanies()

    return (
        <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={companies}
            size="large"
            style={{ backgroundColor: '#fff' }}
            bordered
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={'https://placekitten.com/64/64'} />}
                        title={item.name}
                        description={item.specialities.join(', ')}
                        style={{ textTransform: 'capitalize' }}
                    />
                    <div>{item.city}</div>
                </List.Item>
            )}
        />
    )
}