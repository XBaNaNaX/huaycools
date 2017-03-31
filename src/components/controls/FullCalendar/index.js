import React, { Component, PropTypes } from 'react';

// calendar
import Calendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

class FullCalendar extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps !== this.props;
    }

    render() {

        const { ...props } = this.props;

        return (
            <Calendar
                width={props.width || 300}
                height={props.height || 300}
                selected={props.selected}
                disabledDays={props.disabledDays || [0, 6]}
                minDate={props.minDate}
                min={props.minDate}
                maxDate={props.maxDate}
                max={props.maxDate}
                className={props.className}
                onSelect={props.handleOnSelect}
                theme={props.theme}
                displayOptions={{
                    layout: props.layout || 'portrait'
                }}
                locale={props.locale}
            />
        );
    }
}

FullCalendar.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    selected: PropTypes.any,
    disabledDays: PropTypes.array,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    className: PropTypes.string,
    handleOnSelect: PropTypes.func,
    theme: PropTypes.object,
    layout: PropTypes.string
}

FullCalendar.defaultProps = {
    theme: {
        accentColor: '#448AFF',
        floatingNav: {
            background: 'rgba(56, 87, 138, 0.94)',
            chevron: '#FFA726',
            color: '#FFF',
        },
        headerColor: '#448AFF',
        selectionColor: '#559FFF',
        textColor: {
            active: '#FFF',
            default: '#333',
        },
        todayColor: '#FFA726',
        weekdayColor: '#559FFF',
    },
    locale: {
        blank: 'Select a date...',
        headerFormat: 'DD/MM/YYYY',
        locale: require('date-fns/locale/th'),
        todayLabel: {
            long: 'Today',
        },
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weekStartsOn: 0,
    }
}

export default FullCalendar;