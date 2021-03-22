import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './PokePanel.css';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PokePanel = ({ pokemon }) => {
    return (
        <Tabs>
            <TabList className='ml-4'>
                <Nav fill>
                    <Tab>General</Tab>
                    <Tab>Game Stats</Tab>
                </Nav>
            </TabList>
            <TabPanel>
                <Card.Body>
                    <div className='col'>
                        <Card.Subtitle> Name: </Card.Subtitle>
                        <p>
                            <em>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            </em>
                        </p>

                        <Card.Subtitle> Base Experience: </Card.Subtitle>
                        <p>
                            <em>
                                {pokemon.base_experience}
                            </em>
                        </p>
                    </div>
                    <div className='col'>

                        <Card.Subtitle> Height: </Card.Subtitle>
                        <p>
                            <em>
                                {pokemon.height}
                            </em>
                        </p>

                        <Card.Subtitle> Weight: </Card.Subtitle>
                        <p>
                            <em>
                                {pokemon.weight}
                            </em>
                        </p>
                    </div>
                </Card.Body>
            </TabPanel>
            <TabPanel>
                <Card.Body>
                    {pokemon.stats.map((stat, index) => {
                        return (
                            <Col>
                                <Card.Subtitle
                                    id={'sub-' + index}>
                                    {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:
                                </Card.Subtitle>
                                <ProgressBar
                                    id={'prof-' + index}
                                    now={stat.base_stat}
                                    label={stat.base_stat}
                                    variant={stat.base_stat > 100 ?
                                        'warning'
                                        :
                                        null
                                    }
                                />
                                <br />
                            </Col>
                        )
                    })}
                </Card.Body>
            </TabPanel>
        </Tabs>
    )
}

export default PokePanel
