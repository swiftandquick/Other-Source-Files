import PropertyListItem from "./PropertyListItem";

export default function PropertyList({properties}) {
    return (
        <ul>
            {properties.map(p => <PropertyListItem {...p} key={p.id}/>)}
        </ul>
    );    
}