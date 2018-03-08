import React from 'react';
import ReactDOM from 'react-dom';
// import { LocaleProvider, DatePicker, message, Table } from 'antd';
// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale-provider/zh_CN';
import {Button, Select, Menu, Dropdown, Icon, Table} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            petType: 'cat',
            dataSource: [{
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            }]
        };
    }
    getRowClassName(record) {
        if (record.age > 40) {
            return 'warn'
        }
        return 'success';
    }
    handleMenuClick(index, record, e) {
        console.log('click');
        console.log(record);
        console.log(index);
        console.log(e);
        const source = JSON.parse(JSON.stringify(this.state.dataSource));
        source[index].age = 100;
        this.setState({
            dataSource: source
        })
    }
    render() {

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            render:(text, record, index) => {
                console.log(text);
                const menu = (
                    <Menu onClick={this.handleMenuClick.bind(this, index, record)}>
                        <Menu.Item key="1">1st item</Menu.Item>
                        <Menu.Item key="2">2nd item</Menu.Item>
                        <Menu.Item key="3">3rd item</Menu.Item>
                    </Menu>
                );
                return (
                    <Dropdown overlay={menu}>
                        <Button>
                            Actions <Icon type="down" />
                        </Button>
                    </Dropdown>
                )
            }
        }];
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <Table dataSource={this.state.dataSource} columns={columns} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
