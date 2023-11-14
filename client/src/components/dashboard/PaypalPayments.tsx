import React, {useContext} from "react"
import {Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, ModalOverlay, Button, OrderedList} from "@chakra-ui/react"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { UserContext } from "../../Context/UserContextProvider"
import { UserContextType } from "../../types/Context/signin"
import { CreditContext } from "../../Context/CreditsContext"
import { ICreditsContextValues } from "../../types/Context/credits"
import { useNavigate } from "react-router-dom"
import { PurchaseContext } from "../../Context/PurchaseContext"
import { IPurchaseContextValues } from "../../types/Context/payment"

const PaypalPayment = ({
    isOpen, onClose, checkoutInfos
}: {
    isOpen: boolean,
    onClose: () => void,
    checkoutInfos: {
        id: number ,
        category: string, 
        description: string, 
        cost: string, 
        amount: number
    }
}) => {
    const {user} = useContext(UserContext) as UserContextType
    const {credits} = useContext(CreditContext) as ICreditsContextValues
    const {setIsPaymentSuccessful, setCreditsPurchased} = useContext(PurchaseContext) as IPurchaseContextValues
    const navigate = useNavigate()
    console.log(checkoutInfos)
    const createOrder = () => {
        return fetch("http://localhost:8000/api/my-server/create-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                product: {
                    category: checkoutInfos?.category,
                    description: checkoutInfos?.description,
                    cost: checkoutInfos?.cost
                }
            })
        })
        .then((response) => response.json())
        .then((order: {jsonResponse: {id: string}}) => order.jsonResponse.id)
    }

    const onApprove = (data: {orderID: string}) => {
        return fetch("http://localhost:8000/api/my-server/capture-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderId: data.orderID,
                userId: user.id,
                creditsAmount: checkoutInfos.amount,
                prevCreditsAmt: credits
            })
        })
        .then((response) => {
            setCreditsPurchased(checkoutInfos.amount)
            setIsPaymentSuccessful(true)
            navigate("/dashboard?payment=success")
            return response.json()
        })
    }
    return (
        <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent backgroundColor="gray.900">
            <ModalHeader fontFamily="Inter, sans-serif" textColor="gray.300">
              Choose a payment method
            </ModalHeader>
            <ModalBody>
                <PayPalButtons 
                createOrder={(data, actions) => createOrder()} 
                onApprove={(data, actions) => onApprove(data)} />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} colorScheme="gray">Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default PaypalPayment