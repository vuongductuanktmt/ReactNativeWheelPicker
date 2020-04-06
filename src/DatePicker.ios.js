/**
 * @prettier
 * @flow
 * */

import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  onDateSelected: Date => void,
  date: Date
}

type State = {
  chosenDate: Date
}

export default class DatePicker extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = { chosenDate: props.date || new Date() }
  }

  setDate = (event, newDate) => {
    this.setState({chosenDate: newDate})
    const { onDateSelected } = this.props
    if (onDateSelected) onDateSelected(newDate)
  }

  render(){
    return (
        <DateTimePicker
          {...this.props}
          style={styles.picker}
          value={this.state.chosenDate}
          onChange={this.setDate}
        />
    )
  }
}

let styles = StyleSheet.create({
  picker: {
    width: Dimensions.get('screen').width
  },
})
