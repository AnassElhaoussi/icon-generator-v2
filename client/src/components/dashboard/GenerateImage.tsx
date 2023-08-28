import React, {useState} from "react"
import { Stack } from "@chakra-ui/react"
import { openai } from "../../helpers/openai_sdk"

const GenerateImage = () => {

    return (
        <Stack>
            <button 
            className="bg-gradient-to-r from-blue-900 to-blue-600 py-2 px-5 text-white font-light rounded-lg shadow-xl shadow-blue-900"
            
            >Generate</button>
            
        </Stack>
    )
}

export default GenerateImage