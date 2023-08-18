// If I want to define styles inline, I have to use two pairs of curly braces.  
export default function Heading({color = 'olive', text}) {
    return <h1 style={{color: color}}>{text}</h1>;
}