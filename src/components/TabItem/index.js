import "./index.css"

const TabItem = (props) => {

    const { tabDetails, changeTab, isActive } = props
    const { tabId, displayText } = tabDetails
    const updateTabId = () => {
        changeTab(tabId)
    }
    const style1 = isActive ? "active-tab-btn" : ""
    return (
        <button type="button" className={`tab-btn ${style1}`} onClick={updateTabId} > {displayText}</button >
    )
}

export default TabItem