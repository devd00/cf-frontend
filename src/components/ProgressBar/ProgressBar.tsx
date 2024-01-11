


import { CircularProgressbar,  buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import Room from "../../Pages/Room/Room"

interface ProgressBarProps {
	children: React.ReactNode,
	value: number
}

function ProgressBar (props: ProgressBarProps){
   const {children, value} = props; 

    return (
    
        
           <CircularProgressbarWithChildren value={value}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
               {children}
            </CircularProgressbarWithChildren>
           
	
    )
}

export default ProgressBar