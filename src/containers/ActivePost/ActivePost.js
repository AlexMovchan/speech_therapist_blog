import React, { Component } from 'react';
import { GET } from '../../fetchRequest';

class ActivePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePost: {}
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    GET(`/posts/${id}`)
      .then((res) => {
        this.setState(() => ({ activePost: res }));
      });
  }

  render() {
    const { activePost } = this.state;

    return (
      <div className="active-post">
        <h1>
          {activePost.header}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: activePost.post }} />
      </div>
    );
  }
}

export default ActivePost;
