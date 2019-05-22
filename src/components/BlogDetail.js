import React from 'react';
import { Card } from 'semantic-ui-react';

class BlogDetail extends React.Component {
    render() {
        return <Card>
            <Card.Content>
                <Card.Header>
                    {this.title}
                </Card.Header>
                <Card.Meta>
                    <span className="date">Posted on {this.createdAt}</span>
                </Card.Meta>
            </Card.Content>
        </Card>;
    }
}

export default BlogDetail;
