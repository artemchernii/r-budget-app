/* eslint-disable react/prop-types */
import React, { Profiler } from 'react';

function withProfiler(WrappedComponent, id = '') {
    class WithProfiler extends React.Component {
        constructor(props) {
            super(props);
            this.onRender = this.onRender.bind(this);
        }

        onRender(...data) {
            console.log(`ID: ${id}, data: `, data);
        }
        render() {
            return (
                <Profiler id={id} onRender={this.onRender}>
                    <WrappedComponent {...this.props} />
                </Profiler>
            );
        }
    }

    WithProfiler.displayName = `WithProfiler${getDisplayName(
        WrappedComponent
    )}`;

    return WithProfiler;
}

function getDisplayName(wrappedComp) {
    return wrappedComp.displayName || wrappedComp.name || 'Component';
}

export default withProfiler;
