import {useState} from 'react';
import {EXAMPLES} from '../data';
import TabButton from './TabButton';
import Tab from './Tab';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(par) {
        setSelectedTopic(par);
    }
    return (
        <section id='examples'>
            <h2>Examples</h2>
            <Tab
                buttons={
                <>
                    <TabButton
                        onClick={() => handleClick('components')}
                        isSelected={selectedTopic === 'components'}
                    >
                        Components
                    </TabButton>
                    <TabButton
                        onClick={() => handleClick('jsx')}
                        isSelected={selectedTopic === 'jsx'}
                    >
                        JSX
                    </TabButton>
                    <TabButton
                        onClick={() => handleClick('props')}
                        isSelected={selectedTopic === 'props'}
                    >
                        Props
                    </TabButton>
                    <TabButton
                        onClick={() => handleClick('state')}
                        isSelected={selectedTopic === 'state'}
                    >
                        State
                    </TabButton>
                </>
            }
            >
            {
                !selectedTopic ?
                    ('Plese choice the topic')
                    :
                    (<div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>)
            }
            </Tab>
{/*            {
                !selectedTopic ?
                    ('Plese choice the topic')
                    :
                    (<div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>)
            }*/}
        </section>
    );
}