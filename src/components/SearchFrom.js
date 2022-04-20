import { useCompanies } from '../data/CompaniesContext';
import { Form, Input, Checkbox, Row, Col, Spin } from 'antd'

export default function SearchForm() {
  const { state: { specialities, isLoading }, dispatch } = useCompanies()
  const { Search } = Input

  function updateCriteria(e, fields) {
    const values = fields.reduce((acc, el) => {
      acc[el.name] = el.value || ''
      return acc
    }, {})
    dispatch({ type: 'criteria', criteria: values })
  }

  return (
    <Form
      name="search"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFieldsChange={updateCriteria}
      autoComplete="off"
      layout="vertical"
    >

      <Form.Item name="name">
        <Search allowClear placeholder="Filter by company name" loading={isLoading} />
      </Form.Item>

      <Form.Item name="specialities" label="Specialities">
        {
        specialities.length ?
        <Checkbox.Group>
          <Row>
            {specialities.map(speciality => (
              <Col span={12}>
                <Checkbox value={speciality} style={{ lineHeight: '2em', textTransform: 'capitalize' }}>
                  {speciality}
                </Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
        : 
        <Spin />
        }
      </Form.Item>
    </Form>
  )
}