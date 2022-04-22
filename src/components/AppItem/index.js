
import "./index.css"

const AppItem = (props) => {
    const { appDetails } = props
    const { appId, appName, imageUrl } = appDetails
    return (
        <div>
            <img src={imageUrl} alt={appId} className="image" />
            <p className="des">{appName}</p>
        </div>
    )
}
export default AppItem
