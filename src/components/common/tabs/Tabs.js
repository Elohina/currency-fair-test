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
        <ul>
            {
                list.map((element) => {
                    return(
                        <li id={`tab-${element.key}`} className={`tab-item ${(this.state.active === element.key) && 'active'}`} key={element.key}>
                            <a href="#{tab}" className="tab-link" onClick={(e)=>this.onSelect(element.key)}>{element.title}</a>
                        </li>
                    )
                })
            }
        </ul>

        )
    }

}

export default Tabs;