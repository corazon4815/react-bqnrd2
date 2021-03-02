import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { DatePicker } from '@progress/kendo-react-dateinputs';

class App extends React.Component {
    render() {
        return (
            <div className="example-wrapper" >
                <DatePicker />
                <p>(use Alt+<code>↓</code> to open the calendar, <code>←</code> and <code>→</code> to navigate, <code>↑</code> to increment and <code>↓</code> to decrement the value)</p>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);