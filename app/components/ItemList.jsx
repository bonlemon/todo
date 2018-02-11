var React = require('react');

class ItemList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: this.props.data.items
        };

        this.filterList = this.filterList.bind(thid);
    }

    filterList(e){
        var text = e.target.value.trim();
        
        

        this.props.filter(text);
    }

    render(){
        return <input placeholder="Search" onChange={this.onTextChanged} />;
    }
}

module.exports = ItemList;