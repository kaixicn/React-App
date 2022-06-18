import { Breadcrumb } from 'antd';

export default function BreadcrumbNavigation() {
    return(
        <Breadcrumb style={{ margin: '16px 0', }}>
            <Breadcrumb.Item>工事中</Breadcrumb.Item>
            <Breadcrumb.Item>工事中1</Breadcrumb.Item>
            <Breadcrumb.Item>工事中2</Breadcrumb.Item>
        </Breadcrumb>
    )
}
