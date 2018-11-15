import React from "react";
import './Tabs.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs_list: props.items,
            active: props.items[0].key
        };
    }

    onSelect(key) {
        this.setState({active: key});
    }

    render() {
        const list = this.state.tabs_list;

        return(
        <div>
            <ul>
                {
                    list.map((element) => {
                        return(
                            <li id={`tab-${element.key}`} className={`tab-item ${(this.state.active === element.key) && 'active'}`} key={element.key}>
                                <a href="#{tab}" className="tab-link" onClick={(e)=>this.onSelect(element.key)} disabled={element.disabled} >
                                    <h6>{element.subtitle}</h6>
                                    <h4>{element.title}</h4>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            {this.props.children}
        </div>
        )
    }

}

export default Tabs;