import { useParams } from "react-router-dom";
import { Error } from "../Error/Error";
import { useEffect } from "react";
// import { useOrderStore } from "../../contexts/storeContext";
import { Loader } from "../Loader/Loader";
import { observer } from "mobx-react-lite";
import order from "../../store/order";
import Item from "../Item/Item";    


const Profile = () => {
    const {profileId} = useParams<string>();

    if (!profileId || profileId.split(' ').length < 2) {
        return <Error />
    }

    useEffect(() => {
        order.loadProfile(profileId.split(' '), profileId)
    }, [profileId])

    if (order.profile?.state === 'rejected' || order.profileProducts?.state === 'rejected') {
        return <Error />
    }
    
    if (order.profile?.state === 'pending' || order.profileProducts?.state === 'pending') {
        return <Loader/>
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col__12">
                    <ul>
                        {order.profileProducts?.value.articles.map(item => (
                            <li key={item.slug}>
                                <Item item={item}  />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}


export default observer(Profile);