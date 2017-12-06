import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar'

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */

const styles = {
    outsideContainer: {
        width: '100%',
        height: '70%',
    },
    insideContainer: {
        marginTop: '0 !important',
        height: '100%',
    },
    inputBox: {
        flexGrow: '1 !important',
    },
    input: {
        width: '100%',
        border: 0,
        '&:focus': {
            outline: 0,
        },
    },
    iconContainer: {
        marginLeft: 8,
        paddingRight: '0 !important',
    },
};

export default class AutoCompleteExampleSimple extends Component {
    render() {
        return (
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
            />
        )
    }
}