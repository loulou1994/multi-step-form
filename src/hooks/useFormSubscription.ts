import { useContext } from "react";
import {useSubscriptionFormContextType, SubscriptionFormContext} from "../context/subscriptionFormProvider"

const useFormSubscription = ():useSubscriptionFormContextType => {
    return useContext(SubscriptionFormContext) as useSubscriptionFormContextType
}

export default useFormSubscription