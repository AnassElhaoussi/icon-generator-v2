import React from "react"
import {Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, ModalOverlay, Button, OrderedList} from "@chakra-ui/react"
import { PayPalButtons } from "@paypal/react-paypal-js"

const PaypalPayment = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
    const createOrder = () => {
        return fetch("http://localhost:8000/api/my-server/create-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                product: {
                    description: "descirption",
                    cost: "20.00"
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
                orderId: data.orderID
            })
        })
        .then((response) => response.json())
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