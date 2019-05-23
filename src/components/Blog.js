import React from 'react';
import { Header } from 'semantic-ui-react';

class Blog extends React.Component {
    render() {
        return <div>
            <Header as="h2">{this.props.title}</Header>
            {this.props.content}
        </div>;
    }
}