import React from 'react';
import ReactDOM from 'react-dom';
// import { LocaleProvider, DatePicker, message, Table } from 'antd';
// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale-provider/zh_CN';
import {Button} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            petType: 'cat'
        };
    }
    getRowClassName(record) {
        if (record.age > 40) {
            return 'warn'
        }
        return 'success';
    }
    render() {
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

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
        }];
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
