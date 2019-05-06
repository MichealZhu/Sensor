import './index.css'
import { useState } from 'react'
import { tradeConnector } from '@src/components/Connect'

function Trade() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div styleName="trade">
            <div styleName="content">
                <div styleName="item">
                    <div styleName="label">用户名：</div>
                    <input
                        type="text"
                        placeholder="请输入用户名"
                        value={username}
                        onChange={eve => {
                            setUsername(eve.target.value)
                        }}
                    />
                </div>
                <div styleName="item">
                    <div styleName="label">密码：</div>
                    <input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={eve => {
                            setPassword(eve.target.value)
                        }}
                    />
                </div>
                <div styleName="footer">
                    <button
                        onClick={() => {
                            tradeConnector.login(username, password)
                        }}
                    >
                        登录
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Trade
