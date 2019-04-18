import { TabBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'
import { tabs } from './config'

const selectedColor = '#108ee9'

export default function Footer() {
    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor={selectedColor}
            barTintColor="white"
            tabBarPosition="bottom"
            noRenderContent
        >
            {tabs.map(tab => {
                return (
                    <TabBar.Item
                        title={tab.title}
                        key={tab.key}
                        icon={<IconSvg name={tab.icon} />}
                        selectedIcon={<IconSvg name={tab.icon} style={{ color: selectedColor }} />}
                        selected={false}
                        onPress={() => {
                            console.log(tab.key + ' pressed')
                        }}
                    />
                )
            })}
        </TabBar>
    )
}
