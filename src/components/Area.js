import React, {Component} from 'react';

class Area extends Component {
    counts = 0;

    render() {
        const color = this.props.color;

        return(
            <div className='area' onClick={this.handleClick} style={{backgroundColor: color}}>
                {this.counts < 10 
                    ? '0' + this.counts
                    : this.counts}
            </div>
        )

    }

    handleClick = () => {
        this.setState(
            {counts: ++this.counts}
        )
    }
}

export default Area;