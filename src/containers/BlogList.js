import React from 'react';
import BlogDetail from '../components/BlogDetail';
import { Card } from 'semantic-ui-react';

class BlogList extends React.Component {
    render() {
        return <Card.Group itemsPerRow={1}>
            {this.props.blogs.map((b, i) => <BlogDetail key={i} {...b} />)}
        </Card.Group>;
    }
}

export default BlogList;