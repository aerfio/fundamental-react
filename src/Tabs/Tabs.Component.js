import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';
import { TabComponent, Tabs } from '../';

export const TabsComponent = () => {
    const tabscomponentCode = `
    <Tabs>
    <TabComponent ids={[{id : '1', url:'#', name: 'Tab 1', content: 'Hello world', disabled: false},
                             {id : '2', url:'#', name: 'Tab 2', content: 'Hello world 2', disabled: false},
                             {id : '3', url:'#', name: 'Tab 3', content: 'Hello world 3', disabled: true}]}>
    </TabComponent>
    </Tabs>`;

    return (
        <div>
            <Header>Tabs</Header>
            <Description>
                Tabs are based on a folder metaphor and used to separate content into different sections. Tabs should be
                ordered to create a visual hierarchy based on priority.
            </Description>
            <Import sourceModule={require('./Tabs')} />
            <Separator />
            <Properties
                properties={[
                    { name: 'id', description: 'id of the tab' },
                    { name: 'name', description: 'name of the tab' },
                    { name: 'content', description: 'the content to display when the tab is pressed' },
                    { name: 'disabled', description: 'disable the tab based on true or false' }
                ]}
                type='Tab Inputs' />
            <Properties
                properties={[
                    { name: 'ids', description: 'array of objects to use for each tab' },
                    { name: 'className', description: 'string - class to add to tab' },
                    { name: 'tabContentProps', description: 'object - additional props to be spread to the tab\'s content' },
                    { name: 'tabLinkProps', description: 'object - additional props to be spread to the tab\'s link' },
                    { name: 'tabProps', description: 'object - additional props to be spread to the tab' }
                ]}
                type='TabComponent Inputs' />
            <Separator />
            <DocsTile>
                <Tabs>
                    <TabComponent
                        ids={[
                            { id: '1', url: '#', name: 'Tab 1', content: 'Hello world', disabled: false },
                            { id: '2', url: '#', name: 'Tab 2', content: 'Hello world 2', disabled: false },
                            { id: '3', url: '#', name: 'Tab 3', content: 'Hello world 3', disabled: true }
                        ]} />
                </Tabs>
            </DocsTile>
            <DocsText>{tabscomponentCode}</DocsText>
            <Separator />
            <h2>Playground</h2>
            <Playground
                component='tabs'
                schema={[
                    {
                        attribute: 'ids',
                        typeOfAttribute: 'lists',
                        'enum': ['Tab 1', 'Tab 2', 'Tab 3']
                    },
                    {
                        attribute: 'content',
                        typeOfAttribute: 'listsContent',
                        'enum': ['Tab 1', 'Tab 2', 'Tab 3']
                    }
                ]}>
                <Tabs>
                    <TabComponent
                        ids={[
                            { id: 'Tab 1', url: '#', name: 'Tab 1', content: 'Hello world', disabled: false },
                            { id: 'Tab 2', url: '#', name: 'Tab 2', content: 'Hello world 2', disabled: false },
                            { id: 'Tab 3', url: '#', name: 'Tab 3', content: 'Hello world 3', disabled: true }
                        ]} />
                </Tabs>
            </Playground>
        </div>
    );
};
