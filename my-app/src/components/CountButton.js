import { Button, Flex } from 'antd';
import {useState} from 'react'

function CountButton(props) {
    //set variable to track our count using state
    const [theCount, setTheCount] = useState(0);

    //function to update the count
    function updateTheCount() { 
        setTheCount(theCount + 1)
    }

    return (
        <Flex>
            <div>{theCount}</div>
            <Button onClick={() => updateTheCount()}>Press Me</Button>
        </Flex>
    )
    
}

export default CountButton;