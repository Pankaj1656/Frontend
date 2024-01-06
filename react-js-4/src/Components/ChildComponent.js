import {useEffect} from 'react';

const ChildComponent=()=> {
    useEffect(()=>{
       console.log("[ChidComponent] Component Mounted")
    },[])

    useEffect(()=>{
        return ()=>{
            console.log("[ChildComponent] Component will Unmount")
        }
    },[])
    return (
        <div>
            ChildComponent
        </div>
    );
}

export default ChildComponent;
 
