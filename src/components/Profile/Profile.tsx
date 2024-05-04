import { useParams } from "react-router-dom";
import { Error } from "../Error/Error";
import { useEffect } from "react";
import { Loader } from "../Loader/Loader";
import { observer } from "mobx-react-lite";
import order from "../../store/order";
import Item from "../Item/Item";    
import PaginationRounded from "../Pagination/Pagination";


const Profile = () => {
    const {profileId, page} = useParams<string>();

    if (!profileId || profileId.split(' ').length < 2) {
        return <Error />
    }

    if (page){
        if (isNaN(+page)) {
            return <Error />
        }
    }

    const newPage = page ? (+page) - 1 : 0

    useEffect(() => {
        order.loadProfile(profileId.split(' '), profileId, newPage)
    }, [profileId, newPage])

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
                        <PaginationRounded 
                            count={order.profileProducts?.value.articlesCount} 
                            newId={newPage ? newPage + 1 : 0}
                            profilePage={profileId}/>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}


export default observer(Profile);