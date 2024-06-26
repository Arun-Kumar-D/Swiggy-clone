import { RESTAURANTS_MENU_API, generateProxyUrl } from '../utils/constants'
import { useState, useEffect } from 'react'

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    const [menuInfo, setMenuInfo] = useState(null)
    useEffect(() => {
        fetchRestaurantMenu();
    }, [])
    async function fetchRestaurantMenu() {
        const resource = RESTAURANTS_MENU_API + resId
        const data = await fetch(resource);
        const json = await data.json()

        const restaurantInfo = json?.data?.cards[0]?.card?.card?.info
        setResInfo(restaurantInfo)
        
        let card = json?.data?.cards?.find(card=>card.groupedCard)
        let menuCards = card?.groupedCard?.cardGroupMap?.REGULAR?.cards
        const menu = menuCards?.filter(card => card.card.card.itemCards !== undefined)
        setMenuInfo(menu)
    }
    return { restaurantInfo: resInfo, menuInfo }
}

export default useRestaurantMenu;