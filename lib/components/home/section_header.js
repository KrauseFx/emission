/* @flow */
'use strict'

import React from 'react'
import { StyleSheet, Text } from 'react-native'

class SectionHeader extends React.Component {

  render() {
    const { children, ...props } = this.props
    return (
      <Text style={styles.headerText} numberOfLines={0} {...props}>
        {children}
      </Text>
    )
  }
}

SectionHeader.propTypes = {
  ...Text.propTypes,
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'AGaramondPro-Regular',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  }
})

module.exports = SectionHeader
