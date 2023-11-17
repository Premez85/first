import {CORE_CONCEPTS} from '../data';
import CoreConsept from './CoreConsept';
import Section from './Section';

export default function CoreConsepts() {
    function listItems() {
        return CORE_CONCEPTS.map(val => <CoreConsept key={val.title} {...val}/>);
    }
    return (
        <Section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {listItems()}
            </ul>
        </Section>
    );

}